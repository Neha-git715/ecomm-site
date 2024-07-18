document.addEventListener('DOMContentLoaded', () => {
    const cartItems = [
      { id: 1, name: 'skirt+top', price: 999, image: 'c.1.jpg', quantity: 1 },
      { id: 2, name: 'white purse', price: 599, image: 'c.2.jpg', quantity: 2 },
      { id: 3, name: 'boho dress', price: 1999, image: 'c.3.jpg', quantity: 1 }
    ];
  
    const cartItemsContainer = document.querySelector('.cart-items');
    const totalItemsElement = document.getElementById('total-items');
    const totalPriceElement = document.getElementById('total-price');
  
    function renderCartItems() {
      cartItemsContainer.innerHTML = '';
      let totalItems = 0;
      let totalPrice = 0;
  
      cartItems.forEach(item => {
        totalItems += item.quantity;
        totalPrice += item.price * item.quantity;
  
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
  
        cartItem.innerHTML = `
          <img src="${item.image}" alt="${item.name}">
          <div class="cart-item-details">
            <h2>${item.name}</h2>
            <p>Price: Rs${item.price.toFixed(2)}</p>
            <p>Quantity: ${item.quantity}</p>
          </div>
          <button class="remove-item" data-id="${item.id}">Remove</button>
        `;
  
        cartItemsContainer.appendChild(cartItem);
      });
  
      totalItemsElement.textContent = totalItems;
      totalPriceElement.textContent = totalPrice.toFixed(2);
    }
  
    cartItemsContainer.addEventListener('click', (event) => {
      if (event.target.classList.contains('remove-item')) {
        const itemId = parseInt(event.target.getAttribute('data-id'));
        const itemIndex = cartItems.findIndex(item => item.id === itemId);
        if (itemIndex > -1) {
          cartItems.splice(itemIndex, 1);
          renderCartItems();
        }
      }
    });
  
    document.getElementById('checkout').addEventListener('click', () => {
      alert('Proceeding to checkout...');
    });
  
    renderCartItems();
  });
  