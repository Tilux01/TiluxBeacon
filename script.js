
let spanCount = 0
let Count = 0
let indexCount = 0
let section = document.querySelector("section")
let show = document.getElementById("show")
let copy = document.getElementById("copy")
let button = document.querySelector("#submit")
let button2 = document.querySelector("#submit2")
let header = document.getElementById("header")
let pause = document.getElementById("pause")
let Add = show.innerText.length
let img = document.querySelector("img")
img.src = `images/${copy.innerHTML[indexCount]}.png`
let errorCountOutput = document.getElementById("errorCountOutput")
let completionRange = document.getElementById("completionRange")
let wpmOutput = document.getElementById("wpm")
let length = parseInt(copy.innerText.length)
completionRange.max = length
let timeCount = 0
let wpm = 0
let userHighestWpm = localStorage.getItem("TiluxBeaconHighestWpm")
let userHighestWpmShow;
let currentLevel = document.getElementById("currentLevel")
let reachedLevel = document.getElementById("reachedLevel")
let nameShow = document.getElementById("name")
let help = document.getElementById("help")
let timer = setInterval(() => {
    timeCount++
}, 1000);

//Dashboard
const Dashboard = ()=>{
    nameShow.innerHTML = `${localStorage.getItem("TiluxBeaconUsername")}`
    reachedLevel.innerHTML = `level ${localStorage.getItem("TiluxBeaconLevelCount")}`
    currentLevel.innerHTML = `level ${levelCount}`
    document.addEventListener("keypress", (event)=>{
        wpm = (Count /5)/timeCount*60
        wpmOutput.innerHTML = parseInt(wpm)
        img.src = `images/${copy.innerHTML[indexCount+1]}.png`
        if (copy.innerHTML[indexCount+1] == "."){
            img.src = `images/dot.png`
        }
        else if (copy.innerHTML[indexCount+1] == undefined){
            img.src = `images/initial.png`
        }
        if (errorCountOutput.value >= 100){
            let totalErrorCount = copy.innerHTML.length - Count
            alert("done")
            let wpmShow  = wpm
            if (parseInt(wpmShow) >= userHighestWpm){
                userHighestWpm = wpmShow
                localStorage.removeItem("TiluxBeaconHighestWpm", userHighestWpm)
                localStorage.setItem("TiluxBeaconHighestWpm", userHighestWpm)
                userHighestWpm = localStorage.getItem("TiluxBeaconHighestWpm")
                console.log(localStorage);
                
            }
            if (parseInt(wpm) >= HighestWpm){
                wpm = HighestWpm
            }
            let wpmCalculate = (parseInt(wpm)/HighestWpm) * 100
            let successPercentage =100 - ((parseInt(totalErrorCount)/copy.innerText.length) * 100)
            let totalPercentage = (wpmCalculate + successPercentage)/2
            section.innerHTML = `<div class="output">
                                        <h5 id="emoji">🤭</h5>
                                        <p>Total Error <span>${totalErrorCount}</span></p>
                                        <p>Total Wpm <span>${parseInt(wpmShow)}wpm</span></p>
                                        <p>Highest wpm<span>${parseInt(userHighestWpm)}wpm</span></p>
                                        <p>Accuracy rate<span>${parseInt(totalPercentage)}%</span></p>
                                    </div>`
            button.addEventListener("click", (e)=>{
                if (totalPercentage >= 40){
                    button.innerHTML = `Continue to level ${levelCount}`
                    window.location.href = `level${levelCount}.html`
                }
                else{
                    button.innerHTML = `Replay level ${levelCount}`
                    window.location.href = `level${levelCount}.html`
                }
            })
            let emoji = document.getElementById("emoji")
            if (totalPercentage >= 75){
                emoji.innerHTML = "🤭🥳😺"
            }
            else if (totalPercentage >= 55 && totalPercentage < 75){
                emoji.innerHTML = "🤭😺"
            }
            else if (totalPercentage >= 40 && totalPercentage < 55){
                emoji.innerHTML = "😺"
            }
            else if (totalPercentage >= 20 && totalPercentage < 40){
                emoji.innerHTML = "🥺"
            }
            else if (totalPercentage < 10){
                emoji.innerHTML = "😵‍💫"
            }
            section.style.marginTop = "5rem"
            document.querySelector(".img").style.display = "none"
            button.style.display = "initial"
            if (totalPercentage >= 40){
                levelCount ++;
            }
            if (levelCount > localStorage.getItem("TiluxBeaconLevelCount")){
                localStorage.removeItem("TiluxBeaconLevelCount", levelCount)
                localStorage.setItem("TiluxBeaconLevelCount", levelCount)
            }
        }
        else if (Add >= copy.innerText.length){
            let totalErrorCount = copy.innerHTML.length - Count
            alert("done")
            let wpmShow  = wpm
            if (parseInt(wpmShow) >= userHighestWpm){
                userHighestWpm = wpmShow
                localStorage.removeItem("TiluxBeaconHighestWpm", userHighestWpm)
                localStorage.setItem("TiluxBeaconHighestWpm", userHighestWpm)
                userHighestWpm = localStorage.getItem("TiluxBeaconHighestWpm")
                console.log(localStorage);
                
            }
            if (parseInt(wpm) >= HighestWpm){
                wpm = HighestWpm
            }
            let wpmCalculate = (parseInt(wpm)/HighestWpm) * 100
            let successPercentage =100 - ((parseInt(totalErrorCount)/copy.innerText.length) * 100)
            let totalPercentage = (wpmCalculate + successPercentage)/2
            section.innerHTML = `<div class="output">
                                        <h5 id="emoji">🤭</h5>
                                        <p>Total Error <span>${totalErrorCount}</span></p>
                                        <p>Total Wpm <span>${parseInt(wpmShow)}wpm</span></p>
                                        <p>Highest wpm<span>${parseInt(userHighestWpm)}wpm</span></p>
                                        <p>Accuracy rate<span>${parseInt(totalPercentage)}%</span></p>
                                    </div>`
            button.addEventListener("click", (e)=>{
                if (totalPercentage >= 40){
                    button.innerHTML = `Continue to level ${levelCount}`
                    window.location.href = `level${levelCount}.html`
                }
                else{
                    button.innerHTML = `Replay level ${levelCount}`
                    window.location.href = `level${levelCount}.html`
                }
            })
            let emoji = document.getElementById("emoji")
            if (totalPercentage >= 75){
                emoji.innerHTML = "🤭🥳😺"
            }
            else if (totalPercentage >= 55 && totalPercentage < 75){
                emoji.innerHTML = "🤭😺"
            }
            else if (totalPercentage >= 40 && totalPercentage < 55){
                emoji.innerHTML = "😺"
            }
            else if (totalPercentage >= 20 && totalPercentage < 40){
                emoji.innerHTML = "🥺"
            }
            else if (totalPercentage < 10){
                emoji.innerHTML = "😵‍💫"
            }
            section.style.marginTop = "5rem"
            document.querySelector(".img").style.display = "none"
            button.style.display = "initial"
            if (totalPercentage >= 40){
                levelCount ++;
            }
            if (levelCount > localStorage.getItem("TiluxBeaconLevelCount")){
                localStorage.removeItem("TiluxBeaconLevelCount", levelCount)
                localStorage.setItem("TiluxBeaconLevelCount", levelCount)
            }
        }
        else{
            let char = event.key
            if (copy.innerHTML[indexCount] == "<" && char == "Enter"){
                let br = document.createElement("br")
                show.appendChild(br)
                Count +=4
                spanCount +=4
                indexCount +=4
                length +=4
                completionRange.max = length
                // Add += 1
            }
            if(copy.innerHTML[indexCount] == "<" && char !== "Enter"){
                let br = document.createElement("br")
                show.appendChild(br)
                Count +=3
                spanCount +=4
                indexCount +=4
                length +=4
                completionRange.max = length
                errorCountOutput.value++;
            }
            else if (char.match(/^[A-Za-z0-9_,\s\."'\d:;-=%+]$/)){
                char = event.key
                let spanned = document.createElement("span")
                spanned.className = `${spanCount}`
                if (char.match(/^[\s]$/)){
                    char = " "
                    show.innerHTML += "&nbsp;"
                    spanned.innerHTML += ""
                    Count +=1
                }
                else{
                    spanned.innerHTML += char
                    Count +=1
                }
                spanned.style.color = "green"
                show.appendChild(spanned)
                if (!(char == copy.innerHTML[spanCount])){
                    errorCountOutput.value++;
                    spanned.style.color = "red"
                    Count -=1
                }
                spanCount +=1
                indexCount +=1
            }
        }
        Add++;
        completionRange.value = indexCount
    })
    button2.addEventListener("click", ()=>{
        clearInterval(timer)
        document.querySelector(".confirm").classList.add("show")
        section.style.filter = "blur(10px)"
        button.style.filter = "blur(10px)"
        document.querySelector(".img").style.filter = "blur(10px)"
        let yes = document.getElementById("yes")
        let no = document.getElementById("no")
        no.addEventListener("click", ()=>{
            document.querySelector(".confirm").classList.remove("show")
            section.style.filter = "blur(0px)"
            button.style.filter = "blur(0px)"
            document.querySelector(".img").style.filter = "blur(0px)"
            timer = setInterval(() => {
                timeCount++
            }, 1000);
        })
        yes.addEventListener("click", ()=>{
            document.querySelector(".confirm").classList.remove("show")
            section.style.filter = "blur(0px)"
            button.style.filter = "blur(0px)"
            document.querySelector(".img").style.filter = "blur(10px)"
            button.addEventListener("click", (e)=>{
                if (totalPercentage >= 40){
                    button.innerHTML = `Continue to level ${levelCount}`
                    window.location.href = `level${levelCount}.html`
                }
                else{
                    button.innerHTML = `Replay level ${levelCount}`
                    window.location.href = `level${levelCount}.html`
                }
            })
            let totalErrorCount = copy.innerHTML.length - Count
            let wpmShow  = wpm
                if (parseInt(wpmShow) >= userHighestWpm){
                    userHighestWpm = wpmShow
                    localStorage.removeItem("TiluxBeaconHighestWpm", userHighestWpm)
                    localStorage.setItem("TiluxBeaconHighestWpm", userHighestWpm)
                    userHighestWpm = localStorage.getItem("TiluxBeaconHighestWpm")
                    alert(userHighestWpm)
                    console.log(localStorage);
                    
                }
                if (parseInt(wpm) >= HighestWpm){
                    wpm = HighestWpm
                }
                let wpmCalculate = (parseInt(wpm)/HighestWpm) * 100
                let successPercentage =100 - ((parseInt(totalErrorCount)/copy.innerText.length) * 100)
                let totalPercentage = (wpmCalculate + successPercentage)/2
                section.innerHTML = `<div class="output">
                                        <h5 id="emoji">🤭</h5>
                                        <p>Total Error <span>${totalErrorCount}</span></p>
                                        <p>Total Wpm <span>${parseInt(wpmShow)}wpm</span></p>
                                        <p>Highest wpm<span>${parseInt(userHighestWpm)}wpm</span></p>
                                        <p>Accuracy rate<span>${parseInt(totalPercentage)}%</span></p>
                                    </div>`
                let emoji = document.getElementById("emoji")
                if (totalPercentage >= 75){
                    emoji.innerHTML = "🤭🥳😺"
                }
                else if (totalPercentage >= 55 && totalPercentage < 75){
                    emoji.innerHTML = "🤭😺"
                }
                else if (totalPercentage >= 40 && totalPercentage < 55){
                    emoji.innerHTML = "😺"
                }
                else if (totalPercentage >= 20 && totalPercentage < 40){
                    emoji.innerHTML = "🥺"
                }
                else if (totalPercentage < 20){
                    emoji.innerHTML = "😵‍💫"
                }
                section.style.marginTop = "5rem"
                document.querySelector(".img").style.display = "none"
                button.style.display = "initial"
                if (totalPercentage >= 40){
                    levelCount ++;
                }
                if (levelCount > localStorage.getItem("TiluxBeaconLevelCount")){
                    localStorage.removeItem("TiluxBeaconLevelCount", levelCount)
                    localStorage.setItem("TiluxBeaconLevelCount", levelCount)
                }
        })
    })
    pause.addEventListener("click", () =>{
        clearInterval(timer)
        document.querySelector(".pause").classList.add("show")
        section.style.filter = "blur(10px)"
        button.style.filter = "blur(10px)"
        document.querySelector(".img").style.filter = "blur(10px)"
        let selectLevel = document.getElementById("selectLevel")
        let resume = document.getElementById("resume")
        resume.addEventListener("click", ()=>{
            document.querySelector(".pause").classList.remove("show")
            section.style.filter = "blur(0px)"
            button.style.filter = "blur(0px)"
            document.querySelector(".img").style.filter = "blur(0px)"
            timer = setInterval(() => {
                timeCount++
            }, 1000);
        })
        selectLevel.addEventListener("click", ()=>{
            window.location.href = "level.html"
        })
    })
    help.addEventListener("click", ()=>{
        section.style.filter = "blur(10px)"
        button.style.filter = "blur(10px)"
        document.querySelector(".img").style.filter = "blur(10px)"
        let help = document.createElement("div")
        help.className = "confirm"
        help.classList.add("show")
        let p = document.createElement("p")
        help.style.padding = "20px 20px"
        p.innerHTML = "Test How fast you can while you play with joy and get at least 40% accuracy to get to next level"
        help.appendChild(p)
        let done = document.createElement("button")
        done.innerHTML = "Continue"
        help.appendChild(done)
        document.querySelector("body").appendChild(help)
        done.addEventListener("click", ()=>{
            section.style.filter = "blur(0px)"
            button.style.filter = "blur(0px)"
            document.querySelector(".img").style.filter = "blur(0px)"
            help.classList.remove("show")
        })
    })
}
