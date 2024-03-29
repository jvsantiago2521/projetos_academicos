const contatos = [
    {nome:"NOME DO CONTATO", fone: "FONE DO CONTATO"}
]

const root = document.getElementById("main")

function titulo(nome){
    var h2Element = document.createElement("h2")
    h2Element.textContent = nome
    return h2Element
}

function InputText(){
    var input_textElement = document.createElement("input")
    input_textElement.type = "text"
    input_textElement.placeholder = "Nome do contato"
    return input_textElement

}

function InputTel(){
    var input_telElement = document.createElement("input")
    input_telElement.type = "text"
    input_telElement.placeholder = "Telefone do contato"
    return input_telElement
}

function InputSubmit(){
    var input_submitElement = document.createElement("input")
    input_submitElement.type = "submit"
    input_submitElement.value = "Salvar dados do formulário"
    return input_submitElement
}

function ValidateForm(campos){
    let telefoneFormat = /^\(\d{2}\)\d{5}-\d{4}$/
    if(campos.nome.length < 3){
        return false
    }if(!telefoneFormat.test(campos.fone)){
        return false
    }else{
        return true
    }  
}

function HandleSubmit(event){
    event.preventDefault()

    const msgErro = document.querySelector("p.erro")
    msgErro.textContent = ""
    const formData = new FormData(event.target)

    if(!ValidateForm(formData)){
        msgErro.textContent = 'Por favor, verifique os campos do formulário.'
    }else{
        console.log('Formulário válido. Enviando dados...')
    }
}

