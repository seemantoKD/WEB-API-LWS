// function validation (){
//     const inputObj = document.getElementById('id1');

//     if(inputObj.validity.rangeOverflow){
//         inputObj.setCustomValidity('You have made a range overflow error!');
//     }
    
//     else if(inputObj.validity.rangeUnderflow){
//         inputObj.setCustomValidity('You have made a range underflow error!');
//     }

//     else if(inputObj.validity.valueMissing) {
//         inputObj.setCustomValidity('Value missing!');
//     }

//     if(!inputObj.checkValidity()){
//         document.getElementById('demo').innerHTML = inputObj.validationMessage;
//     }
// }

/*

// Methods

// 1. checkValidity()
// syntax: element.checkValidity()
    function validateForm(){
        let input = document.querySelector('#email');

        if(input.checkValidity()){
            alert('Valid email');
        } else {
            alert('Invalid email');
        }
    }

    function checkAge() {
        let input = document.querySelector('#age');
        
        if(input.checkValidity()){
            alert('age valid');
        } else {
            alert('age invalid');
        }
    }

// 2. setCustomValidity()
// syntax: element.setCustomValidity(custom error message)
    function validEmail () {
        let email = document.querySelector('#email');

        if(email.value.endsWith('.com')){
            email.setCustomValidity('');
        } else {
            email.setCustomValidity('Email is not Ok');
        }
    }

    function checkPassword(){
        let p1 = document.getElementById('pass');
        let p2 = document.getElementById('confirm');

        if(p1.value === p2.value){
            p2.setCustomValidity('')
        } else {
            p2.setCustomValidity('Password Mismatch!');
        }
    }
*/

// property group (object)
// syntax: element.objectName
// 1. validity
// 2. validationMessage
// 3. willValidate

// object properties

// 1. customError -> setCustomValidity set korle return korbe true else return false
// syntax: element.validity.customError
// let input = document.getElementById('username');
// input.setCustomValidity('Invalid username');
// console.log(input.validity.customError);

// 2. patternMismatch -> pattern attribute er sathe value match na korle
// let input = document.getElementById('username');
// let btn = document.querySelector('button');

// btn.addEventListener('click', () => {
//     console.log(input.validity.patternMismatch)
// })

// 3. rangeOverflow
// 4. rangeUnderflow
// 3, 4 already see in the tutorial


// NOTE: please check the github for exploring rest properties