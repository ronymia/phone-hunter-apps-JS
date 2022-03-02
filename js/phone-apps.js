// search box
const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=iphone`
    fetch(url)
        .then(res => res.json())
        .then(phone => displaySearchResult(phone.data));

}

// search result 
const displaySearchResult = data => {
    const searchResult = document.getElementById('search-result');
    data.forEach(data => {
        console.log(data);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-80 shadow p-3 mb-5 bg-body rounded">
                <img src="${data.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title ">${data.brand}</h5>
                    <div class ="d-flex justify-content-between">
                    <span class="card-text">${data.phone_name}</span>
                    <button type="button" class="btn btn-light">see details</button>
                    </div>
                </div>
            </div>
        `
        searchResult.appendChild(div);
    });

};

// details data