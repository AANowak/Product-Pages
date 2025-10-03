function addToCart() {
  const btn = document.querySelector('.buy button');
  btn.textContent = "Added!";
  btn.style.background = "#28a745";
  setTimeout(() => {
    btn.textContent = "Add to Cart";
    btn.style.background = "#c49e64";
  }, 1500);
}
document.querySelector('.buy button').addEventListener('click', addToCart);

document.getElementById('addToCartBtn').addEventListener('click', () => {
  const color = document.getElementById('color').value;
  const size = document.getElementById('size').value;
  const quantity = parseInt(document.getElementById('quantity').value);

  if (quantity < 1) {
    alert("Quantity must be at least 1.");
    return;
  }

  // For now, just show message (you can later connect to cart logic)
  const message = `${quantity} x ${color} (${size}) added to cart!`;
  const cartMessage = document.getElementById('cartMessage');
  cartMessage.textContent = message;

  // Optional: animate message
  cartMessage.style.opacity = 0;
  cartMessage.style.transition = "opacity 0.5s ease";
  setTimeout(() => {
    cartMessage.style.opacity = 1;
  }, 50);
});


const testimonials = [
  { text: "Eco friendly, clean design, great quality. No more cheap plastic!", author: "Olivia R." },
  { text: "Elegant and well made, I can take it anywhere and feel fashionable.", author: "Daniel M." },
  { text: "Nature inspired names for colors is a nice touch, forest green is my choice.", author: "Ariana F." },
  { text: "Perfect size and design, I feel proud carrying it everywhere.", author: "Lucas T." },
  { text: "High-quality build, easy to clean, and looks amazing.", author: "Sophia W." },
  { text: "Stylish design and incredibly durable, my go-to bottle every day.", author: "Ethan L." },
  { text: "Keeps my drinks cold for hours, perfect for long days out.", author: "Mia S." },
  { text: "Love the colors and the sleek finish, very elegant and practical.", author: "Noah K." },
  { text: "Eco-friendly and sturdy, I feel good about using it every day.", author: "Ava P." },
  { text: "Lightweight yet robust, fits perfectly in my bag for work.", author: "Liam T." },
  { text: "Excellent quality and the smooth surface makes it easy to clean.", author: "Isabella R." },
  { text: "Perfect for both hot and cold drinks, stylish enough to carry anywhere.", author: "Lucas M." },
  { text: "Durable and modern design, everyone compliments it when I take it out.", author: "Emma C." },
  { text: "High-quality materials and a beautiful finish, worth every penny.", author: "James H." },
  { text: "The ideal size and weight, very functional and visually appealing.", author: "Sophia W." }
];

const wrapper = document.querySelector('.testimonial-wrapper');
let index = 0;

function showTestimonials() {
  const cards = wrapper.querySelectorAll('.testimonial-card');

  // Animate out
  cards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = "translateY(-20px)";
  });

  setTimeout(() => {
    // Update content for 3 cards
    cards[0].innerHTML = `<p>${testimonials[index % testimonials.length].text}</p>
                          <cite>— ${testimonials[index % testimonials.length].author}</cite>`;
    cards[1].innerHTML = `<p>${testimonials[(index + 1) % testimonials.length].text}</p>
                          <cite>— ${testimonials[(index + 1) % testimonials.length].author}</cite>`;
    cards[2].innerHTML = `<p>${testimonials[(index + 2) % testimonials.length].text}</p>
                          <cite>— ${testimonials[(index + 2) % testimonials.length].author}</cite>`;

    // Animate in
    cards.forEach(card => {
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    });

    // Advance index by 3 for next set
    index = (index + 3) % testimonials.length;
  }, 500);
}

// Start rotation every 5 seconds
setInterval(showTestimonials, 5000);