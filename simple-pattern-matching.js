const {matches} = require('z')

const person = {
    name: 'Maria'
}
matches(person)(
    (x = { name: 'John'}) => console.log('John you are not welcome!'),
    (x) => console.log(`Hey ${x.name}, you are welcome!`)
)

