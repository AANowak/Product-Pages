function addToCart() {
  const btn = document.querySelector('.buy button');
  btn.textContent = "Added!";
  btn.style.background = "#28a745";
  setTimeout(() => {
    btn.textContent = "Add to Cart";
    btn.style.background = "#4a90e2";
  }, 1500);
}
document.querySelector('.buy button').addEventListener('click', addToCart);