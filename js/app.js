
const searchPhone = async (searchText) => {
    const searchText = document.getElementById("search-field").value;
    await fetch(` https://openapi.programming-hero.com/api/phones?search=${searchText}`)
        .then(res => res.json())
        .then(data => loadPhones(data.data))
};

// seearch input field enter key hander
document.getElementById("search-field").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        searchPhone()
    };
});

// search result event
const loadPhones = (phones) => {
    // const dataLimit = phones.length = 10;
    phones.forEach(phone => {
        const phonesConatiner = document.getElementById("phones-container");
        // phonesConatiner.textContent = '';
        const div = document.createElement("div")
        div.classList.add = "col";
        div.innerHTML = `
        <div class="card h-100">
            <img src="${phone.image}" class="card-img-top" alt="#">
            <div class="card-body">
                <h4 class="card-title text-center">${phone.brand}</h4>
                <div>
                    <h2>${phone.phone_name}</h2>
                    <button onclick="loadPhoneDetail('${phone.slug}')">see details</button>
                </div>
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