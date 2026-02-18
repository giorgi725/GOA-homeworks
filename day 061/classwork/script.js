// //dot notation - მივწვდები ობიექტის თვისებას 
// // property - კუთვნილება document.getelementByID
// // methods - ობიექტზე მიბმული ფუნქცია "მეთოდი"smth.style.backGroundColor = 'green'
// // events - მოვლენა smth.onclick = function() { } 
// const smth = document.getElementById("smth")
// smth.style.background = 'green'

// const smth = document.getElementsByClassName("dsds")
// smth.textContent = "hello"

// const smth = document.querySelector("ewd")


// let myBtn = document.createElement("button");
// myBtn.textContent = 'Click me'
// document.body.appendChild(myBtn);
// document.body.removeChild(myBtn);

// const newtext = document.createTextNode("fwdew")
// document.body.appendChild("newtext")

// //node - HTML ს ნებისმიერი განშტოება

// let btn = document.getElementById("btn")
// btn.onclick = function (){
//     let btnparent = btn.parentNode

// }
// const div = document.querySelector("div")
// const btn = document.querySelector("butt0n")
// const par = document.querySelector("p")

// console.log(div.nextSibling())
// console.log(div.lastChild())
// console.log(div.firstChild())
// console.log(div.childNodes())
// console.log(div.previousSibling())
// console.log(div.removeChild())
// console.log(div.hasChildNodes())
// console.log(div.appendChild())

// let myBtn = document.createElement("button");
// myBtn.textContent = 'Click me'
// document.body.appendChild(myBtn);
// document.body.removeChild(myBtn);


const products = [
    {name: 'product1', price: 100, desc:"this is product1"},
    {name: 'product2', price: 200, desc:"this is product2"},
    {name: 'product3', price: 300, desc:"this is product3"},
    {name: 'product4', price: 400, desc:"this is product4"},
]

const productscontainer = document.getElementById("productcontainer")
const cartproduct = document.getElementById("cartproduct")

// for (let i = 0; i < products.length; i++) {
//     let currentproduct = products[i]

    // //create elements
    // const productdiv = document.createElement("div")
    
    // //product
    // const productHeader = document.createElement("h2")
    // productHeader.textContent = productdiv.name

    // //price
    // const pricep = document.createElement("p")
    // pricep.textContent = "product price $: " + currentproduct.price

    // //description
    // const descp = document.createElement("p")
    // descp.textContent = "description: " + currentproduct.desc

    // //img
    // const producticon = document.createElement("img")
    // producticon.style.width = "200px"
    // producticon.style.height = "200px"

    // //button
    // const buybtn = document.createElement("button")
    // buybtn.textContent = "buy"
    // buybtn.onclick = function () {
    //     let newproduct = productdiv.cloneNode();
    //     cartproduct.appendChild(newproduct)
    // }

    // //chamateba
    // productdiv.appendChild(productHeader)
    // productdiv.appendChild(pricep)
    // productdiv.appendChild(descp)
    // productdiv.appendChild(producticon)
    // productdiv.appendChild(buybtn)

function addproduct() {
    cartproduct.innerHTML += `
    <div class='productDIV>
        <h2>${currentproduct.name}</h2>
        <p>Price $${currentproduct.price}</p>
        <p>description ${currentproduct.desc}</p>
        <img width="200px",heigth="200px"/>
        <button onclick=${addproduct(currentproduct)}>Buy<button>
    </div>
    `
}

//     productscontainer.appendChild(productdiv)
function renderproduct(currentproduct){
    productscontainer.innerHTML += `
    <div class='productDIV>
        <h2>${currentproduct.name}</h2>
        <p>Price $${currentproduct.price}</p>
        <p>description ${currentproduct.desc}</p>
        <img width="200px",heigth="200px"/>
        <button onclick=${addproduct(currentproduct)}>Buy<button>
    </div>
    `
}
for (let i = 0; i < products.length; i++) {
    let currentproduct = products[i]
}