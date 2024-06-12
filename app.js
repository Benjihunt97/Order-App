//function to keep all inputs withing range
const inputs = document.querySelectorAll('input');

const keepRange = () => {
  inputs.forEach(input => {
    input.addEventListener('input', () => {
      if (input.value < 1) {
        input.value = 1;
      } else if (input.value > 5) {
        input.value = 5;
      } else {
        return false;
      }
    });
  });
}
keepRange();

//increase and decrease the quantity of items
const incBtn = document.querySelectorAll('.inc-item');
const decBtn = document.querySelectorAll('.dec-item');

const amendItemsQuantity = () => {
  incBtn.forEach(inc => {
    const currentInput = inc.parentElement.querySelector('input');
    inc.addEventListener('click', () => {
      currentInput.value = Number(currentInput.value) + 1;
      if (currentInput.value > 5) currentInput.value = 5;
    });
  });
  
  decBtn.forEach(dec => {
    const currentInput = dec.parentElement.querySelector('input');
    dec.addEventListener('click', () => {
      currentInput.value = Number(currentInput.value) - 1;
      if (currentInput.value < 1) currentInput.value = 1;
    });
  });
}

amendItemsQuantity();

//checkout button to animate cart icon
const checkout = document.getElementById('checkout');
const cartIcon = checkout.querySelector('i');
const cartText = checkout.querySelector('span');

checkout.addEventListener('click', () => {
  cartText.classList.add('hidden');
  setTimeout(() => {
    cartIcon.style.setProperty('--__name', 'cart');
    
    setTimeout(() => {
      cartText.classList.remove('hidden');
      cartIcon.style.removeProperty('--__name', 'cart');
    }, 2250);
  }, 300);
});
