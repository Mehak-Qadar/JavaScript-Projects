const container = document.querySelector('.products-container');
const filter = document.querySelector('.filter');
const search = document.querySelector('.input-search')
let allProducts = [];

// Fetch and store products
fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => {
        allProducts = data.products;
        console.log(allProducts);
        renderProducts(allProducts);
    });

// Render products to the UI
function renderProducts(products) {
    container.innerHTML = ''; // Clear previous content

    products.forEach(product => {
        const productcard = document.createElement('a');
        productcard.href = `./product.html?name=${product.title}`;
        productcard.classList.add('product-card');

        productcard.innerHTML = `
      <img src="${product.images[0]}" alt="">
      <div class="card-content">
        <h3>${product.title}</h3>
        <p>${product.brand}</p>
        <p>${product.price}</p>
        <p>${product.category}</p>
      </div>
    `;

        container.appendChild(productcard);
    });
}

// Filter logic
filter.addEventListener('change', () => {
    const selectedCategory = filter.value;

    const filteredProducts = selectedCategory
        ? allProducts.filter(product => product.category === selectedCategory)
        : allProducts;

    renderProducts(filteredProducts);
});


search.addEventListener('input', (e)=>{

   const filterpro= allProducts.filter((product)=>product.title.toLowerCase().includes(e.target.value.toLowerCase()))

    renderProducts(filterpro);


    })
