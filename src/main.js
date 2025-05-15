let products = {
    data : [{
        productsName : "Regular White T-shirt",
        caterogry : "Topwear",
        price : "30",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgjbWiGWyCKrM6V8Wgm2kid4HcW5RsAosJU5PLQyoQKY93t1raA9WU3tpuKIOYcMG0T6A&usqp=CAU"

    },
    {
        productsName : "Beige Short Skirt",
        caterogry : "Bottomwear",
        price : "49",
        image : "https://djerfavenue.com/media/images/112_1552a32a85-10088-1004-20-original.jpg/?auto=format&w=1600&q=80"
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
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo141otJDZG3IJF3XZdZnwsFLCJ6tQmCcBIXjw9FMG64DirYqMOefTX4RsD1yTSziKe18&usqp=CAU"

    },
    {
        productsName : "Black Leather Jacket",
        caterogry : "Jacket",
        price : "129",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU95__wA6N4XgkmTgMdatV1JfeHUSfwf6RATkmBZMur3hpCsyq9Shlrti9jDigtfIF8W4&usqp=CAU"

    },
    {
        productsName : "Stylish Pink Trousers",
        caterogry : "Bottomwear",
        price : "89",
        image : "https://img.tatacliq.com/images/i13/437Wx649H/MP000000018469553_437Wx649H_202308261342521.jpeg"
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
        image : "https://cdn.occtoo-media.com/995cf62a-7759-4681-a516-370aaabfd325/2e994858-da23-575e-8132-244978299d6a/248979-7345_01.jpg?format=large&outputFormat=webp"

    }
]
}

for (let i of products.data) {
  
   // create card
    let card = document.createElement('div')
    // card should have category and should stay hidden initially 
    card.classList.add('card', 'i.category', 'hide')
   
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
