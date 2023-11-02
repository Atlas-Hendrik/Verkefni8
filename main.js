import { createCartLine, showCartContent } from './lib/ui.js';
import { formatNumber } from './scripts/formatNumber.js';

const products = [
  {
    id: 1,
    title: 'HTML húfa',
    description:
      'Húfa sem heldur hausnum heitum og hvíslar hugsanlega að þér hvaða element væri best að nota.',
    price: 5_000,
  },
  {
    id: 2,
    title: 'CSS sokkar',
    description: 'Sokkar sem skalast vel með hvaða fótum sem er.',
    price: 3_000,
  },
  {
    id: 3,
    title: 'JavaScript jakki',
    description: 'Mjög töff jakki fyrir öll sem skrifa JavaScript reglulega.',
    price: 20_000,
  },
];


/** Bæta vöru í körfu */
function addProductToCart(product, quantity) {
  // Hér þarf að finna `<tbody>` í töflu og setja `cartLine` inn í það
  const cart = document.querySelector('.cart-content');

  if (!cart) {
    console.warn('fann ekki .cart');
    return;
  }
  
  const emptyMessage = cartElement.querySelector('.empty-message')
  const cartContent = cartElement.querySelector('.cart-content')

  if (!emptyMessage|| !cartContent){
    console.warn('fann ekki element')
    return;
  }

  emptyMessage.classList.add('hidden')
  cartContent.classList.remove('hidden')

  const productElement = document.createElement('div')
  const productTitleElement = document.cartElement('strong')
  productTitleElement.textContent = product.title;

  productElement.appendChild(productTitleElement)
  const productPriceElement = document.createElement('span');
  productPriceElement.textContent = formatNumber(product.price);




  // TODO hér þarf að athuga hvort lína fyrir vöruna sé þegar til
  const cartLine = createCartLine(product, quantity);
  cart.appendChild(cartLine);

  // Sýna efni körfu
  showCartContent(true);

  // TODO sýna/uppfæra samtölu körfu
}

function submitHandler(event) {
  // Komum í veg fyrir að form submiti
  event.preventDefault();
  
  // Finnum næsta element sem er `<tr>`
  const parent = event.target.closest('tr')

  // Það er með attribute sem tiltekur auðkenni vöru, t.d. `data-product-id="1"`
  const productId = Number.parseInt(parent.dataset.productId);

  // Finnum vöru með þessu productId
  const product = products.find((i) => i.id === productId);

  // TODO hér þarf að finna fjölda sem á að bæta við körfu með því að athuga
  // á input
  const quantity = 1;

  // Bætum vöru í körfu (hér væri gott að bæta við athugun á því að varan sé til)
  addProductToCart(product, quantity);
}

// Finna öll form með class="add"
const addToCartForms = document.querySelectorAll('.add')



function createAddToCartFrom(form){
  console.log(form)
  form.addEventListener('submit', submitHandler);

}


for (const form of Array.from(addToCartForms)) {
  form.addEventListener('submit', submitHandler);
  createAddToCartFrom(form);
}


const orderForm = document.getElementById("orderForm");


orderForm.addEventListener("submit", function (event) {
  
  event.preventDefault();

  
  const itemName = document.getElementById("itemName").value;
  const quantity = document.getElementById("quantity").value;

  fetch("/your-order-endpoint", {
    method: "POST",
    body: JSON.stringify({ itemName, quantity }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(response => {
      if (response.ok) {
        console.log("Order submitted successfully.");
      } else {
        console.error("Order submission failed.");
      }
    })
    .catch(error => {
      console.error("An error occurred while submitting the order:", error);
    });
});

