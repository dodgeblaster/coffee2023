import * as auth from 'rise-auth-foundation/index.js'
import * as rise from 'rise-lambda-foundation/index.js'

export const config = {
    url: 'POST /login',
    env: {
        TABLE_NAME: 'coffee2023'
    },
    permissions: [
        {
            Effect: 'Allow',
            Action: [
                'dynamodb:Query',
                'dynamodb:GetItem',
                'dynamodb:PutItem',
                'dynamodb:DeleteItem'
            ],
            Resource: 'arn:aws:dynamodb:us-east-1:ID:table/coffee2023'
        }
    ]
}

const inputSchema = rise.makeSchema({
    name: 'string',
    password: 'string'
})

const redirectResponse = {
    statusCode: 302,
    headers: {
        Location: '/login?message=Wrong username or password, please try again'
    }
}

export const handler = async (event) => {
    // const ip = event.requestContext.identity.sourceIp

    let buff = new Buffer(event.body, 'base64')
    let text = buff.toString('ascii')
    const data = text.split('&').reduce((acc, x) => {
        acc[x.split('=')[0]] = x.split('=')[1]
        return acc
    }, {})
    /**
     * Validate Input
     */
    // const data = rise.getPostData(event)
    const valid = inputSchema.validate(data)

    if (!valid.isValid) {
        return rise.http.validationError(
            'Wrong username or password, please try again'
        )
    }

    /**
     * Validate Password
     */
    const hashDetails = await rise.db.get({
        pk: data.name,
        sk: 'hash'
    })

    if (!hashDetails) {
        return redirectResponse
    }

    const passwordIsValid = auth.validatePassword(
        data.password,
        hashDetails.hash
    )

    if (!passwordIsValid) {
        return redirectResponse
    }

    /**
     * Make Session
     */
    const sessionId = auth.makeSessionId()
    await rise.db.set({
        pk: sessionId,
        sk: 'session',
        name: data.name,
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24
    })

    /**
     * Response
     */
    const response = auth.setCookieHttpResponse(sessionId)
    response.headers['Location'] = '/admin'
    response.statusCode = 302
    return response
}
