function add(a,b) {
    return a + b;
}
const subtract = (a, b) => {
    return a - b;
}
console.log(add(5, 3)); 
console.log(subtract(5, 3)); 
const obj=
{
    name: "Preetha",
    age: 20,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};
console.log(obj.name);
console.log(obj.greet()); 

const numbers=[1, 2, -3, 4, -5];
const mappednum=numbers.map((num) => num *3);
console.log(mappednum);

const posNum=numbers.filter((num) => num > 0);
console.log(posNum);

const oddNum=numbers.filter((num)=>num%2!=0)
console.log(oddNum);

const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);

const products=[
    { name: "Laptop", price: 10000 },
    { name: "Phone", price: 5500 },
    { name: "Tablet", price: 3000 }
];
const totalPrice = products.reduce((acc, product) => acc + product.price, 0);
console.log(totalPrice);

const p=products.filter((product)=>product.price >5000);
console.log(p);

//Destructuring
const user={name:'Preetha',password:'1234'}
const {name,password}=user
console.log(password);

const num=[1,2,3,4,5];
const [first, second,third,...spread] = num;
console.log(spread);

// Spread Operator
const arr1 = [1, 2, 3];
const copy = [...arr1,4,5,6];
console.log(copy);

// Rest Operator
function add2(...args) {
    return args.reduce((sum,num) => sum + num, 0);
}
console.log(add2(1, 2, 3, 4, 5));

//callbacks
function call() {
    console.log("This is a callback function");

}
function fun (name, callback) {
    callback();
    return `${name} from outside callback`
}
console.log(fun('call',()=>{console.log(`from inside callback`)}))

async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    //console.log(data);
    data.map((a) => console.log(a.name))
    }
    catch (error) {
        console.log(error);
    } 
}
fetchUsers(); 



