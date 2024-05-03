async function handler(event) {
    try {
        return {
            statusCode: 200,
            body: 'OK',
        }
    } catch (err) {
        console.error(err)
        return {
            statusCode: 400,
        }
    }
}

export { handler }
