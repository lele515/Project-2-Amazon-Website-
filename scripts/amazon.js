import{cart} from '../data/cart.js';

let productsHTML = '';

products.forEach((product) => {
  productsHTML += `
    <div class="product-container">
      <div class="product-image-container">
        <img class="product-image"
          src="${product.image}">
      </div>

      <div class="product-name limit-text-to-2-lines">
        ${product.name}
      </div>

      <div class="product-rating-container">
        <img class="product-rating-stars"
          src="images/ratings/rating-${product.rating.stars * 10}.png">
        <div class="product-rating-count link-primary">
          ${product.rating.count}
        </div>
      </div>

      <div class="product-price">
        $${(product.priceCents / 100)}
      </div>

      <div class="product-quantity-container">
        <select>
          <option selected value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div class="product-spacer"></div>

      <div class="added-to-cart">
        <img src="images/icons/checkmark.png">
        Added
      </div>

      <button class="add-to-cart-button 
      button-primary js-add-to-cart" 
      data-product-id="${product.id}">
        Add to Cart
      </button>
    </div>
  `;
});

document.querySelector('.js-products-grid').innerHTML= productsHTML;

// Adding event listeners to the button to make it interactive).// you have to change the Id to camelCase from kebab case in your functions.

// when you click on each button with the class of js-add-to cart, you add an eventlistener to the button which is typically click. 
//then you add a function within the event listener (arrow function) which will work when you click on the button. //

document.querySelectorAll('.js-add-to-cart')
.forEach((button) => {
  button.addEventListener('click',() => {
  const productId = button.dataset.productId;

  let matchingItem;

  cart.forEach((item) => { 

   if (productId === item.productId) {
      matchingItem = item;
    }
  });
  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      productId: productId,
      quantity: 1 
    });
    }

    let cartQuantity = 0;

    cart.forEach((item) => {
      cartQuantity += item.quantity;
    });
    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
  });
});

// How to make the cart quantity interactive>//
/*
1. calculate the quantity.(total numbers of quantity in the cart)
2. Put that quantity on the page.
*/


  

