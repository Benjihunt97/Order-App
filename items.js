//items available
const availableItems = [
  {
    name: 'Cola',
    price: 0.99
  },
  {
    name: 'Pepsi',
    price: 0.89
  }
];

const cart = document.getElementById('cart');

const itemsList = document.getElementById('item-list');

availableItems.forEach(item => {
  const itemCard = document.createElement('div');
  itemCard.classList.add('flex', 'items-center', 'gap-3', 'px-3', 'py-2');
  itemCard.innerHTML = `
    <p class="flex-1">${item.name}</p>
    
    <div class="bg-gray-100 p-1 mr-5 shrink-0">
      <button class="size-5 rounded-sm text-sm font-semibold bg-white transition-all ">S</button>
      <button class="size-5 rounded-sm text-sm font-semibold transition-all ">M</button>
      <button class="size-5 rounded-sm text-sm font-semibold transition-all ">L</button>
    </div>
    
    <p class="ml-auto">£${item.price}</p>
    
    <button class="select-item size-5 text-gray-500 bg-gray-200 rounded-sm">
      <i class="fa fa-add"></i>
    </button>
  `;
  
  itemsList.appendChild(itemCard);
});

//adding items
const addItem = document.getElementById('add-item');
addItem.addEventListener('click', () => {
  itemsList.classList.add('scale-y-100');
});

const selectItem = document.querySelectorAll('.select-item');

selectItem.forEach(select => {
  select.addEventListener('click', () => {
    
  });
});



//removing items
const removeItemBtns = document.querySelectorAll('.remove-cart-item');

removeItemBtns.forEach(remove => {
  const parent = remove.parentElement;
  
  remove.addEventListener('click', () => {
    
  });
});
