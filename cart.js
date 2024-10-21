// Simulated cart array
const cart = [];

// Message-passing middleware function to handle cart actions
function processMessage(message) {
  switch (message.type) {
    case 'ADD_TO_CART':
      addToCart(message.payload);
      break;
    default:
      console.error('Unknown message type:', message.type);
  }
}

// Function to handle adding item to the cart
function addToCart(product) {
  cart.push(product);
  displayNotification(`The ${product.name} added to cart successfully`);
}

// Function to display Bootstrap alert notification
function displayNotification(message) {
  const notificationDiv = document.getElementById('notification');
  
  const alert = `
    <div class="alert alert-success alert-dismissible fade show" role="alert">
      ${message}
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  `;
  
  notificationDiv.innerHTML = alert;
}

// Event listener for "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', (event) => {
    const productElement = event.target.closest('.product');
    const productId = productElement.getAttribute('data-product-id');
    const productName = productElement.getAttribute('data-product-name');

    // Create message object
    const message = {
      type: 'ADD_TO_CART',
      payload: {
        id: productId,
        name: productName
      }
    };

    // Send message to middleware for processing
    processMessage(message);
  });
});