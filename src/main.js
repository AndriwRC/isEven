const API = 'https://api.isevenapi.xyz/api/iseven';
const input = document.querySelector('#number');
const btnCheck = document.querySelector('#checkBtn');

btnCheck.addEventListener('click', checkNumber);

async function fetchData(urlApi) {
    const response = await fetch(urlApi);
    if (response.status < 200 || response.status >= 300) {
        throw new Error(
            `An error ocurred: ${response.status} ${response.statusText}`
        );
    }
    return response.json();
}

async function checkNumber() {
    try {
        const number = input.value.length == 0 ? 13 : parseInt(input.value);

        const data = await fetchData(`${API}/${number}`);
        console.log(data['iseven']);
    } catch (error) {
        console.error(error.message);
    }
}
