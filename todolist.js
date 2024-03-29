
init();

function init(){
        document.querySelector('form').addEventListener('submit', addToDo);
        document.getElementById('clear').addEventListener('click', clearTodoList);
        document.querySelector('ul').addEventListener('click', deleteOrCheck);
}

function deleteOrCheck(e){
    if(e.target.className == 'delete')  
        deleteToDo(e); // X 버튼을 누르면 목록에서 항목 삭제
    else {
        checkToDo(e); // 체크박스를 클릭한 경우 글씨 색을 연하게 바꿔준다.
    }
}

function deleteToDo(e){ // X 버튼을 누르면 목록에서 항목 삭제
    let remove = e.target.parentNode;
    let parentNode = remove.parentNode;
    parentNode.removeChild(remove);
}

}

function clearTodoList(e){ //목록 전체 삭제하는 경우
    let ul = document.querySelector('ul').innerHTML = '';
}

function addToDo(e){ //새로운 할 일 추가하는 경우
    e.preventDefault();
    let toDoValue = document.querySelector('input');
    if(toDoValue.value !== '')
        addTask(toDoValue.value);
        toDoValue.value = ''; //입력창 비워주기
}

function addTask(value){
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.innerHTML = `<span class="delete">x</span><input type="checkbox"><label>${value}</label>`;
    ul.appendChild(li);
    document.querySelector('.todolist').style.display = 'block';
}
