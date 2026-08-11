fetch("https://fakestoreapi.com/products")
.then((data)=>{
    return data.json()
})
.then((jsdata)=>{
    jsdata.forEach((a)=>{
        let api=document.querySelector(".api")
        let api1=document.createElement("div")
        api1.innerHTML=`<img src=${a.image}><h3>Title: ${a.title}</h3><h3>Category :${a.category}</h3><h3>Description :${a.description.slice(0,40)}....</h3><h3>Price :$${a.price}</h3>
        <h3>Rating :${a.rating.rate}</h3><h3>Reviews :${a.rating.count}</h3><button>BUY NOW</button>`
        api.append(api1)
    })
})