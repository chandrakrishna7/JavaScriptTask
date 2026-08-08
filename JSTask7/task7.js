//Task1 training institute

let studentName="chandhu";
let Age=23;
const Depart="cse";
let coursefee=20000;

console.log("Student Name :",studentName);
console.log("Age :",Age);
console.log("Department :",Depart);
console.log("course Fee :",coursefee);

if(Age>=18){
    console.log("Eligible for Training ");
}
else
    console.log("Not Eligible for training");
    

//Task2 Employee salary 

let BasicSalary=50000;
let bonus;
let Deductions=2000;

if(BasicSalary>=40000){
    bonus=2000;
}
else
    bonus=1000

let Totalsalary=Number(BasicSalary)+bonus-Deductions;

console.log(Totalsalary);

//Task3 shoping cart

let Arr=["Laptop","Mouse","Keyboard","Headphone"];

Arr.concat("Speakers");
console.log(Arr);

Arr.pop();
console.log(Arr);

for(let a of Arr){
    console.log(a);
}

console.log(Arr[0],Arr[Arr.length-1]);

//Task4 Login Validation

const Username="admin";
const password=12345;

// const user=prompt("Enter username");
// const pass=prompt("Enter password");

if(Username=="admin" && password==12345){
    console.log("Login success");
}
else
    console.log("Invalid Username or Password");
 
//Task5 movie tickets

const age=23;

if(age >=18){
    console.log("Eligible");
}
else
    console.log("Not eligible");
    
//Task6 employee salary

let Employee=
[
{name:"Arun",salary:25000},
{name:"Kavin",salary:40000},
{name:"Ravi",salary:55000}
];
 
let data=Employee.find((c,i,t)=>{
    return c.name="Kavin"
});

console.log(data);

//Task7 Product Filter
 
let Product=[
{name:"laptop",price:30000},
{name:"Mouse",price:300},
{name:"Keyboard",price:500},
{name:"headphone",price:200}
]

let pro=Product.filter((c,i,t)=>{
    return c.price<500;
})

console.log(pro);

for(let b of pro){
    console.log(b); 
}

//Task8 Student Marks (Map)

let Arrays=[45,56,67,89];

let num=Arrays.map((nums)=>nums+5);
console.log(num);

//Task9 Attendance Checker (Every)

let Attendance=[90,85,70,65];

let att=Attendance.every((c,i,t)=>{
    return c>50;
})
console.log(att);

//Task10 otp

let otps= Math.floor(100000 + Math.random() * 900000);

console.log("OTP:", otps);

//Task11 Passward checker

const input="Abc@1234";

let char=input.length>=8;
let numbers=/[0-9]/.test(input);
let UpperCase = /[A-Z]/.test(input);
let Specialchar = /[!@#$%^&*(),.?":{}|<>]/.test(input);

if (char && numbers && UpperCase && Specialchar) {
    console.log("Strong Password");
} else {
    console.log("Weak Password");
}

// Task12 product search 

let products = ["Laptop", "Mobile", "Watch", "Camera"];

let requiredproduct="Mobile";
if(products.includes(requiredproduct)){
    console.log("available");
}
else
    console.log("Not available");
 
//Task13 Current Digital Clock (Date + setInterval)

// setInterval(function(){
//     let date=new Date();

//     let time=date.toLocaleTimeString();
//     console.clear();
//     console.log(time);
    
// },1000)

// TASK 14 - Countdown Timer

let count = 10;

let timer = setInterval(function () {
    console.log(count);

    count--;

    if (count < 0) {
        clearInterval(timer);
    }
}, 1000);

// TASK 15 - Fake API Product Viewer
fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(products => {
        products.forEach(product => {
            console.log("Image:", product.image);
            console.log("Name:", product.title);
            console.log("Price: ₹" + product.price);
            console.log("------");
        });
    });


//Task16  Employee Dashboard (Reduce)

let employees = [
    { name: "Arun", salary: 25000 },
    { name: "Kavin", salary: 40000 },
    { name: "Ravi", salary: 55000 }
];
let totalSalary = employees.reduce((acc,c,i,t)=>{
    return acc+c.salary;
},0);
console.log(totalSalary);

let Averagesalary=totalSalary/employees.length;

console.log(Averagesalary);

let highestsalary=employees.reduce((a,emp)=>{
    return a.salary<emp.salary ? emp:a;
})
console.log(highestsalary);

//Task17 Online Food Order

let menu = ["Pizza", "Burger", "Shawarma", "Fries"];

menu.push("eggroll");
console.log(menu);

menu.pop();
console.log(menu);

for(let a of menu){
    console.log(a);
}

let bill=200+300+16+800;

console.log("bill :",bill);

//Task18 Bank account

let bank={
    accountholder:"chandhu",
    balance:10000000
}
function Deposit(amount){
    console.log("Amount deposited :",amount);
    bank.balance+=amount
}
Deposit(2000)
console.log( "Total balance :",bank.balance);

function withdraw(amount){
    console.log("Amount withdraw :",amount);
    bank.balance-=amount;
}
withdraw(20000)
console.log( "Total balance :",bank.balance);

function checkbalance(){
    console.log("Remaining balance :",bank.balance);
}
checkbalance();

// TASK19 - To-Do List

let tasks = ["java", "js"];

tasks.push("Html"); 

tasks[1] = "react js"; 

tasks.splice(0, 1); 

for(let c of tasks){
    console.log(c);
    
}

 //Task20  Mini E-Commerce Product Management
let product1= [
    {
        name : "Mobile",
        price : 30000,
        category : "Electronics",
        stock : 50
    },
    {
        name : "Laptop",
        price : 90000,
        category : "Electronics",
        stock : 80
    },
    {
        name : "Tablet",
        price : 60000,
        category : "Electronics",
        stock : 20
    },
    {
        name : "Presure cooker",
        price : 2000,
        category : "Kitchen Items",
        stock : 30
    },
    {
        name : "Peanut butter",
        price : 300,
        category : "Fitness",
        stock : 48
    },
    {
        name : "Running shoes",
        price : 800,
        category : "Shoes",
        stock : 15
    }
    
]
function Addproduct(product){
    product1.push(product);
    for(let a of product1){
        console.log(Object.values(a));  
    }
}
Addproduct({
        name : "Mangoes",
        price : 100,
        category : "Fruits",
        stock : 200
})

function search(product){
    let finds=product1.find((c,i,t)=>{
        return c.name==product;
       
        
    })
     console.log(finds);
}
search("Mobile")
function bycateogry(category){
    let filters=product1.filter((c,i,t)=>{
    return c.category==category
})
console.log(filters);
}
bycateogry("Electronics")

function stocks(){
    let stocks=product1.reduce((acc,c)=>{
        return acc+c.stock;
    },0)
    console.log(stocks);
}
stocks();

function toatlinventory(){
    let toatls=product1.reduce((acc,c)=>{
       return acc+c.stock*c.price;
    },0)
    console.log(toatls);
    
}
toatlinventory();