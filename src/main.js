let products = {
    data : [{
        productsName : "Regular White T-shirt",
        caterogry : "Topwear",
        price : "30",
        image : "https://i5.walmartimages.com/seo/T-Shirts-Performance-T-Shirt_0c1f95b2-f687-4e23-9a06-20030f290f2e_1.cd79f49134c2037976890c3373db7708.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF"

    },
    {
        productsName : "Beige Short Skirt",
        caterogry : "Bottmwear",
        price : "49",
        image : "https://www.yoox.com/images/items/13/13918312SL_14_f.jpg?impolicy=crop&width=387&height=490"
    },
    {
        productsName : "Sporty SmartWatch ",
        caterogry : "Watch",
        price : "90",
        image : "https://m.media-amazon.com/images/I/51SKVvXWnaL.__AC_SY300_SX300_QL70_ML2_.jpg"

    },
    {
        productsName : "Basic Knitted Top",
        caterogry : "Topwear",
        price : "29",
        image : "https://static.e-stradivarius.net/assets/public/7e09/5305/6a1d410181c5/acc4f7a779a2/08557350428-m/08557350428-m.jpg?ts=1725879021484&w=730"

    },
    {
        productsName : "Black Leather Jacket",
        caterogry : "Jacket",
        price : "129",
        image : "https://m.media-amazon.com/images/I/918oAJD+GgL._AC_UY1000_.jpg"

    },
    {
        productsName : "Stylish Pink Trousers",
        caterogry : "Bottomwear",
        price : "89",
        image : "https://imagescdn.thecollective.in/img/app/product/4/492039-3607674.jpg?w=500&auto=format"
    },
    {
        productsName : "Brown Men's Jacket",
        caterogry : "Jaket",
        price : "189",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRwVqxR0jhZnFVG6uKrYpHhXxRztdkoh0QB-OrItmHCiNikeaVgVu7FZfOfHlEKsVzv-s&usqp=CAU"

    },
    {
        productsName : "Comfy Gray Pants",
        caterogry : "Bottomwear",
        price : "49",
        image : "https://designsfromjess.com/wp-content/uploads/2016/02/974MP_OX_CPOHP.png"

    }
]
}

for (let i of products.data) {
  
   // create card
    let card = document.createElement('div')
    // card should have category and should stay hidden initially 
    card.classList.add('card', i.caterogry, 'hide')
   
    // img div
    let imgContainer = document.createElement('div')
    imgContainer.classList.add('image-container')
    
    // img tag
    let image = document.createElement('img')
    
    image.setAttribute("src", i.image)

    // append Child
    imgContainer.appendChild(image)
    card.appendChild(imgContainer)

    // container
    let container = document.createElement('div')  
    container.classList.add('container')
    //product name
    let name = document.createElement('h5')
    name.classList.add("product-name")  
    name.innerText = i.productsName.toUpperCase()
    container.appendChild(name)
    
    
    // price
    let price = document.createElement('h6')
    price.innerText = "$" + i.price
    container.appendChild(price)

    card.appendChild(container)
    document.getElementById("products").appendChild(card)
}

// parameter passed from button (parameters same as category)
const filterProduct = (value) =>{
    let buttons = document.querySelectorAll('.button-value')
    
    buttons.forEach(button => {
        value.toUpperCase() == button.innerText.toUpperCase() ?  button.classList.add('active') :  button.classList.remove('active')
    })


    // select all cards
    let elements = document.querySelectorAll('.card');
    elements.forEach(element =>{
        // display all cards on all    
        if(value == "all") {
           element.classList.remove('hide')   
        } 
        else { 
            element.classList.contains(value) ? element.classList.remove('hide') : element.classList.add('hide');
        }
   
    })
}


// Search button click

document.getElementById("search").addEventListener("click", ()=>{
    let  searchInput = document.getElementById('search-input')
    let elements = document.querySelectorAll('.product-name')
    let cards = document.querySelectorAll('.card');

    // loop through all  elements
    elements.forEach((element, index) => {

        element.innerText.includes(searchInput.value.toUpperCase()) ? cards[index].classList.remove('hide') :  cards[index].classList.add('hide')
    })
})

// Initiaylly display all products

window.onload = () => {
    filterProduct('all')
}