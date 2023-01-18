const response = await fetch("/products.json");
const products = await response.json();

const grid = document.querySelector('.grid');
const template = document.querySelector('.card');
grid.removeChild(template);

for (let product of products) {
    const card = template.cloneNode(true);
    card.querySelector(".product-name").textContent = product.name;
    card.querySelector(".product-price").textContent = product.price;
    card.querySelector(".image-front").src = product.front;
    card.querySelector(".image-back").src = product.back;
    grid.appendChild(card);
}


