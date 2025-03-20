//selecting popup-overlay popup-box Add-popup-Button

var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var AddpopupButton = document.getElementById("Add-popup-Button")


AddpopupButton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"

})

//selecting cancel-button
var cancelbutton = document.getElementById("cancel-button")

cancelbutton.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
    
})

//selecting popup add-button Book Title Input Book Author Input Short Description 

var BookTitleInput = document.getElementById("Book Title Input")
var BookTitleInput = document.getElementById("Book Author Input")
var ShortDescription =document.getElementById("Book Short Description Input")
var popupaddbutton = document.getElementById("add-button")
var container = document.querySelector(".container")

popupaddbutton.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","list-container")
    div.innerHTML =`<h2>${BookTitleInput.value}</h2>
            <h3>${BookTitleInput.value}</h3>
            <p>${ShortDescription.value}</p>
            <button onclick="deletebook(event)">Delete</button>`
            container.append(div)
            popupoverlay.style.display="none"
    popupbox.style.display="none"
})  

function deletebook(event)
{
    
    event.target.parentElement.remove()
}



