let myData = []

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const tabBtn = document.getElementById("tab-btn")
const deleteBtn = document.getElementById("delete-btn")

//checks if there is any data in local storage and prints it out if there is
const dataFromLocalStorage = JSON.parse(localStorage.getItem("myData"))

if (dataFromLocalStorage){
    myData = dataFromLocalStorage
    render(myData)
}

//saves input box when clicked on save input button
inputBtn.addEventListener("click", function() {
    myData.push(document.getElementById("input-el").value)

    render(myData)
    inputEl.value = ""

    //store user data in local storage on the web
    localStorage.setItem("myData", JSON.stringify(myData))
    console.log(localStorage.getItem("myData"))
})

//saves the tab to the user data
tabBtn.addEventListener("click", function() {
    //chrome api to get current tab
    //chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    //})

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myData.push(tabs[0].url);
        localStorage.setItem("myData", JSON.stringify(myData))
        render(myData)
    })
})

//deletes all local storage and all the links
deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myData = []
    render(myData)
})

function render(data) {
    let listItems = ""
    for (let index = 0; index < data.length; index++) {
        //listItems += "<li><a target='_blank' href='" + myData[index] + "'>" + myData[index] +  "</a></li>"
        listItems += `
            <li>   
                <a target='_blank' href='${data[index]}'>
                    ${data[index]}
                </a>
            </li>
        `
    }

    ulEl.innerHTML = listItems
}