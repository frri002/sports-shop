const grid_container = document.querySelector(".grid_container");

fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((response) => response.json())
  .then((categories) => showCategories(categories));

function showCategories(categories) {
  console.log(categories);

  categories.forEach((category) => {
    console.log(category);

    grid_container.innerHTML += `
      <a class="category-card" href="productlist.html?category=${category.category}">${category.category}</a>
    `;
  });
}
