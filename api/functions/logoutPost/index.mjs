import * as auth from 'rise-auth-foundation/index.js'
import * as rise from 'rise-lambda-foundation/index.js'

export const config = {
    url: 'POST /logout',
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

function getSessionCookieFromApiEvent(event) {
    const headers = event
    const cookie =
        headers.cookies && headers.cookies.find((x) => x.startsWith('session='))
            ? headers.cookies
                  .find((x) => x.startsWith('session='))
                  .split('=')[1]
            : 'no session found'

    if (cookie === 'no session found') {
        return false
    }
    return cookie
}

export const handler = async (event) => {
    console.log(JSON.stringify(event, undefined, 2))
    const sessionId = getSessionCookieFromApiEvent(event)

    if (!sessionId) {
        return {
            statusCode: 400,
            body: JSON.stringify({ id: 400 })
        }
    }

    await rise.db.remove({
        pk: sessionId,
        sk: 'session'
    })

    return {
        statusCode: 200,
        body: JSON.stringify({ id: 200 })
    }
}
