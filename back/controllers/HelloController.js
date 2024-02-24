const sayHello = (req, res) => {
    res.send('Hello Everyone !')
}

const sayBonjour = (req, res) => {
    res.send('Bonjour à tous !')
}

export { sayHello, sayBonjour }