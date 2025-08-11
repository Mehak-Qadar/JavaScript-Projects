const productname = new URLSearchParams(location.search).get('name');
const productcontainer = document.querySelector('.product-container');
productcontainer.classList.add('product-container')
fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => {
        const products = data.products;
        // Find the product by title
        const product = products.find(p => p.title === productname);
        if (!product) {
            productcontainer.innerHTML = `<p>Product not found.</p>`;
            return;
        }
        // Display full product info
        productcontainer.innerHTML = `
      <div class="product-img">
        <img src="${product.images[0]}" alt="${product.title}">
      </div>
      <div class="product-text">
        <div class="heading">
          <h1 class='h1'>${product.title}</h1>

        </div>
        <div class="para">
          <p><strong>Brand:</strong> ${product.brand}</p>
          <p><strong>Category:</strong> ${product.category}</p>
          <p><strong>Price:</strong> $${product.price}</p>
          <p><strong>Rating:</strong> ${product.rating}</p>
        
        </div>
      </div>
    `;
    });
