var circle = document.querySelector("#circledDiv")
var showPrompt = prompt("Enter the Number of Blocks You want","")
var randomNumber = Math.floor(Math.random() * showPrompt) + 1;
var attempts = 0;

console.log(randomNumber)

createCircle(showPrompt)

function createCircle(showPrompt)
{
    if(showPrompt<10)
    {
        alert("Blocks should be more than 10")
        return
    }

    for(i=0 ; i<showPrompt; i++)
    {
        var para1 = document.createElement("p")
        para1.classList.add("para")

        para1.innerText = i+1

        circle.appendChild(para1)

    }

    var para= document.querySelectorAll(".para");
    para.forEach((element) => 
    {
        element.addEventListener("click", function () 
        {
            attempts++

            if (element.innerText == randomNumber) 
            {
                element.style.backgroundColor = "green";
                alert("Congratulations! You have won the game");

                var imgContainer = document.querySelector("#imageContainer"); 
                var img = document.createElement("img");
                img.src = "download.jpg";  
                img.alt = "Correct";
                img.style.width = "200px"; 
                img.style.height = "200px";
                imgContainer.appendChild(img);

                return;
            } 
            
            else if (element.innerText > randomNumber) 
            {
                element.style.backgroundColor = "red";


                var imgContainer = document.querySelector("#imageContainer"); 
                var img = document.createElement("img");
                img.src = "wrong.gif";  
                img.alt = "Wrong";
                img.style.width = "100px"; 
                img.style.height = "10  0px";
                imgContainer.appendChild(img);  

            } 
            
            else if (element.innerText < randomNumber) 
            {
                element.style.backgroundColor = "yellow";
            }

            
            
            if(attempts === 5)
            {
                alert("Game Over! The correct number was " + randomNumber);
                return;
            }
        });
    });
}