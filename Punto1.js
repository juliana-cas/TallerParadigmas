// Inventory management system object
const inventory = [];

// Function to add a new product to the inventory
function addProduct(id, name, quantity) {
  const newProduct = { id, name, quantity };
  inventory.push(newProduct);
  console.log(`Product "${name}" added to inventory.`);
}

// Function to remove a product from the inventory
function removeProduct(id) {
  const index = inventory.findIndex(product => product.id === id);
  if (index !== -1) {
    const removedProduct = inventory.splice(index, 1)[0];
    console.log(`Product "${removedProduct.name}" removed from inventory.`);
  } else {
    console.log(`Product with ID ${id} not found in inventory.`);
  }
}

// Function to update the quantity of a product in the inventory
function updateQuantity(id, newQuantity) {
  const product = inventory.find(product => product.id === id);
  if (product) {
    product.quantity = newQuantity;
    console.log(`Quantity of product "${product.name}" updated to ${newQuantity}.`);
  } else {
    console.log(`Product with ID ${id} not found in inventory.`);
  }
}

// Function to display the current inventory
function displayInventory() {
  console.log("Current Inventory:");
  inventory.forEach(product => {
    console.log(`ID: ${product.id}, Name: ${product.name}, Quantity: ${product.quantity}`);
  });
}

// Example usage
addProduct(1, "Shirt", 3);
addProduct(2, "Pants", 5);
addProduct(3, "Shoes", 8);

displayInventory();

removeProduct(2);
updateQuantity(1, 20);

displayInventory();
