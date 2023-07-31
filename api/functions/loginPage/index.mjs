import fs from 'fs'

export const config = {
    url: 'GET /login'
}

/**
 * This function uses the fs module to get the text of ./index.html
 */
function getHtml() {
    return fs.readFileSync('./index.html', 'utf8')
}

export const handler = async (event) => {
    // Log the event argument for debugging and for use in local development.
    console.log(JSON.stringify(event, undefined, 2))

    const querystring = event.rawQueryString

    if (querystring !== '' && querystring.startsWith('message=')) {
        const message = querystring.split('=')[1]

        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'text/html'
            },
            body: getHtml().replace(
                '{{error}}',
                `<p class="text-red-400 px-4 py-2">${message.replaceAll(
                    '%20',
                    ' '
                )}</p>`
            )
        }
    }

    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'text/html'
        },
        body: getHtml().replace('{{error}}', '')
    }
}
