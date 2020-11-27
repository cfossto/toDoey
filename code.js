

let toDoList = [];



// Button-click
$("#btn").click( function (){
    
    // Get input value from form
    let inputValue = $("#inputs").val()

    // Check if empty, else - add
    checkIfEmptyAndAdd(inputValue);

    // Log for debugging purposes
    console.log(toDoList);


    addToListOnScreen(inputValue);
    markAsDone();
    deleteThings();

    // Emptys value-field
    $(inputs).val(""); 
});





function addToListOnScreen(inputValue){


    // Append to list on screen
    $(".todoList").append("<li class='.liNormal'>"+inputValue+"<input type='button' class='deleteBtn' value='X' ></input> </li>");
}




function checkIfEmptyAndAdd(aValue){

    // Checks if empty
    if (aValue === ""){
        
        alert("Empty! Add something");
        return false;
    
    }else{

        // adds to array
        toDoList.push(aValue);
    }
}



// Mark thing as done
function markAsDone(){

    let allLi = $("li");

    // Loop through all li-elements
    for (let listElem of allLi){

        // On click, toggle to class
        $(listElem).click( function() {  
            $(this).toggleClass("blue")

    })}

    console.log(allLi)
}






function deleteThings(){

    let allButtons = $(".deleteBtn")

    for (let b of allButtons){

        $(b).click(function () { 
            
            $(this).parent().remove();
            toDoList.splice(b,1);
            
            console.log(toDoList) })
    }
}