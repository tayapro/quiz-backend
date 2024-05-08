import { cors } from '../lib/cors.js'

async function handler(event, context) {
    try {
        const email = event.requestContext.authorizer.claims.email
        const nickname = event.requestContext.authorizer.claims.nickname
        const name = event.requestContext.authorizer.claims.name

        console.log(event.requestContext.authorizer.claims)

        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
                ...cors,
            },
            body: JSON.stringify({
                nickname,
                name,
                email,
                location: 'Ireland',
                date: `${new Date().toISOString()}`,
                hello_variable: process.env.PPP_HELLO,
            }),
        }
    } catch (err) {
        console.error(err)
        return {
            statusCode: 400,
        }
    }
}

export { handler }
