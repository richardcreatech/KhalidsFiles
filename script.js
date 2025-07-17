const a = document.querySelectorAll('a');

a.forEach((a) => {
    a.onclick = () => {
        a.preventDefault()
    }
})


const sciFi_Sec = document.querySelector('.sciFi');
const mys_Sec = document.querySelector('.myst');
const litr_Sec = document.querySelector('.litr');
const horr_Sec = document.querySelector('.horr');
const bio_Sec = document.querySelector('.bio');
const hist_Sec = document.querySelector('.hist');
const bus_Sec = document.querySelector('.bus');

const sepSec = [
    sciFi_Sec,
    mys_Sec,
    litr_Sec,
    horr_Sec,
    bio_Sec,
    hist_Sec,
    bus_Sec,
]

sepSec.forEach((i) => {
    i.innerHTML = ''
})

// This holds an Array of diff Books
const books = [
  { id: 0, img: "#", title: "Galactic Horizons", author: "Nova Lee", price: 10.99, is_sciFi: true, is_Mys: false, is_Literary: false, is_Horror: false, is_Biography: false, is_History: false, is_Business: false },
  { id: 1, img: "#", title: "Timewave Collapse", author: "Ezekiel Voss", price: 12.49, is_sciFi: true, is_Mys: false, is_Literary: false, is_Horror: false, is_Biography: false, is_History: false, is_Business: false },
  { id: 2, img: "#", title: "Orbital Dusk", author: "Lana Crest", price: 8.75, is_sciFi: true, is_Mys: false, is_Literary: false, is_Horror: false, is_Biography: false, is_History: false, is_Business: false },
  { id: 3, img: "#", title: "Void Protocol", author: "Kieran Sol", price: 15.00, is_sciFi: true, is_Mys: false, is_Literary: false, is_Horror: false, is_Biography: false, is_History: false, is_Business: false },
  { id: 4, img: "#", title: "Neon Genesis Redux", author: "Sera Quinn", price: 9.95, is_sciFi: true, is_Mys: false, is_Literary: false, is_Horror: false, is_Biography: false, is_History: false, is_Business: false },

  { id: 5, img: "#", title: "The Silent Widow", author: "Harper Cross", price: 11.99, is_sciFi: false, is_Mys: true, is_Literary: false, is_Horror: false, is_Biography: false, is_History: false, is_Business: false },
  { id: 6, img: "#", title: "Echoes in the Fog", author: "Julian Marks", price: 9.50, is_sciFi: false, is_Mys: true, is_Literary: false, is_Horror: false, is_Biography: false, is_History: false, is_Business: false },
  { id: 7, img: "#", title: "Whispers at Midnight", author: "Clara Vane", price: 13.25, is_sciFi: false, is_Mys: true, is_Literary: false, is_Horror: false, is_Biography: false, is_History: false, is_Business: false },
  { id: 8, img: "#", title: "The Vanishing Key", author: "Derek Stone", price: 10.49, is_sciFi: false, is_Mys: true, is_Literary: false, is_Horror: false, is_Biography: false, is_History: false, is_Business: false },
  { id: 9, img: "#", title: "Deadly Silence", author: "Ivy Grant", price: 12.00, is_sciFi: false, is_Mys: true, is_Literary: false, is_Horror: false, is_Biography: false, is_History: false, is_Business: false },

  { id: 10, img: "#", title: "Leaves of Light", author: "T. M. Archer", price: 14.20, is_sciFi: false, is_Mys: false, is_Literary: true, is_Horror: false, is_Biography: false, is_History: false, is_Business: false },
  { id: 11, img: "#", title: "River Between Pages", author: "Maya Oko", price: 16.00, is_sciFi: false, is_Mys: false, is_Literary: true, is_Horror: false, is_Biography: false, is_History: false, is_Business: false },
  { id: 12, img: "#", title: "Stillness & Smoke", author: "Leah Hart", price: 13.80, is_sciFi: false, is_Mys: false, is_Literary: true, is_Horror: false, is_Biography: false, is_History: false, is_Business: false },
  { id: 13, img: "#", title: "The Paper Bridge", author: "Omari King", price: 11.90, is_sciFi: false, is_Mys: false, is_Literary: true, is_Horror: false, is_Biography: false, is_History: false, is_Business: false },
  { id: 14, img: "#", title: "A Way of Words", author: "Sofia Marten", price: 15.50, is_sciFi: false, is_Mys: false, is_Literary: true, is_Horror: false, is_Biography: false, is_History: false, is_Business: false },

  { id: 15, img: "#", title: "Shadows Beneath", author: "Grayson Wolfe", price: 11.10, is_sciFi: false, is_Mys: false, is_Literary: false, is_Horror: true, is_Biography: false, is_History: false, is_Business: false },
  { id: 16, img: "#", title: "The Hollow House", author: "Mira Black", price: 13.50, is_sciFi: false, is_Mys: false, is_Literary: false, is_Horror: true, is_Biography: false, is_History: false, is_Business: false },
  { id: 17, img: "#", title: "Feast of Crows", author: "V. D. Moore", price: 12.70, is_sciFi: false, is_Mys: false, is_Literary: false, is_Horror: true, is_Biography: false, is_History: false, is_Business: false },
  { id: 18, img: "#", title: "Cabin 13", author: "Reese Hollow", price: 10.20, is_sciFi: false, is_Mys: false, is_Literary: false, is_Horror: true, is_Biography: false, is_History: false, is_Business: false },
  { id: 19, img: "#", title: "Night Whispers", author: "Isla Keen", price: 14.10, is_sciFi: false, is_Mys: false, is_Literary: false, is_Horror: true, is_Biography: false, is_History: false, is_Business: false },

  { id: 20, img: "#", title: "Unbroken Spirit", author: "Eleanor Keys", price: 10.75, is_sciFi: false, is_Mys: false, is_Literary: false, is_Horror: false, is_Biography: true, is_History: false, is_Business: false },
  { id: 21, img: "#", title: "Chasing Daylight", author: "Louis Kane", price: 9.85, is_sciFi: false, is_Mys: false, is_Literary: false, is_Horror: false, is_Biography: true, is_History: false, is_Business: false },
  { id: 22, img: "#", title: "Becoming My Name", author: "Zara Nwosu", price: 13.00, is_sciFi: false, is_Mys: false, is_Literary: false, is_Horror: false, is_Biography: true, is_History: false, is_Business: false },
  { id: 23, img: "#", title: "Falling Forward", author: "Abe Jensen", price: 12.45, is_sciFi: false, is_Mys: false, is_Literary: false, is_Horror: false, is_Biography: true, is_History: false, is_Business: false },
  { id: 24, img: "#", title: "Memoirs of Flame", author: "Rita Hassan", price: 11.20, is_sciFi: false, is_Mys: false, is_Literary: false, is_Horror: false, is_Biography: true, is_History: false, is_Business: false },

  { id: 25, img: "#", title: "Empire and Ashes", author: "Ronald Bexley", price: 12.60, is_sciFi: false, is_Mys: false, is_Literary: false, is_Horror: false, is_Biography: false, is_History: true, is_Business: false },
  { id: 26, img: "#", title: "The Iron Scrolls", author: "Nadia Bennet", price: 14.10, is_sciFi: false, is_Mys: false, is_Literary: false, is_Horror: false, is_Biography: false, is_History: true, is_Business: false },
  { id: 27, img: "#", title: "Rise of a Nation", author: "Kojo Adebayo", price: 13.70, is_sciFi: false, is_Mys: false, is_Literary: false, is_Horror: false, is_Biography: false, is_History: true, is_Business: false },
  { id: 28, img: "#", title: "Banners of War", author: "Elaine Trask", price: 11.60, is_sciFi: false, is_Mys: false, is_Literary: false, is_Horror: false, is_Biography: false, is_History: true, is_Business: false },
  { id: 29, img: "#", title: "The Written Past", author: "Marco Tane", price: 12.90, is_sciFi: false, is_Mys: false, is_Literary: false, is_Horror: false, is_Biography: false, is_History: true, is_Business: false },

  { id: 30, img: "#", title: "Scaling Smart", author: "Arjun Patel", price: 18.25, is_sciFi: false, is_Mys: false, is_Literary: false, is_Horror: false, is_Biography: false, is_History: false, is_Business: true },
  { id: 31, img: "#", title: "The Leader Loop", author: "Sandra Moore", price: 17.40, is_sciFi: false, is_Mys: false, is_Literary: false, is_Horror: false, is_Biography: false, is_History: false, is_Business: true },
  { id: 32, img: "#", title: "Digital DNA", author: "Marcus King", price: 16.00, is_sciFi: false, is_Mys: false, is_Literary: false, is_Horror: false, is_Biography: false, is_History: false, is_Business: true },
  { id: 33, img: "#", title: "Mind Your Profit", author: "Lillian Shore", price: 19.50, is_sciFi: false, is_Mys: false, is_Literary: false, is_Horror: false, is_Biography: false, is_History: false, is_Business: true },
  { id: 34, img: "#", title: "Startup Cipher", author: "Niko Adeyemi", price: 20.00, is_sciFi: false, is_Mys: false, is_Literary: false, is_Horror: false, is_Biography: false, is_History: false, is_Business: true }
];

