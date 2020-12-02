/* Code for Todoey-exercise*/

// main array
let toDoList = [];

// Button-click
$("#btn").click( function (){
    
    // Get input value from form
    let inputValue = $("#inputs").val()

    // Check if empty, else - add
    checkIfEmptyAndAdd(inputValue);
    
    showListOnScreen();
    markAsDone();
    deleteThings();
    
    // Emptys value-field
    $(inputs).val(""); 
});





// Adding item to list
function addToList(item){


    let thing = item;

    // Create a new list-object, with a state
    let obj = {"name": thing, "state": "" }

    toDoList.push(obj)
}


function checkIfEmptyAndAdd(aValue){

    // Checks if empty
    if (aValue === ""){
        
        alert("Empty! Add something");
        return false;
    }else{
        // adds to array
        addToList(aValue)
    }
}




// Shows a list on screen
function showListOnScreen(){

    // Flush list before update
    $(".todoList").empty();

    // Loop through all list-objects
    for (let i of toDoList){
        
        // Append to li-element in ul
        $(".todoList").append( `<li class=${i.state}> ${i.name} <input type='button' class='deleteBtn' value='X' ></input> </li> `);
    }

    deleteThings();
    markAsDone();
}




// Mark thing as done
function markAsDone(){

    // Select all li
    let allLi = $("li")


   // solved through common index

   for (let i = 0; i<allLi.length; i++){

        $(allLi[i]).click(function (){

        $(allLi[i]).toggleClass("checked");



        if ( toDoList[i].state == "" ){
            
            toDoList[i].state = "checked" }else if ( toDoList[i].state == "checked" ){

                toDoList[i].state = "";

            }
            showListOnScreen();
       }
    )}
}





function deleteThings(){

    // Select all delete-buttons
    let allButtons = $(".deleteBtn")

    // Looping through all delete-buttons
    for (let b of allButtons){

        // Listening for clicks
        $(b).click(function () { 
            
            // Remove list and remove from array
            $(this).parent().remove();
            toDoList.splice(b,1);
            
         })
    }
}