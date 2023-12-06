const Submit = document.getElementById("form1")

Submit.addEventListener("submit", function(e){
    e.preventDefault()

    const taskField = document.getElementById("task")
    console.log(taskField.value)

    const print = document.getElementById("stampa")
    print.innerHTML = 
    <p>${taskField.value}</p>

     const newTextField = newTextField.value
     newTextField.value =""

     let list = document.querySelector('ul');
     list.addEventListener('click', function(e) { 
       ul('checked'); 
})
}