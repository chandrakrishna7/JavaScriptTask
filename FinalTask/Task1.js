//Task1 Product Cards

let api="https://fakestoreapi.com/products";

fetch(api)
.then((data)=>{
    return data.json()
})
.then((jsdata)=>{    

    jsdata.forEach((element)=>{
         let api=document.querySelector(".api");
    let api1=document.createElement("div");

     api1.innerHTML=`<h3>Title:${element.title}</h3> <img src=${element.image}>
    <h3>Category:${element.category} </h3><h3>Rating :${element.rating.rate} (${element.rating.count} Reviews) </h3>
    <button>price:${element.price}</button> `
        api.append(api1)
    })
})
