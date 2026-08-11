// 🔥 Task 3 — Product List
// Create a <div class="api"></div> in HTML.
// Fetch the products and display them like:
// Product: Fjallraven Backpack
// Price: $109.95
// Category: men's clothing

// [Product Image]
// Each product should be inside its own <div>.



fetch("https://fakestoreapi.com/products")
.then((data)=>{
    return data.json()
})
.then((jsdata)=>{
    console.log(jsdata);
    
    jsdata.forEach((c)=>{
        let api=document.querySelector(".api")
        let api1=document.createElement("div");
        api1.innerHTML=`<h3>Product : ${c.title.slice(0,20)} </h3> <h3>Price :${c.price}</h3><h3>Category :${c.category}
        </h3><img src=${c.image}>`
       api.append(api1)
        
    })
})