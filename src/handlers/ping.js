let a = 10

async function handler(event) {
    try {
        a++
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'OK',
                a,
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
