//setting up variables
let inputField = document.querySelector(".add-task input");
let addButton = document.querySelector(".add-task button");
let tasksContent = document.querySelector(".task-content");  
let taskStateBtn = document.querySelector(".task-state .btn"); 
let tasksCount = document.querySelector(".count span");
let tasksCompleted = document.querySelector(".completed span");
let clearButton = document.querySelector(".clr");
let localItems=[];
//focus on input field
window.onload = function(){
    inputField.focus();
    // if there is already tasks save in local storage to avoid making the list empty every time we refresh
    if(localStorage.getItem("localItems")){
        localItems =JSON.parse(localStorage.getItem('localItems'));
        showTasks();
    }
    

}



// Adding tasks to appear to the user  

addButton.onclick = function(){
    if(inputField.value != ""){
       
    let localItems = JSON.parse(localStorage.getItem('localItems'));
    if( localItems === null){
        taskslist = [];

    }else{
        
        taskslist = localItems;
    }

        taskslist.push(inputField.value);
        localStorage.setItem('localItems',JSON.stringify(taskslist));
        
        showTasks();
        
    }
}
    // function that will save each input task in local storage and will create the tasks element
function showTasks(){
    
        let output ='';
        let tasksSavedContent = document.querySelector(".task-content");    
        let localItems = JSON.parse(localStorage.getItem('localItems'));
        if( localItems === null){
        
            taskslist = [];

        }else{
            
            taskslist = localItems;
        }
        taskslist.forEach((data) => {

             output += `
             <span class="task-box"> <input type="checkbox" id=${(data)} name="task"  value=${(data)} > ${(data)}
             <button class="del">X</button>

             </span>
             `
        });
        tasksSavedContent.innerHTML = output;
        calculateTasks();
        inputField.value="";
        inputField.focus();
    };

 /*________________________________________________________________________________________________________________*/
    //delete task (check for which task is currently used) 
    // add event listener 3shn dah zorar msh mawgod dah byt3ml
document.addEventListener('click', function(e) {
        if(e.target.className == 'del'){
            // get the task name from html
            let currentTaskText= e.target.parentNode.innerHTML.split(">");
            currentTaskText = (currentTaskText[1].trim().split("/n"))[0].trim().split("<")[0].trim();
            //filter the list in local storage by comparing 
            let localItems = JSON.parse(localStorage.getItem('localItems'));
            localItems = localItems.filter((task) => task != currentTaskText);
            localStorage.setItem('localItems',JSON.stringify(localItems));
            e.target.parentNode.remove();
    
            calculateTasks();
            //check taskcount 
            if(tasksContent.childElementCount == 0){
                createNoTasks();
            }
        }
    
    
 
/*________________________________________________________________________________________________________________*/
    
        
   

    // when select button is clicked show the check box beside each task        
       
    if(e.target.className == 'sel'){
        const checkBoxesAppear = document.querySelectorAll("input[type=checkbox]");    
        console.log(checkBoxesAppear);
        checkBoxesAppear.forEach(function(element) {
                element.style.visibility = 'visible';
                
                }

            )
                
            // this only gets one check box 
            const checkboxes = document.querySelector("input[type=checkbox]");    
            checkboxes.addEventListener('change',function(e){
    
               if(checkboxes.checked){
                completeButton= `<button class="complete">Complete</button>`
                taskStateBtn.innerHTML += completeButton;
               }
            
         
     
});
}

    // task is completed when pressing complete
    if(e.target.className == 'complete'){
        let taskBoxSpan = document.querySelector(".task-content .task-box");
        taskBoxSpan.classList.toggle("finished");
        calculateTasks();
        e.stopImmediatePropagation();
        
    }


});


    


   


     



/*________________________________________________________________________________________________________________*/
 // function to create no tasks message
    
 function createNoTasks() {
    let noMsgSpan = document.createElement("span");
    let noMsgText = document.createTextNode("No Tasks Yet")
    noMsgSpan.appendChild(noMsgText);
    noMsgSpan.className ='no-tasks-message';
    tasksContent.appendChild(noMsgSpan);
 }


 /*----------------------------------------------------------------*/
 // function to calculate the count of each task and how many is completed
 function calculateTasks(){

    tasksCount.innerHTML = document.querySelectorAll(".task-content .task-box").length;
    tasksCompleted.innerHTML = document.querySelectorAll(".task-content .finished").length;
 }


//clear buttton 
clearButton.onclick =function (){
    tasksContent.innerHTML = '';
    window.localStorage.clear();
    createNoTasks();
    calculateTasks();
}

