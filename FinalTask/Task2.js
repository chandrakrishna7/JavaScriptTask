// 🔥 Task 2 — Product Description
// Fetch all products.
// For every product, display:
// Title: ...
// Description: ...
// Price: ...
// But show only the first 50 characters of the description.
// Use:
// slice()


fetch("https://fakestoreapi.com/products")
.then((data)=>{
    return data.json();
    
})
.then((product)=>{
    console.log(product);
    product.forEach((a)=>{
        let apis=document.querySelector(".apii");
        apis.innerHTML +=`<h3>Title :${a.title}</h3><h3>Description :${a.description.slice(0,50)}</h3><h3> Price :${a.price}`
       
    })
})
