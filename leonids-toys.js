// let bakugan = {
//     id: 1,
//     name: 'Bakugan',
//     color: 'red',
//     manufacturer: 'Spin Master',
//     minimumAge: 10,
//     price: 12.99
// },  

// let nerf = {
//     id: 2,
//     name: 'Nerf',
//     color: 'blue',
//     manufacturer: 'Hasbro',
//     minimumAge: 10,
//     price: 9.99
// },

// let legos = {
//     id: 3,
//     name: 'Legos',
//     color: 'assorted',
//     manufacturer: 'The Lego Group',
//     minimumAge: 4,
//     price: 19.99
// }


const toys = [
    {
        id: 1,
        name: 'Bakugan',
        color: 'red',
        manufacturer: 'Spin Master',
        minimumAge: 10,
        price: 12.99
    },  

    {
        id: 2,
        name: 'Nerf',
        color: 'blue',
        manufacturer: 'Hasbro',
        minimumAge: 10,
        price: 9.99
    },

    {
        id: 3,
        name: 'Legos',
        color: 'assorted',
        manufacturer: 'The Lego Group',
        minimumAge: 4,
        price: 19.99
    }
]


    
//for (const toy of toys) {
    //console.log(toy.color);
//}

const squishmallow = {
    id: 3,
    name: 'Squishmallow',
    color: 'rainbow',
    manufacturer: 'KellyToy',
    minimumAge: 5,
    price: 19.99
}

const powerwheel = {
    id: 4,
    name: 'Power Wheels',
    color: 'black',
    manufacturer: 'Matel',
    minimumAge: 8,
    price: 119.99
}

toys.push(squishmallow);
toys.push(powerwheel);


// for (const toy of toys) {
//     console.log(toy.color);
// }

// for (const toy of toys) {
//     console.log(`The minimum age to use ${toy.name} is ${toy.minimumAge}`);
// }

for (const toy of toys) {
    toy.price = toy.price + toy.price * 0.05,
    console.log(`The new price of ${toy.name} is now ${toy.price}`)
}
    
    















