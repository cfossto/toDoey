

let toDoList = [];



// Button-click
$("#btn").click( function (){
    
    
    let inputs = $("#inputs");

    // Check if empty, else - add
    checkIfEmptyAndAdd(inputs.val())

    // Log for debugging purposes
    console.log(toDoList)

    // Emptys value-field
    $(inputs).val(""); 
   
    
    showList();
    markAsDone();
    deleteThings();
});



function showList(){

    let list = $(".todoList");

    // deprecated, but keeping for historic value
    // list.empty();

    for (let thing of toDoList){

        // Adding elements to screen-list, one by one.
        $(".todoList").append("<li class='.liNormal'>"+thing+"<input type='button' class='deleteBtn' value='X' ></input> </li>");
    }
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
        
        /*
        $(l).mousedown(
            function (){

                $(l).css("text-decoration","line-through")
                $(l).css("background-color","#87ceeb")
            });*/

        $(l).click( function() {  
            $(this).toggleClass("blue")
    

        let elemVal = $(this).index();
        console.log(elemVal)
    
    
    
    })
    


        


    }
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