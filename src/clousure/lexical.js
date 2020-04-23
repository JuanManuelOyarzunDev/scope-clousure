const billCount = (i) =>{
    let count = i
    const displayCount = () =>{
        console.log(count++)
    }
    return displayCount
}

const myCount = billCount(1)

myCount()
myCount()
myCount()

const myCount2 = billCount(10)

myCount2()
myCount2()
myCount2()
