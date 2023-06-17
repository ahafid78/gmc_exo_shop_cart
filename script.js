// Données simples pour les cart items
var cartItems = [
    { name: "Item 1", price: 10, quantity: 2, liked: false },
    { name: "Item 2", price: 15, quantity: 1, liked: true },
    { name: "Item 3", price: 20, quantity: 3, liked: false }
  ];
  
  // Function pour render the cart items
  function renderCartItems() {
    var cartItemsContainer = document.getElementById("cart-items");
    cartItemsContainer.innerHTML = "";
  
    var totalPrice = 0;
  
    cartItems.forEach(function(item, index) {
      var row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.name}</td>
        <td>
          <button onclick="dimQuant(${index})">-</button>
          ${item.quantity}
          <button onclick="augQuant(${index})">+</button>
        </td>
        <td>$${item.price}</td>
        <td>$${item.price * item.quantity}</td>
        <td>
          <button onclick="supItem(${index})">Delete</button>
          <button onclick="pourLiker(${index})" class="${item.liked ? 'liked' : ''}"> LIKE </button>
        </td>
      `;
  
      cartItemsContainer.appendChild(row);
  
      totalPrice += item.price * item.quantity;
    });
  
    var totalPriceElement = document.getElementById("total-price");
    totalPriceElement.textContent = "Prix Total : $" + totalPrice;
  }
  
  // Function pour diminuer la quantité :
  function dimQuant(index) {
    if (cartItems[index].quantity > 1) {
      cartItems[index].quantity--;
      renderCartItems();
    }
  }
  
  // Function pour augmenter la quantité :
  function augQuant(index) {
    cartItems[index].quantity++;
    renderCartItems();
  }
  
  // Function pour supprimer L'item
  function supItem(index) {
    cartItems.splice(index, 1);
    renderCartItems();
  }
  
  // Function pour Liker :
  function pourLiker(index) {
    cartItems[index].liked = !cartItems[index].liked;
    renderCartItems();
  }
  
  // Initialiser le render de cart items
  renderCartItems();
  