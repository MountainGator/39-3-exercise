
const choice = (items) => {
    let randomNo = Math.floor(Math.random() * items.length);
    return items[randomNo];
}

const remove = (items, item) => {
    
    for (let each of items) {
        if(each === item) {
            return items.filter(i => i !== each);
        }
    }
}

export { choice, remove };