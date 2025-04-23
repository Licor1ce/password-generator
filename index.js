const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordfield1El = document.getElementById("password-field1")
let passwordfield2El = document.getElementById("password-field2")
let generatorButton = document.getElementById("button")
let copyButtonOne = document.getElementById("copy-password")
let copyButtonTwo = document.getElementById("copy-password2")
let lengthValue = document.getElementById("length")

// Task: Generate Two Random Passwords.
//What to do: 
//1. Create the addEventListener for click button. Check with alert("click")
//2. Generate a loop up to 15 since desired length is 15
//3. Render the text in the password field area
//4. Password Length 

function passLength() {
    let lengthInput = lengthValue.value;
    console.log(lengthInput);
    
    if (lengthInput === ""){
        return 15;
    }
    return lengthInput;
}


generatorButton.addEventListener("click", function(){
    let lengthInput = passLength();
    passwordfield1El.textContent = [] //Reset the Password
    for (let i = 0; i < lengthInput; i++) {
        let randomPassOne = Math.floor( Math.random() * characters.length );
        passwordfield1El.textContent += characters[randomPassOne]
    }
    })

generatorButton.addEventListener("click", function(){
    let lengthInput = passLength();
    passwordfield2El.textContent = [] //Reset the Password
    for (let i = 0; i < lengthInput; i++) {
        let randomPassTwo = Math.floor( Math.random() * characters.length );
        passwordfield2El.textContent += characters[randomPassTwo]
    }
    })

//2nd Part Challenge: 
//Add copy-on-click

copyButtonOne.addEventListener("click", function() {
    
    if (passwordfield1El.textContent === "") {
        alert ("Generate your password first") 
    } else {
        var copyText = passwordfield1El;
        navigator.clipboard.writeText(copyText.textContent);
        alert("Password One copied: " + passwordfield1El.textContent);}
    })
    
copyButtonTwo.addEventListener("click", function() {
    
    if (passwordfield2El.textContent === "") {
        alert ("Generate your password first") 
    } else {
        var copyText2 = passwordfield2El;
        navigator.clipboard.writeText(copyText2.textContent);
        alert("Password One copied: " + passwordfield2El.textContent);}
    })
    

