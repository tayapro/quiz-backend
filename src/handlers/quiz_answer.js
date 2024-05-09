import { cors } from '../lib/cors.js'
import { quiz } from '../quizeStore.js'

function isAnswerCorrect(body) {
    const quest = quiz.find((obj) => {
        return obj.question === body.question
    })
    if (!quest) {
        throw new Error(
            `Ooops, looks like question ${body.question} is not found in our records`
        )
    }

    return quest.answer_index === body.answer_index
}

async function handler(event) {
    try {
        const body = JSON.parse(event.body)
        const answer_correct = isAnswerCorrect(body)

        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
                ...cors,
            },
            body: JSON.stringify({ correct: answer_correct }),
        }
    } catch (err) {
        console.error('BLA:', err)
        return {
            statusCode: 400,
            headers: {
                ...cors,
            },
        }
    }
}

export { handler }
