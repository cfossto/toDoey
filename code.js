

let toDoList = [];



// Button-click
$("#btn").click( function (){
    
    
    let inputs = $("#inputs");
    let inputValue = inputs.val()

    // Check if empty, else - add
    checkIfEmptyAndAdd(inputs.val())

    // Log for debugging purposes
    console.log(toDoList)


    addToListOnScreen(inputValue);
    markAsDone();
    deleteThings();

    // Emptys value-field
    $(inputs).val(""); 
});





function addToListOnScreen(inputValue){

    $(".todoList").append("<li>"+inputValue+"</li");
}




function checkIfEmptyAndAdd(aValue){

    if (aValue === ""){
        
        alert("Empty! Add something");
        return false;
    
    }else{

        toDoList.push(aValue);
    }
}




function markAsDone(){

    let allLi = $("li");

    for (let l of allLi){

        $(l).click( function() {  
            $(this).toggleClass("blue")

    })}

    console.log(allLi)
}






function deleteThings(){

    let allButtons = $(".deleteBtn")

    for (let b of allButtons){

        $(b).click(function () { 
            
            $(this).parent().remove();
            toDoList.shift(b,1);
            
            console.log(toDoList) })
    }
    }