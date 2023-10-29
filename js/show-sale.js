const viewAllBtn = document.querySelector('#viewAll');
const viewSaleBtn = document.querySelector('#viewSale');

viewAllBtn.addEventListener("click", showAllProducts);
viewSaleBtn.addEventListener("click", showSaleProducts);

function showAllProducts() {
    const productList = document.querySelector(".product-list");
    const productItems = productList.querySelectorAll(".product-item");
    
    for (let i = 0; i < productItems.length; i++) {
            productItems[i].classList.remove("hidden");
        }
    }

function showSaleProducts() {
    const productList = document.querySelector(".product-list");
    const productItems = productList.querySelectorAll(".product-item");
    
    for (let i = 0; i < productItems.length; i++) {
        
        const cardMarkText = productItems[i].querySelector(".card-mark-text").textContent;
        
        if (cardMarkText.trim() === "Sale") {
                productItems[i].classList.remove("hidden");
            } else {
                productItems[i].classList.add("hidden");
            }
        }
    }