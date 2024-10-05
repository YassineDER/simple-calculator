const express = require('express')
const ip = require('ip')
const app = express()
const ipAddress = ip.address()
const ipPort = 3000

app.use(express.json({
    inflate: true,
    limit: '100kb',
    reviver: null,
    strict: true,
    type: 'application/json',
    verify: undefined
}))


app.get('/', (req, res) => {
    res.send(`
    <h1>Simple Calculator Service</h1>
    <p>&nbsp;</p>
    <h2>Use JSON commands to use the calculator</h2>
    `)
})

app.post('/json', (req, res) => {
    // Getting the operation and numbers from the request body and initializing the answer
    const operation = req.body['NodeCommand']
    const numbers = req.body['Numbers']
    let ans = 0

    // Determine the operation and calculate the answer
    switch (operation) {
        case 'Add':
            ans = numbers.reduce((a, b) => a + b)
            break
        case 'Subtract':
            ans = numbers.reduce((a, b) => a - b)
            break
        case 'Multiply':
            ans = numbers.reduce((a, b) => a * b)
            break
        case 'Divide':
            ans = numbers.reduce((a, b) => a / b)
            break
        default:
            ans = 'N/A'
    }

    res.json({
        'NodeCommand': operation,
        'Numbers': numbers,
        'Answer': ans
    })
})

app.listen(ipPort, console.log(`Listening to ${ipAddress}:${ipPort} !!!`))
