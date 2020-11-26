

let toDoList = [];




$("#btn").click( function (){
    
    
    let inputs = $("#inputs");
    checkIfEmptyAndAdd(inputs.val())

    console.log(toDoList)
    $(inputs).val(""); 
   
    showList();
    markAsDone();
    deleteThings();
});



function showList(){

    let list = $(".todoList");
    list.empty();

    for (let things of toDoList){

        $(".todoList").append("<li class='.liNormal'>"+things+"<input type='button' class='deleteBtn' value='X' ></input> </li>");
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