import fs from 'fs'

export const config = {
    url: 'GET /mkeuser'
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

    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'text/html'
        },
        body: getHtml()
    }
}
