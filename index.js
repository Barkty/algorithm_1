var store = window.localStorage.getItem('cor');

const load = () => {
    if (store != null) {
        var ul = document.getElementById('ul');
        ul.innerHTML = store;
    }
}

const charToInt = () => {
    var input = document.getElementById('char').value;
    console.log(input);
    const code = input.charCodeAt(0);
    console.log(code);
    store += `<li>Integer correspondent of ${input} is ${code}</li>`;
    window.localStorage.setItem('cor', store);

    var ul = document.getElementById('ul');
    ul.innerHTML = store;
}