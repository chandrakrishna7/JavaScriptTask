// 🔥 Task 7 — Rating Details
// Fetch all products.
// Display:
// Product: ...
// Rating: 3.9
// Reviews: 120
// Remember that rating is an object:
// rating: {
//     rate: 3.9,
//     count: 120
// }
// So access:
// c.rating.rate
// c.rating.count



let api="https://fakestoreapi.com/products";

fetch(api)
.then((data)=>{
    return data.json()
})
.then((jsdata)=>{
    jsdata.forEach((a)=>{
        let api=document.querySelector(".api");
        api.innerHTML+=`<h3>Product :${a.title} </h3><h3>Rating :${a.rating.rate}</h3><h3>Reviews :${a.rating.count}</h3>`
    })
})