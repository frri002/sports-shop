const productContainer = document.querySelector("#productContainer");

console.log(productContainer);

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch(`https://kea-alt-del.dk/t7/api/products/${id}`)
  .then((response) => response.json())
  .then(data => showProduct(data))
   
function showProduct(product) {
  
    productContainer.innerHTML = `

    <section class="product_gallery">
        <div class="media">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="tshirt" />
        </div>
      </section>
      <section class="product_info">
        <h1 class="product_title">${product.productdisplayname}</h1>

        <h2>Product Information</h2>
        <dl class="data">
          <div>
            <dt>Model name</dt>
            <dd>${product.productdisplayname}</dd>
          </div>
          <div>
            <dt>Color</dt>
            <dd>${product.color}</dd>
          </div>
          <div>
            <dt>Category</dt>
            <dd>${product.category}</dd>
          </div>
          <div>
            <dt>Type</dt>
            <dd>${product.articletype}</dd>
          </div>
          <div>
            <dt>Material</dt>
            <dd>${product.material || "—"}</dd>
          </div>
        </dl>
      </section>
      <aside class="product_buybox">
        <h2 class="buybox_title">${product.productdisplayname}</h2>
        <p class="buybox_meta">${product.articletype} | ${product.category}</p>
        <p class="price"><span class="old">DKK ${product.price},-</span></p>

        <label class="field">
          <span>Choose a size</span>
          <select>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </label>

        <button class="btn btn_primary">Add to basket</button>
      </aside>
 `;
}
