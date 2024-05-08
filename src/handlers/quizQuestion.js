import { cors } from '../lib/cors.js'
import { quiz } from '../quizeStore.js'

function getRandomNumber() {
    return Math.floor(Math.random() * (quiz.length - 1))
}

function getQuest() {
    const id = getRandomNumber()
    return JSON.stringify({
        question: quiz[id].question,
        options: quiz[id].options,
    })
}

async function handler() {
    try {
        const quest = getQuest()
        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
                ...cors,
            },
            body: quest,
        }
    } catch (err) {
        console.error(err)
        return {
            statusCode: 400,
        }
    }
}

export { handler }
