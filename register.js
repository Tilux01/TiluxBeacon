const usernameShow = document.querySelector("#usernameShow span img")
const emailShow = document.querySelector("#emailShow span img")
const passwordShow = document.querySelector("#passwordShow span img")
const professionalShow = document.querySelector("#professionalShow span img")
const createAccount = document.getElementById("createAccount")
let levelCount = 1
const process=()=>{
    const username = document.getElementById("username").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const profession = document.getElementById("profession").value
    if(username.match(/^[A-Za-z0-9_-]{2,}$/)){
        usernameShow.src = "images/checked.png"
    }
    else{
        usernameShow.src = "images/c2b60795-574d-4a54-bb22-26e1bd9cb160.svg"
    }
    if(email.match(/^[A-Za-z0-9]{2,}@([a-zA-Z]+\.[a-zA-Z]{2,})+$/)){
        emailShow.src = "images/checked.png"
    }
    else{
        emailShow.src = "images/c2b60795-574d-4a54-bb22-26e1bd9cb160.svg"
    }
    if(password.match(/^[A-Za-z0-9_\-@#$%^&*()_+={};':"\\|,.<>\/?]{8,}$/)){
        passwordShow.src = "images/checked.png"
    }
    else{
        passwordShow.src = "images/c2b60795-574d-4a54-bb22-26e1bd9cb160.svg"
    }
    if(profession.match(/^[A-Za-z0-9_\-@]+$/)){
        professionalShow.src = "images/checked.png"
    }
    else{
        professionalShow.src = "images/c2b60795-574d-4a54-bb22-26e1bd9cb160.svg"
    }
}



createAccount.addEventListener("click", ()=>{
    const username = document.getElementById("username").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const profession = document.getElementById("profession").value

    if (username == ""){
        alert("Pls input your username")
    }
    else if (username.includes(" ")){
        alert("No space allowed in username")
    }
    else if (!(username.match(/^[A-Za-z0-9_-]{2,}$/))){
        alert("Only underscore, letters and numbers are alowed")
    }
    else if (email == ""){
        alert("Pls input your email")
    }
    else if (!(email.match(/^[A-Za-z0-9]{2,}@([a-zA-Z]+\.[a-zA-Z]{2,})+$/))){
        alert("Pls provide valid email")
    }
    else if (password == ""){
        alert("Pls input your password")
    }
    else if (password.length < 8){
        alert("Pls use password of at least 8 characters")
    }
    else if (!((password.match(/^[A-Za-z0-9_\-@#$%^&*()_+={};':"\\|,.<>\/?]{8,}$/)))){
        alert("Pls use a strong password")
    }
    else if (profession == ""){
        alert("Pls input your profession")
    }
    else{
        if (localStorage.getItem("TiluxBeaconUsername")){
            let div = document.createElement("div")
            div.className = "confirm"
            div.style.visibility = "visible"
            div.style.scale = "1"
            div.style.marginTop = "0rem"
            let p = document.createElement("p")
            p.innerHTML = "Creating an account will loose previous level and terminate your account, do you wish to proceed?"
            div.appendChild(p)
            let div2 = document.createElement("div")
            div2.className = "confirmHolder"
            let button = document.createElement("button")
            button.innerHTML = "No"
            div2.appendChild(button)
            let button2 = document.createElement("button")
            button2.innerHTML = "Yes"
            div2.appendChild(button2)
            div.appendChild(div2)
            document.querySelector("body").appendChild(div)
            document.querySelector("section").style.filter = "blur(10px)"
            button.addEventListener("click", ()=>{
                document.querySelector("body").removeChild(div)
                document.querySelector("section").style.filter = "blur(0px)"
            })
            button2.addEventListener("click", ()=>{
                let userHighestWpm = 0
                localStorage.removeItem("TiluxBeaconUsername", username)
                localStorage.removeItem("TiluxBeaconLevelCount", levelCount)
                localStorage.removeItem("TiluxBeaconHighestWpm", userHighestWpm)
                localStorage.setItem("TiluxBeaconUsername", username)
                localStorage.setItem("TiluxBeaconLevelCount", levelCount)
                document.getElementById("section").innerHTML = `
                    <div class="congratulation">
                        <h1>congratulation ${username} You have successfully created your account. Click on the button to start Level 1</h1>
                        <a href="level1.html"><button>Enter Level 1</button></a>
                    </div>
                `
                document.querySelector("section").style.filter = "blur(0px)"
                document.querySelector("section").style.marginTop = "0rem"
                document.querySelector("section").style.padding = "10px"
                document.querySelector("section").style.textAlign = "center"
                document.querySelector("body").removeChild(div)
            })
            
        }
        else{
            let userHighestWpm = 0
            localStorage.removeItem("TiluxBeaconUsername", username)
            localStorage.removeItem("TiluxBeaconLevelCount", levelCount)
            localStorage.removeItem("TiluxBeaconHighestWpm", userHighestWpm)
            localStorage.setItem("TiluxBeaconUsername", username)
            localStorage.setItem("TiluxBeaconLevelCount", levelCount)
            document.getElementById("section").innerHTML = `
                <div class="congratulation">
                    <h1>congratulation ${username} You have successfully created your account. Click on the button to start Level 1</h1>
                    <a href="level1.html"><button>Enter Level 1</button></a>
                </div>
            `
        }
    }
})