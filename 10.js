
let myLead = []

// myLead = JSON.parse(myLead) // converting string into array
// myLead.push("hy bro")
// myLead = JSON.stringify(myLead) //converting array into string 

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("dlt-btn")
const tabBtn = document.getElementById("tab-btn")

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLead"))

if(leadsFromLocalStorage){
    myLead = leadsFromLocalStorage
    render(myLead) //functions and parameters
}

// const tabss = [
//     {url: "https://www.linkedin.com/in/joswin-shogi-2848a5200/"}
// ]
//-------------------------------------------------------------------------
                //localStorage
// localStorage.setItem("myName" , "Joswin Shogi")  //("key" , "value")
// let namee = localStorage.getItem("myName")
// console.log(namee)

// localStorage.clear() //used to clear all values inside the localStorage
//--------------------------------------------------------------------------

inputBtn.addEventListener("click",function(){
    myLead.push(inputEl.value)
    inputEl.value = " "

    localStorage.setItem("myLead",JSON.stringify(myLead)) // Save the myLeads array to localStorage .stringify is used to covert array to string
    render(myLead)
}) 

deleteBtn.addEventListener("dblclick",function(){
    // localStorage.removeItem("myLead")
    localStorage.clear()
    myLead = []
    render(myLead)
})

tabBtn.addEventListener("click",function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLead.push(tabs[0].url)
        localStorage.setItem("myLead",JSON.stringify(myLead))
        render(myLead)
    })
})

function render(lead){
    let listItems = " "
    for(let i=0; i<lead.length; i++){
         listItems +=`
            <li> 
                <a target ='_blank' href = '${myLead[i]}'> 
                ${myLead[i]}</a> 
            </li>
        `
    }
    ulEl.innerHTML = listItems
}


