var a = 'hello'

const hello = () =>{
    let b = 'hello world'
    const c = 'hello wolrd!'
    if (true) {
        let d = 'hello world!!'
        debugger
    }
}

hello()

const moneyBox = () =>{
    var saveCoins = 0
    const countCoins = (coins) =>{
        saveCoins += coins
        console.log(`MoneyBox: $${saveCoins}`)
    }
    return countCoins
}

let myMoneyBox = moneyBox()

myMoneyBox(4)
myMoneyBox(6)
myMoneyBox(10)