const sciBooks = books.filter((item) => item.is_sciFi);
console.log(sciBooks)
console.log("\n");


const mysBooks = books.filter((item) => item.is_Mys)
console.log(mysBooks)
console.log("\n");

const litBooks = books.filter((item) => item.is_Literary)
console.log(litBooks)
console.log("\n");

const horrBooks = books.filter((item) => item.is_Horror)
console.log(horrBooks)
console.log("\n");

const bioBooks = books.filter((item) => item.is_Biography)
console.log(bioBooks)
console.log("\n");

const histBooks = books.filter((item) => item.is_History)
console.log(histBooks)
console.log("\n");

const busBooks = books.filter((item) => item.is_Business)
console.log(histBooks)
console.log("\n");



 sciBooks.forEach(book => {
    sciFi_Sec.innerHTML += `
      <div class="book-card">
          <img src="#" alt="#">
          <h3 class="title">${book.title}</h3>
          <p class="author">${book.author}</p>
          <p class="price"><strong>${book.price}</strong></p>
          <button id="${book.id}" class="add-to-cart">Add To Cart</button>
        </div>
    `;
})

mysBooks.forEach(book => {
    mys_Sec.innerHTML += `
    <div class="book-card">
          <img src="#" alt="#">
          <h3 class="title">${book.title}</h3>
          <p class="author">${book.author}</p>
          <p class="price"><strong>${book.price}</strong></p>
          <button id="${book.id}" class="add-to-cart">Add To Cart</button>
        </div>
    `

    })
    
    litBooks.forEach(book => {
        litr_Sec.innerHTML += `
        <div class="book-card">
          <img src="#" alt="#">
          <h3 class="title">${book.title}</h3>
          <p class="author">${book.author}</p>
          <p class="price"><strong>${book.price}</strong></p>
          <button id="${book.id}" class="add-to-cart">Add To Cart</button>
        </div>
        `
})
        
