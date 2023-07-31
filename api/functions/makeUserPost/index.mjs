import * as auth from 'rise-auth-foundation/index.js'
import * as rise from 'rise-lambda-foundation/index.js'

export const config = {
    url: 'POST /makeuser',
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

export const handler = async (event) => {
    /**
     * Validate Input
     */
    let buff = new Buffer(event.body, 'base64')
    let text = buff.toString('ascii')
    const data = text.split('&').reduce((acc, x) => {
        acc[x.split('=')[0]] = x.split('=')[1]
        return acc
    }, {})

    const valid = inputSchema.validate(data)
    if (!valid.isValid) {
        return rise.http.validationError('wrong')
    }

    /**
     * Write PasswordHas into DB
     */
    const hash = auth.createPasswordHash(data.password)
    await rise.db.set({
        pk: data.name,
        sk: 'hash',
        hash: hash
    })

    return {
        statusCode: 302,
        headers: {
            Location: '/'
        },
        body: JSON.stringify({
            status: 'success'
        })
    }
}
