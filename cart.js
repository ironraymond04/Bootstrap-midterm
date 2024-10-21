const cart = [];

function processMessage(message) {
  switch (message.type) {
    case 'ADD_TO_CART':
      addToCart(message.payload);
      break;
    default:
      console.error('Unknown message type:', message.type);
  }
}


function addToCart(product) {
  cart.push(product);
  displayNotification(`${product.name} added to cart successfully`);
}


function displayNotification(message) {
  const notificationDiv = document.getElementById('notification');
  
  const alert = `
    <div class="alert alert-success alert-dismissible fade show" role="alert">
      ${message}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `;
  
  notificationDiv.innerHTML = alert;
}


document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', (event) => {
    const productElement = event.target.closest('.product');
    const productId = productElement.getAttribute('data-product-id');
    const productName = productElement.getAttribute('data-product-name');


    const message = {
      type: 'ADD_TO_CART',
      payload: {
        id: productId,
        name: productName
      }
    };


    processMessage(message);
  });
});
