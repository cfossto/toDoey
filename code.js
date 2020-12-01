

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

    let obj = {"name": thing}

    toDoList.push(obj)

    console.log(toDoList)
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


function showListOnScreen(){


    $(".todoList").empty();

    for (let i of toDoList){

        $(".todoList").append("<li class='.liNormal'>"+i.name+"<input type='button' class='deleteBtn' value='X' ></input> </li>");

    }

}




// Mark thing as done
function markAsDone(){

    let allLi = $("li");

    // Loop through all li-elements
    for (let listElem of allLi){

        // On click, toggle to class
        $(listElem).click( function() {  
            $(listElem).toggleClass("blue")

    })}


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