let string = "";
let buttons = document.querySelectorAll('.button');


function yes() {
    string = eval(string);
    document.querySelector('input').value = string;
}
// array se ek button banao and 
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            yes();
        }
        else if (e.target.innerHTML == 'C') {
            console.log('here');
            document.querySelector('input').value = string;
            string = '';
        }
        else {
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})

// const form = document.getElementById('form')

// form.addEventListener('submit', (e) => {
//     e.preventDefault()
// })

// // enter pe execution
// document.addEventListener('keydown', (hmm) => {
//     console.log(hmm.key)
//     if (hmm.key === 'Enter') {
//         yes();
//     }
// })