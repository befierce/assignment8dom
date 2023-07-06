var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

//form submit event
form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
//


function addItem(e) {
    e.preventDefault();

    // Get input value
    var newItem = document.getElementById('item').value;

    // Create new li element
    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));

    // Create del button
    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('x'));
 
    var editBtn = document.createElement('button');
    editBtn.className = 'btn btn-primary btn-sm float-right edit';
    editBtn.appendChild(document.createTextNode('Edit'));


    // Append delete button to li element
    li.appendChild(deleteBtn);

    li.appendChild(editBtn);

    // Append li element to list
    itemList.appendChild(li);
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('are you sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}