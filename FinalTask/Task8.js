// 🔥 Task 8 — First 20 Characters
// Fetch all products.
// Display:
// Title: ...
// Description: [first 20 characters]
// Use:
// slice(0, 20)
fetch("https://fakestoreapi.com/products")
.then((data)=>{
    return data.json()
})
.then((jsdata)=>{
    jsdata.forEach((a)=>{
        let api=document.querySelector(".api");
        api.innerHTML+=`<h3>Title :${a.title}</h3>
        <h3>Description: ${a.description.slice(0,20)}</h3>`
    })
})