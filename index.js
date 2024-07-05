const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1 = []
let password2 = []
let passwords = [password1, password2]
let genBtn = document.getElementById("gen-btn")
let gendBtns = document.querySelectorAll(".gend-btns")
let alert = document.getElementById("alert")
let pw1 = document.getElementById("pw1")
let pw2 = document.getElementById("pw2")
let pws = [pw1, pw2]

genBtn.addEventListener("click", function() {
    alert.textContent = ""
    for (let i=0; i<2; i++){
        pws[i].textContent = ""
        for(let j=0; j<16; j++){
            let rand = Math.floor(Math.random() * characters.length)
            passwords[i].push(rand)
            pws[i].textContent += characters[rand]
        }
    }
}) 

function copy(button) {
    navigator.clipboard.writeText(button.textContent)
    
    alert.textContent = "Password copied to clipboard!"
}