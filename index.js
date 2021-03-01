let word=getRandomWord()
let newarr=[]

function displayWord(word){   
    let underscores=[]
    for(let i=0; i<word.length; i++){
        underscores.push("_")
    }
    document.getElementById("random").innerText= underscores.join(" ")
}
const button=document.getElementById("button")
function startGame(){
    for(let i=0; i<word.length; i++){
        if(word[i]=='e'||word[i]=='r'||word[i]=='s'||word[i]=='t'||word[i]=='l'||word[i]=='n'){
            newarr.push(word[i])
        }
        else{
            newarr.push('_')
        }
    }
    document.getElementById("random").innerText=newarr.join(' ')
    document.getElementById("button").remove()
    document.getElementById("form").style.display="block";
}


function getLetters(e){
    e.preventDefault()
    let vowels=['a','e','i','o','u']
    let g1=document.forms["form"]["guess1"].value
    let g2=document.forms["form"]["guess2"].value
    let g3=document.forms["form"]["guess3"].value
    let g4=document.forms["form"]["guess4"].value
    if(g1.length!=1 || g2.length!=1 || g3.length!=1 || g4.length!=1){
        alert("One Letter Per Input")
        return
    }
    else{
        if(!vowels.includes(g1)){
            alert("Vowel Not Inputted As Your First Guess")
            return
        }
        if(vowels.includes(g2) || vowels.includes(g3) || vowels.includes(g4)){
            alert("Input Only One Vowel As Your First Guess")
            return
        }
    }
    let inputs=g1+g2+g3+g4
    let dupes=new Set()
    for(i in inputs){
        if(dupes.has(inputs[i]) || inputs[i]=='e'||inputs[i]=='r'||inputs[i]=='s'||inputs[i]=='t'||inputs[i]=='l'||inputs[i]=='n'){
            alert("Letter Has Been Duplicated Do Not Select Letters That Have Been Included (r,s,t,l,n,e) ")
            return 
        }
        else{
            dupes.add(inputs[i])
        }
    }
    for(let i=0; i<word.length; i++){
        if(word.includes(inputs[i])){
            let idx=word.indexOf(inputs[i])
            newarr.splice(idx,1,inputs[i])
        }
    }
    document.getElementById("random").innerText=newarr.join(' ')
    document.getElementById("wordform").style.display="block";
    document.getElementById("form").remove()
}
function guessWord(e){
    e.preventDefault()
    let guess=document.forms["wordform"]["word"].value
    if(word===guess){
        alert("You Have Won!")
        document.getElementById("random").innerText=word

    }
    else{
        alert("You Are Incorrect")
    }
}
document.getElementById("submitletters").addEventListener("click",getLetters)
document.getElementById("submitword").addEventListener("click",guessWord)