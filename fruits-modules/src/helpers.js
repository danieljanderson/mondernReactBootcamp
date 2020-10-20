function choice(items){
    const randomNumber = Math.floor(Math.random() * items.length)
    const randomFruit = items[randomNumber]
    return randomFruit
}
function removes(items,item){
    for (let i = 0; i<= items.length-1;i++ ){
        if (items[i]===item){
            items.splice(i,1)
            return items
        }
        else{
            return undefined
        }
    }
}
export {choice,removes}