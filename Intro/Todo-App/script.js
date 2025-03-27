taskArray=[]
completedTaskArray=[]

var inputText = document.querySelector("#inputText")
var addButton = document.querySelector("#addButton")
var unorderList = document.querySelector("#taskGiven")
var unorderListCompleted = document.querySelector("#taskCompleted")

addButton.addEventListener("click",()=>{
    // alert(inputText.value)
    text = inputText.value;
    taskArray.push(text)
    unorderList.innerHTML=""
    taskArray.forEach(element => {
        addListElement(element)
    });
   
})

function addListElement(textElement){
    var divForList = document.createElement("div")
    var liForList = document.createElement("li")
    var spanForList = document.createElement("span")
    var checkButton = document.createElement("button")
    checkButton.innerText="Check"
    
    checkButton.addEventListener("click",()=>
    {
        completedTaskArray.push(textElement)
        unorderListCompleted.innerHTML=""
        completedTaskArray.forEach(element => {
            completedListFxn(element)
        })

        taskArray = taskArray.filter(task => task !== textElement);
        unorderList.innerHTML = "";
        taskArray.forEach(element => {
            addListElement(element);
        });

    })

    var deleteButton = document.createElement("button")
    deleteButton.innerText="Delete"

    deleteButton.addEventListener("click",()=>{
        taskArray = taskArray.filter(task => task !== textElement);
        unorderList.innerHTML= ""
        taskArray.forEach(element => {
            addListElement(element);
        });
    })

    spanForList.textContent=textElement

    liForList.appendChild(spanForList)
    liForList.appendChild(checkButton)
    liForList.appendChild(deleteButton)

    divForList.appendChild(liForList)

    unorderList.appendChild(divForList)
}

function completedListFxn(textElement)
{
    var divForList = document.createElement("div")
    var liForList = document.createElement("li")
    var spanForList = document.createElement("span")
    var deleteButton = document.createElement("button")
    deleteButton.innerText="Delete"

    deleteButton.addEventListener("click",()=>{
        completedTaskArray = completedTaskArray.filter(task => task !== textElement);
        unorderListCompleted.innerHTML= ""
    })

    spanForList.textContent=textElement

    liForList.appendChild(spanForList)
    liForList.appendChild(deleteButton)

    divForList.appendChild(liForList)

    unorderListCompleted.appendChild(divForList)
}