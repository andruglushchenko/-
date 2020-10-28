let checkIn = document.querySelector("#checkIn")
let form = document.querySelector('#form');
let inputs = document.querySelectorAll('input');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let repeatPassword = document.querySelector('#repeat-password');
let name=document.querySelector('#name')

let spanError1 = document.createElement('span');
spanError1.classList.add('error-massege');

let spanError2 = document.createElement('span');
spanError2.classList.add('error-massege');

let spanError3 = document.createElement('span');
spanError3.classList.add('error-massege');


form.oninput = function () {
    if (!email.value.includes('@.com')) {
        email.classList.add('error');
        spanError1.innerHTML = 'Неправильный формат email';
        email.style.marginBottom = '0px'
        email.after(spanError1);
    } else {
        email.classList.remove('error');
        spanError1.remove()
    }
    if (!(password.value == repeatPassword.value)) {
        repeatPassword.classList.add('error');
        spanError2.innerHTML = 'пароли не совпадают';
        repeatPassword.style.marginBottom = '0px';
        checkIn.style.marginTop = '30px';
        repeatPassword.after(spanError2);
    } else {
        repeatPassword.classList.remove('error');
        spanError2.remove()
    }
    if (!validateFormOnRequired(inputs)&&!email.classList.contains('error')&&!repeatPassword.classList.contains('error')) {
        checkIn.removeAttribute('disabled')
    }
}
class Person {
    static  store= [];
    constructor({
       email,
       name,
       password
    }) {
        this.email=email,
        this.name=name,
        this.password=password
    }
    static describePerson(data) {
        Person.setPerson(new Person(data))
    }
    static setPerson(person) {
         console.log(person);
        Person.store.push(person)
        console.log(Person.store)
    }

}
checkIn.onclick=function(){
    Person.describePerson({
        email:email.value,
        name:name.value,
        password:password.value
    })
}
function validateFormOnRequired(inputs) {
    let valid = false;
    for (let elem of inputs) {
        if (!elem.value.length) {
            valid = true;
            spanError3.innerHTML = 'заполните все поля';
            checkIn.after(spanError3)
        } else {
            spanError3.remove();
        }
    }
    return valid;
}
