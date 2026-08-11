// 🔥 Task 5 — Category Display
// Fetch all products.
// Display:
// Title: ...
// Category: ...
// Price: ...
// Example:
// Title: Fjallraven - Foldsack No. 1 Backpack
// Category: men's clothing
// Price: $109.95

fetch("https://fakestoreapi.com/products")
.then((data)=>{
    return data.json();
})
.then((jsdata)=>{
    jsdata.forEach((c)=>{
        let api=document.querySelector(".api")

        api.innerHTML+=`<h3>Title :${c.title}</h3><h3>Category :${c.category}<h3>Price :${c.price}</h3></h3>`
    })
})