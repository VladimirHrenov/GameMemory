let fasOpenCarts = false;
let firstCart, secondCart;  // первая, вторая



class Cart {
    constructor (container,randomBtn,coloda,check) {
        this.container = container;
        this.randomBtn = randomBtn;
        this.coloda = coloda;
        this.check = check;
        }


    
    open(event) {
        let target = event.target.parentElement;
        target.classList.add('_active');  
        if(fasOpenCarts == false) {
            fasOpenCarts = true;
            firstCart = target;
        } else {
            fasOpenCarts = false;
            secondCart = target;

            checkCart();
        }
    }

    shuffleDOMElements(parentNode) {
        let elements = Array.from(parentNode.children);
        for (let i = elements.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            parentNode.insertBefore(elements[j], elements[i]);
        }};
    
    reloadColoda() {
        location.reload()
    }
}




const containerCarts = document.querySelector('.container');
const divCart = document.querySelectorAll('.cart');
const btnRandom = document.querySelector('.btn');


const game = new Cart(containerCarts,btnRandom,divCart);




game.shuffleDOMElements(game.container); // обновление страницы


const checkCart = () => {
    if (firstCart.dataset.image === secondCart.dataset.image) {
        firstCart.removeEventListener('click', open);
        secondCart.removeEventListener('click', open);
    if (firstCart.dataset.image !== secondCart.dataset.image) {
        setTimeout(() => {
            firstCart.removeEventListener('click',open)
        }, 600)
    }
    } else {
        setTimeout (() => {
            firstCart.classList.remove('_active');
            secondCart.classList.remove('_active');
        }, 500)
    }
}

game.coloda.forEach(cart => {
    cart.addEventListener('click', game.open);
})

game.randomBtn.addEventListener('click', game.reloadColoda);




