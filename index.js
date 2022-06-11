let myData = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myData.push(document.getElementById("input-el").value)

    renderData()
    inputEl.value = ""
})

function renderData() {
    let listItems = ""
    for (let index = 0; index < myData.length; index++) {
        //listItems += "<li><a target='_blank' href='" + myData[index] + "'>" + myData[index] +  "</a></li>"
        listItems += `
            <li>   
                <a target='_blank' href='${myData[index]}'>
                    ${myData[index]}
                </a>
            </li>
        `
        
        

    }
    ulEl.innerHTML = listItems
}