let input = document.querySelector('#input-box');
let listContainer = document.querySelector('#list-container');
let btn = document.querySelector('button')

function addText(){
    if(input.value === ''){
        alert('You must write Something');
    }else{
        let li = document.createElement('li');
        li.innerHTML = input.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span)
    }
    input.value = '';
}

btn.addEventListener('click', () => {
    addText()
})

listContainer.addEventListener('click' , (e) => {
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
    }
},false)

function saveData(){
    localStorage.setItem('to_do_data' , listContainer.innerHTML);
}
function showData(){
    listContainer.innerHTML = localStorage.getItem('to_do_data');
}