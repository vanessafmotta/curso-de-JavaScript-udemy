const txtEmail = document.getElementById("txtEmail")
const msgFeedback = document.getElementById("msgFeedback")

function cadastrarEmail(){
    let email = txtEmail.value
    msgFeedback.innerHTML = `O ${email} foi cadastrado com sucesso!`
    console.log(cadastrarEmail);
}