
const searchPhone = () => {
    const searchText = document.getElementById("search-field").value;
    // console.log(searchFeild);

    // phones API
    fetch(` https://openapi.programming-hero.com/api/phones?search=${searchText}`)
        .then(res => res.json())
        .then(data => loadPhones(data.data))
};

// search result event
const loadPhones = (phones) => {
    // console.log(phones);

    phones.forEach(phone => {
        // console.log(phone);


        const phones = document.getElementById("phones");
        const div = document.createElement("div")
        div.classList.add = "col";
        div.innerHTML =
            `
        <div class="card h-100">
            <img src="${phone.image}" class="card-img-top" alt="#">
            <div class="card-body">
                <h4 class="card-title text-center">${phone.brand}</h4>
                <div>
                    <h2>${phone.phone_name}</h2>
                    <button onclick="phoneDetail('${phone.slug}')">see details</button>
                </div>
            </div>
        </div>
        `
        // phones.textContent = ''
        phones.appendChild(div);
    });
};

// load phone API
const loadPhoneDetail = (phoneId) => {
    fetch(`https://openapi.programming-hero.com/api/phone/${phoneId}`)
        .then(res => res.json())
        .then(data => phoneDetail(data.data));
};