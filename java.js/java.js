function claro(){
    document.body.style.backgroundColor = "#EBF6FC"
    document.body.style.color = "#506775"
    
    var out = document.getElementById('bt')
    out.style.color = "#506775"

    var btEsc = document.getElementById("escuro")
    var btCla = document.getElementById("claro")

    btEsc.style.color = "black"
    btCla.style.color = "black"
    document.body.classList.add("light-mode")
    document.body.classList.remove("dark-mode")

}
function escuro (){
    document.body.style.backgroundColor = "#506775"
    document.body.style.color = "#EBF6FC"
    
    var out = document.getElementById("bt")
    out.style.color = "#EBF6FC"

    var btEsc = document.getElementById("escuro")
    var btCla = document.getElementById("claro")

    btEsc.style.color = "white"
    btCla.style.color = "white"

    document.body.classList.add("dark-mode")
    document.body.classList.remove("light-mode")

}