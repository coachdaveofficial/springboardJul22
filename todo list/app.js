window.addEventListener('DOMContentLoaded', function(){
    
    const formButton = document.querySelector('button');
    const todoList = document.querySelector('#todo-list');
    const form = document.querySelector('form')
    const data = [];


    let storeData = JSON.parse(localStorage.getItem('dataStore'));

    if (storeData !== null) {
        for(todoItem of storeData){
            addTodo(todoItem.name, todoItem.checked)
        }    
    }





    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const input = document.querySelector('#todos');

        if (input.value == '') {
            return;      
        }

        var existing = document.evaluate("//li[contains(., '" + input.value + "')]", document, null, XPathResult.ANY_TYPE, null );
        if (existing.iterateNext() !== null) {
            return;
        }

        addTodo(input.value, false);

        form.reset();
        input.value = "";
    })

    function crossOut(cb) {
        let li = cb.parentElement;
        if (cb.checked) {
            li.className = 'line-through'; 
        } else {
            li.classList.remove('line-through');
        }

    }

    function addTodo(whatTodo, isChecked){
        //const input = document.querySelector('#todos');
        const newTodo = document.createElement('li');
        const newCheckbox = document.createElement('input');
        const deleteButton = document.createElement('button');

            // creating the check-box to add linethrough to Todo task
            newCheckbox.className = 'check-box'
            newCheckbox.setAttribute('type', 'checkbox');

        // adding newTodo to todoList with check-box and delete buttons attached
        newCheckbox.checked = isChecked;
        newTodo.innerText = whatTodo;
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-button';
        newTodo.append(deleteButton);
        newTodo.prepend(newCheckbox);
        crossOut(newCheckbox);

        newCheckbox.addEventListener('change', function(){
            crossOut(this);
            let indexToModify = null;
            for(let i = 0; i < storeData.length; i++){
                if (storeData[i].name == this.nextSibling.data) {
                    //save the index to mark as checked
                    indexToModify = i;
                    break;  
                } 
            }
            storeData[indexToModify].checked = this.checked;
            localStorage.setItem("dataStore", JSON.stringify(storeData))
        })



        // listen for click, delete li when clicked
        deleteButton.addEventListener('click', function(e){
            e.target.parentElement.remove();
            let storeData = JSON.parse( localStorage.getItem("dataStore") )
            // find the right object to delete
            let indexToDelete = 0;
            for(let i =0; i < storeData.length; i++){
                if (storeData[i].name == e.target.parentElement.innerText) {
                    //save the index to delete
                    indexToDelete = i;
                    break;  
                } 
            }
            storeData.splice(indexToDelete, 1)
            localStorage.setItem("dataStore", JSON.stringify(storeData)) 

            // storeData[indexToModify].checked = !storeData[indexToModify].checked
        })    



        
        
        todoList.append(newTodo);
        let newTodoObj = {
            name: whatTodo,
            checked: isChecked,
        }
        data.push(newTodoObj)
        
        localStorage.setItem("dataStore", JSON.stringify(data)) 

        
        



    }

    // add line-through to Todo when checkbox is toggled on
    todoList.addEventListener('click', function(e){
        if (e.target.tagName === "INPUT") {
            const todo = e.target.parentElement;
            const checkbox = e.target;
            let storeData = JSON.parse( localStorage.getItem("dataStore") );
            // console.log(checkbox.checked);
            // console.log(todo.innerText)

            let indexToModify = null;
            for(let i = 0; i < storeData.length; i++){
                if (storeData[i].name == e.target.nextSibling.data) {
                    //save the index to mark as checked
                    indexToModify = i;
                    break;  
                } 
            }
            storeData[indexToModify].checked = checkbox.checked;
            localStorage.setItem("dataStore", JSON.stringify(storeData)) 
            crossOut(checkbox);
             
        }
        
    })




})
