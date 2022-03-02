// search box
const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(phone => displaySearchResult(phone.data));

}

// search result 
const displaySearchResult = data => {
    const searchResult = document.getElementById('search-result');
    data.forEach(data => {
        // console.log(data.slug);
        const div = document.createElement('div');
        div.classList.add('col');
        // const slug = data.slug
        div.innerHTML = `
        <div  class="card h-80 shadow p-3 mb-5 bg-body rounded">
                <img src="${data.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title ">${data.brand}</h5>
                    <div class ="d-flex justify-content-between">
                    <span class="card-text">${data.phone_name}</span>
                    <button onclick="loadPhoneDetails('${data.slug}')" type="button" class="btn btn-light">see details</button>
                    </div>
                </div>
            </div>
        `
        searchResult.appendChild(div);
    });

};

// details data


const loadPhoneDetails = (phoneId) => {
    // console.log(phoneId);
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`
    // console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(phone => displayPhoneDetails(phone.data))
}

const displayPhoneDetails = data => {
    console.log(data);
    const phoneDetails = document.getElementById('phone-details')
    const div = document.createElement('div')
    div.classList.add('card');
    div.innerHTML = `
        
    `
}