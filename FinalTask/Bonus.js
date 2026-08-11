



fetch("https://fakestoreapi.com/products")
.then((data)=>{
    return data.json()
})
.then((jsdata)=>{
    jsdata.forEach((a)=>{
        let api=document.querySelector(".api")
        let api2=document.createElement("div")
        api2.innerHTML=`<h3>Product :${a.title}</h3>
        <img src=${a.image}>
        <button><h3>Price :$${a.price}</h3></button>
        <h3>Category :${a.category}</h3>
        <h3>Rating : ${a.rating.rate}</h3>`
        api.append(api2)
    })
})