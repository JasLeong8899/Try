const car={
    name:'bmw',
    price:100,
    model:110,
    type:'x5',

}

const {name,price,...other}=car
console.log(other)