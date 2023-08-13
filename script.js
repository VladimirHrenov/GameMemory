class Cart {
    constructor (container,carts,random) {
        this.container = container;
        this.carts = carts;
        this.random = random;
        
    }
    open() {
            this.back.classList.add('active');
            this.front.classList.add('active');
        }
    close() {
            this.front.classList.remove('active');
            this.back.classList.remove('active');
        }
    clicked() {

    }    
        
}


const containerCarts = document.querySelector('.container');
const divCart = document.querySelectorAll('.cart');
const btnRandom = document.querySelector('.btn');

let fasOpenCarts = false;
let firstCart, secondCart  // первая, вторая

const openCart = (e) => {
    const target = e.target.parentElement;
    target.classList.add('_active');    
    if(fasOpenCarts == false) {
        fasOpenCarts = true;
        firstCart = target;
    } else {
        fasOpenCarts = false;
        secondCart = target;

        checkCart();
    }
    
};

const checkCart = () => {
    if (firstCart.dataset.image === secondCart.dataset.image) {
        firstCart.removeEventListener('click', openCart);
        secondCart.removeEventListener('click', openCart);
    } else {
        setTimeout (() => {
            firstCart.classList.remove('_active');
            secondCart.classList.remove('_active');
        }, 1000)


    }
}

divCart.forEach(cart => {
    cart.addEventListener('click', openCart);
})

function refreshPage() {
    location.reload()
}

function shuffleDOMElements(parentNode) {
    let elements = Array.from(parentNode.children);
    for (let i = elements.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        parentNode.insertBefore(elements[j], elements[i]);
    }} // рандом
shuffleDOMElements(containerCarts);

btnRandom.addEventListener('click', refreshPage) //обновление страницы

console.log(containerCarts.children);




