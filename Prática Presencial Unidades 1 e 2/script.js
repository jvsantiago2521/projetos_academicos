document.addEventListener('DOMContentLoaded', function () {
    const productList = document.getElementById('product-list');
    const storedProductList = JSON.parse(localStorage.getItem('productList')) || [];

    storedProductList.forEach(function (product, index) {

        const listItem = document.createElement('li');

        listItem.innerHTML = `${index + 1}. <strong>NOME:</strong> ${product.name} - <strong>PREÇO:</strong> ${product.price} - <strong>LINK:</strong> <a href="${product.link}" target="_blank">${truncateText(product.link, 40)}</a>`;
        productList.appendChild(listItem);
    });
});

function goToForm() {
    window.location.href = "index.html";
}

function clearProductList() {
    localStorage.removeItem('productList');
    alert("Lista de produtos foi limpa com sucesso!"); 
    location.reload();
}

function truncateText(text, maxLength) {
    return text.length > maxLength ? text.substring(0, maxLength - 3) + "..." : text;
}

const form = document.getElementById("form");
const product = document.getElementById("product-name");
const price = document.getElementById("product-price");
const link = document.getElementById("product-url");

form.addEventListener("submit", (event) => {

    event.preventDefault();
    checkForm();

});

function checkForm() {
    checkInputProduct();
    checkInputLink();
    checkInputPrice();

    const formItems = form.querySelectorAll(".form-content");

    const isValid = [...formItems].every((item) => {

        return item.className === "form-content";
    });

    if (isValid) {
        let productList = JSON.parse(localStorage.getItem('productList')) || [];

        productList.push({
            name: product.value,
            price: price.value,
            link: link.value
        });

        localStorage.setItem('productList', JSON.stringify(productList));
        alert("Produto cadastrado com sucesso!!!");
    }
}

function checkInputProduct() {
    const productValue = product.value;

    if (productValue === "") {
        errorInput(product, "O nome do produto é obrigatório!");
    } else {
        const formItem = product.parentElement;
        formItem.className = "form-content";
    }
}

function checkInputPrice() {
    const priceValue = price.value;

    if (priceValue === "") {
        errorInput(price, "O preço do produto é obrigatório!");
    } else {
        const formItem = price.parentElement;
        formItem.className = "form-content";
    }
}

function checkInputLink() {
    const linkValue = link.value;

    if (linkValue === "") {
        errorInput(link, "O link do produto é obrigatório!");
    } else if (!isValidURL(linkValue)) {
        errorInput(link, "Insira um link válido!");
    } else {
        const formItem = link.parentElement;
        formItem.className = "form-content";
    }

    function isValidURL(url) {
        const urlPattern = /^(https?:\/\/)?[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
        return urlPattern.test(url);
    }
}

function errorInput(input, message) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a");
    textMessage.innerText = message;
    formItem.className = "form-content error";
}