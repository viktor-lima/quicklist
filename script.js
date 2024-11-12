document.addEventListener('DOMContentLoaded', function() {
  // Get references to the necessary DOM elements
  const addItemInput = document.querySelector('.add-item-input');
  const addItemButton = document.querySelector('.add-item-button');
  const shoppingList = document.querySelector('.shopping-list');
  const notification = document.querySelector('.notification');
  const closeNotificationButton = document.querySelector('.close-button');

  // Initialize an empty array to store the list items
  let items = [];

  // Function to render the list items
  const renderList = () => {
    shoppingList.innerHTML = '';
    items.forEach((item, index) => {
        const li = document.createElement('li');
        li.className = 'list-item';
        li.innerHTML = `
            <input type="checkbox" id="item${index}">
            <label for="item${index}">${item}</label>
            <button class="delete-button">&#128465;</button>
        `;
        shoppingList.appendChild(li);

        // Add event listener to the delete button
        const deleteButton = li.querySelector('.delete-button');
        deleteButton.addEventListener('click', () => removeItem(index));
    });
  }

  // Function to add a new item
  const addItem = () => {
    const newItem = addItemInput.value.trim();
    if (newItem) {
        items.push(newItem);
        addItemInput.value = '';
        renderList();
    }
  }

  // Function to remove an item
  const removeItem = (index) =>{
    items.splice(index, 1);
    renderList();
  }

  // Event listener for the add item button
  addItemButton.addEventListener('click', addItem);

  // Event listener for the Enter key in the input field
  addItemInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
          addItem();
      }
  });

  // Event listener for closing the notification
  closeNotificationButton.addEventListener('click', function() {
      notification.style.display = 'none';
  });

  // Initial render of the empty list
  renderList();
});