horrBooks.forEach(book => {
    horr_Sec.innerHTML += `
    <div class="book-card">
          <img src="#" alt="#">
          <h3 class="title">${book.title}</h3>
          <p class="author">${book.author}</p>
          <p class="price"><strong>${book.price}</strong></p>
          <button id="${book.id}" class="add-to-cart">Add To Cart</button>
        </div>
    `
})
    
bioBooks.forEach(book => {
    bio_Sec.innerHTML += `
    <div class="book-card">
          <img src="#" alt="#">
          <h3 class="title">${book.title}</h3>
          <p class="author">${book.author}</p>
          <p class="price"><strong>${book.price}</strong></p>
          <button id="${book.id}" class="add-to-cart">Add To Cart</button>
        </div>
    `
})
    
histBooks.forEach(book => {
    hist_Sec.innerHTML += `
    <div class="book-card">
          <img src="#" alt="#">
          <h3 class="title">${book.title}</h3>
          <p class="author">${book.author}</p>
          <p class="price"><strong>${book.price}</strong></p>
          <button id="${book.id}" class="add-to-cart">Add To Cart</button>
        </div>
    `
})
    
busBooks.forEach(book => {
    bus_Sec.innerHTML += `
    <div class="book-card">
          <img src="#" alt="#">
          <h3 class="title">${book.title}</h3>
          <p class="author">${book.author}</p>
          <p class="price"><strong>${book.price}</strong></p>
          <button id="${book.id}" class="add-to-cart">Add To Cart</button>
        </div>
    `
}) 


const bookSections = document.querySelector('.book-sections');
function Update(){    
const add_to_cart = document.querySelectorAll('.add-to-cart');

const myInnerShelf = document.getElementById
('myInnerShelf')

const shoppingCart = [];
const inventory = [];


// myInnerShelf.innerHTML = ''

    add_to_cart.forEach((btn, int) => {
        
        btn.addEventListener('click' ,  () => {
            alert(int)

            if(!inventory.includes(books[int].title)){
            shoppingCart.push({
                id: int,
                name: books[int].title,
                price: books[int].price
            });

            inventory.push(books[int].title);
            
            console.log(shoppingCart);
            console.log(inventory);
                
                myInnerShelf.innerHTML += `
                <div class="cartItem">
      <span>
        <h1>${books[int].title}</h1>
        <p>${books[int].price}</p>
        <button class="removeIt" id="${int}">Remove</button>
      </span>

      <span>
        <img src="#" alt="">
      </span>
    </div>
            `            
            
            

            }
            
        } )
        

    })

    let altCart;

myInnerShelf.addEventListener('click', () => {
    
    const removeIt = document.querySelectorAll('.removeIt');
    removeIt.forEach(btn => {
        btn.addEventListener('click', () => {
            
            altCart = shoppingCart.filter(item => item.id != btn.id);
            console.log(altCart);

            myInnerShelf.innerHTML = ``;

            altCart.forEach((i) => {
                
                myInnerShelf.innerHTML += `
                <div class="cartItem">
                <span>
                    <h1>${i.name}</h1>
                    <p>${i.price}</p>
                    <button class="removeIt" id="${i}">Remove</button>
                </span>

                <span>
                    <img src="#" alt="">
                </span>
                </div>
                        `    
                Update()
                
            })
            
        
        })
        
    } )

})
}

Update();

const hideMe = document.getElementById('hideMe');
const meShelf = document.getElementById('myShelf');
const  showShelf = document.getElementsByClassName('showShelf')[0];

hideMe.onclick = () => {
    meShelf.classList.toggle('hidden');
}
showShelf.onclick = () => {
    meShelf.classList.toggle('hidden');
}