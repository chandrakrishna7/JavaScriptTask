// 🔥 Task 4 — Product Image Gallery
// Fetch the products.
// Display only the images.
// Each image should be created using:
// document.createElement("img")
// Use the API's image property.


fetch("https://fakestoreapi.com/products")
.then((data)=>{
    return data.json();
})
.then((jsdata)=>{
    jsdata.forEach((c)=>{
        let image=document.createElement("img");
        let imgs=document.querySelector(".imgs");
        image.src=c.image
        imgs.append(image)
    })
})