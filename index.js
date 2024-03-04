const nameInput = document.querySelector(`#name`)
const emailInput = document.querySelector(`#email`)
const messageInput = document.querySelector(`#message`)

const alertDetails = () =>{
    alert(`Name: ${nameInput.value}\nEmail: ${emailInput.value}\nMessage: ${messageInput.value} `)
    alert(`Thank you ${nameInput.value} for contacting us in Anne's Peanut Butter`)
}
