function changeText() {
    const paragraph = document.getElementById('text-to-change');
    paragraph.textContent = "Changed text";
}



function changeBackgroundColor() {
    const box = document.getElementById('task3-box');
    box.style.backgroundColor = 'red'; 
}

function changeFontSize() {
    const box = document.getElementById('task3-box');
    box.style.fontSize = '25px'; 
}



function addItem() {
    const list = document.getElementById('item-list');
    
    const newItem = document.createElement('li');
    newItem.textContent = 'Three';
    
    list.appendChild(newItem);
}

function removeItem() {
    const list = document.getElementById('item-list');
    
    const lastItem = list.lastElementChild;
    
    if (lastItem) {
        list.removeChild(lastItem);
    }
}