const fruits = () =>{
    if (true) {
        var fruit1 = 'Apple'  //Podemos acceder desde cualquier bloque de la funcion
        let fruit2 = 'Banana'
        const fruit3 = 'Kiwi'

        console.log(fruit2)
        console.log(fruit3)
    }
    console.log(fruit1)

}

fruits()

let x = 1
{
    let x = 2
    console.log(x)
}

console.log(x)

const anotherFunction= () =>{
    for (let index = 0; index < 10; index++) {
        setTimeout(()=>{
            console.log(index)
        },1000)
        
    }
}

anotherFunction()