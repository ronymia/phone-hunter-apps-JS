
const searchPhone = () => {
    const searchText = document.getElementById("search-field").value;
    // console.log(searchFeild);

    fetch(` https://openapi.programming-hero.com/api/phones?search=${searchText}`)
        .then(res => res.json())
        .then(data => loadPhones(data.data))
}


const loadPhones = (phones) => {
    // console.log(phones);

}