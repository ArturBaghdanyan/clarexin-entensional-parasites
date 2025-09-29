let links = document.querySelectorAll("a:not(.disable-scroll), .benefit-card-button");

links.forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector("#form").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});


let showProduct = document.getElementById("product");
let orderLink = document.getElementById("order-link");

showProduct.addEventListener("click", () => {
  orderLink.scrollIntoView({ top: 0, behavior: "smooth" });
});

const maxStock = 20;
let currentStock = Math.ceil(Math.random() * maxStock);
let maxReachedStock = currentStock;

const fill = document.getElementById("progress-fill");
const stockText = document.getElementById("stock-text");
const bar = document.getElementById("progress-bar");

function updateStock() {
  stockText.innerText = `Only ${currentStock} units left`;
  let percentage = (Math.max(currentStock, maxReachedStock) / maxStock) * 100;
  fill.style.width = percentage + "%";
  fill.style.backgroundColor = "red";
}

updateStock();
