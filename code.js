

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

    let obj = {"name": thing, "state": "" }

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




// Shows a list on screen
function showListOnScreen(){


    $(".todoList").empty();

    for (let i of toDoList){

        $(".todoList").append( "<li class='.li'>"+ i.name +"<input type='button' class='deleteBtn' value='X' ></input> </li>" );
    }

}




// Mark thing as done
function markAsDone(){

    // Select all li
    let allLi = $("li")


    // loop through and track click

    for (let li of allLi){

        $(li).click(function (){

            $(this).toggleClass("checked")





        })

    // update the item in toDoList
 
    


    //show list on screen again


    }
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