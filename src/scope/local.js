const helloWorld = () =>{
    const hello = 'Hello world'
    console.log(hello)
}

helloWorld()

var scope = 'i am global'

const functionScope = () =>{
    var scope = 'i am local'
    const func = () =>{
        return scope
    }
    console.log(func())
}

functionScope()