let form = document.getElementById('tasks__form');
let input = document.getElementById('task__input');

let tasksList = document.getElementById('tasks__list');
let taskRemove = document.getElementsByClassName('.task__remove');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    let task = document.createElement('div');
    task.classList.add('task');


    if(input.value.trim() === '') {
        return;
    } else {
        task.innerHTML = `<div class="task__title">${input.value.trim()}</div><a href="#" class="task__remove">&times;</a>`;
        tasksList.append(task);
    }

    input.value = '';
});

tasksList.addEventListener('click', (e) => {
    console.log(e.target.classList.value);
    if (e.target.classList.value === "task__remove"){
        let link = e.target;
        link.closest('.task').remove();
    }
})