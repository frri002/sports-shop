const productListContainer = document.querySelector(".product_list_container");

const params = new URLSearchParams(window.location.search);
const category = params.get("category");
console.log(category);

fetch(`https://kea-alt-del.dk/t7/api/products?limit=100&category=${category}`)
  .then((response) => response.json())
  .then((data) => showProduct(data));

  function showProduct(products) {
console.log(products);

products.forEach((element) => {
    console.log(element);
    
    productListContainer.innerHTML += `
      <section class="product_list_container">
        <article class="product-card ${element.discount && "nedsat"} ${element.soldout && "udsolgt"}">
          <a href="product.html?id=${element.id}" class="product-link">
            <div class="product-media">
              <img src="https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp" alt="tshirt" />
            </div>

            <div class="product-body">
              <h3 class="product-title">${element.productdisplayname}</h3>
              <p class="product-meta">${element.category} | Nike</p>
              <p class="price"><span class="old">DKK ${element.price},-</span></p>
              <span class="product-cta">Read More</span>
            </div>
          </a>
        </article>
        
      </section>
    `;
  });
}

