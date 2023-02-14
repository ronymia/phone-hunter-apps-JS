
const searchPhone = async (searchText) => {
    await fetch(` https://openapi.programming-hero.com/api/phones?search=${searchText}`)
        .then(res => res.json())
        .then(data => loadPhones(data.data))
};

// Search input field click hander
document.getElementById("search-phone").addEventListener("click", function (event) {
    const searchText = document.getElementById("search-field").value;
    searchPhone(searchText);
});

// Search input field enter key hander
document.getElementById("search-field").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        const searchText = document.getElementById("search-field").value;
        searchPhone(searchText);
    };
});


// all phone load html 

const loadPhones = (phones) => {
    // const dataLimit = phones.length = 10;
    phones.forEach(phone => {
        console.log(phone);
        const phonesConatiner = document.getElementById("phones-container");
        // phonesConatiner.textContent = '';
        const div = document.createElement("div")
        div.classList.add = "col";
        div.innerHTML = `
        <div class="product-card">
            <div class="image">
                <img src="${phone.image}" alt="${phone.phone_name}">
            </div>
            <div class="namePrice">
                <h3>${phone.brand}</h3>
                <span>$ 15.99</span>
            </div>
            <h2>${phone.phone_name}</h2>
            <div class="stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
            </div>
            <div class="button">
                <button>buy now</button>
            </div>
        </div>
        `
        phonesConatiner.appendChild(div);
    });
};

// load phone API
const loadPhoneDetail = async (phoneId) => {
    await fetch(`https://openapi.programming-hero.com/api/phone/${phoneId}`)
        .then(res => res.json())
        .then(data => phoneDetail(data.data))
}

// displying detail
const phoneDetail = phone => {
    console.log(phone);
}

// default
searchPhone("apple");