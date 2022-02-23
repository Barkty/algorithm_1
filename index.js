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
    for(let i = 0; i < input.length; i++) {
        const code = input.charCodeAt(i);
        console.log(code);
        store += `<li>Integer correspondent of ${input[i]} is ${code}</li>`;
        window.localStorage.setItem('cor', store);
    
        var ul = document.getElementById('ul');
        ul.innerHTML = store;
    }
}