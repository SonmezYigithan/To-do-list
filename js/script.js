/* eslint-env es6 */
/* eslint-disable no-console */
/* eslint-env es6 */
/* eslint-disable */

const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnDeleteAll = document.querySelector('#ClearTasks');
const taskList = document.querySelector('#task-list');

eventListeners();

function eventListeners(){
    form.addEventListener('submit',addNewItem);   

    taskList.addEventListener('click',deleteItem);

    btnDeleteAll.addEventListener('click',deleteAllItems);
}

function addNewItem(e){
    if(input.value === ''){
        alert('cannot list empty items!');
        return 0;
    }

    const li = document.createElement('li'); //adds new column of an item
    li.className='list-group-item';
    li.appendChild(document.createTextNode(input.value));

    const a = document.createElement('a');
    a.classList='delete-item float-right';
    a.setAttribute('href','#');
    a.innerHTML='<i class="fas fa-times"></i>';

    li.appendChild(a);

    taskList.appendChild(li);

    input.value='';

    e.preventDefault();
}

function deleteItem(e){
    if(e.target.className==='fas fa-times'){
        e.target.parentElement.parentElement.remove();
    }

    e.preventDefault(); //scrollbar oluşmaması için
}

function deleteAllItems(){

    taskList.innerHTML='';

    e.preventDefault();
}
