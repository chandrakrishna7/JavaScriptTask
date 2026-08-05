//Task 1 Hotel Booking

const username="Chandhu";
const age=23;
const locations="hyderabad";

let Dates=new Date();

//set date
let Booking_Date=Dates.setDate(9);
let Bokking_Year=Dates.setFullYear(2026);
let Bokking_Month=Dates.setMonth(8);

//set time

let Booking_hour=Dates.setHours(10);
let Bokking_Minute=Dates.setMinutes(25);
let Booking_seconds=Dates.setSeconds(30);

//get Data

let Datee=Dates.getDate();
let Day=Dates.getDay();
let Month=Dates.getMonth();
let year=Dates.getFullYear();
let hour=Dates.getHours();
let minutes=Dates.getMinutes();
let Seconds=Dates.getSeconds();
let Time=Dates.getTime();


console.log("UserName :",username);
console.log("Age :",age);
console.log("location :",locations);
console.log(`Date of booking: ${Datee}/${Month}/${year}`);
console.log(`Time: ${hour}:${minutes}:${Seconds}`);
console.log("Dayy: ",Day);



//Movie Tickets

const Moviename="Salar";
const Tickets=2;
const price=200;

let Dates1=new Date();

//set date
let Booking_Dates=Dates1.setDate(24);
let Bokking_Years=Dates1.setFullYear(2026);
let Bokking_Months=Dates1.setMonth(8);

//set time

let Booking_hours=Dates1.setHours(10);
let Bokking_Minutes=Dates1.setMinutes(25);
let Booking_second=Dates1.setSeconds(30);

//get Data

let Datee1=Dates1.getDate();
let Day1=Dates1.getDay();
let Month1=Dates1.getMonth();
let year1=Dates1.getFullYear();
let hour1=Dates1.getHours();
let minutes1=Dates1.getMinutes();
let Seconds1=Dates1.getSeconds();
let Time1=Dates1.getTime();


console.log("MovieName :",Moviename);
console.log("Ticket :",Tickets);
console.log("price :",price);
console.log("Total Tickets price: ",price*Tickets);
console.log(`Date of booking: ${Datee1}/${Month1}/${year1}`);
console.log(`Time: ${hour1}:${minutes1}:${Seconds1}`);
console.log("Dayy: ",Day1);






