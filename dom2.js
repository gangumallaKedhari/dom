 var form =document.getElementById('addForm');
 var itemList = document.getElementById('items');
var filter = document.getElementById('filter');


 //form submit event
 form.addEventListener('submit', addItem);

 //Delete event
itemList.addEventListener('click', removeItem);

//filter event
filter.addEventListener('keyup', filterItems);

 //add item
 function addItem(e){
     e.preventDefault();

    //  console.log(1);

    //Get input value
    var newItem = document.getElementById('item').value;

    //create newli element
    var li = document.createElement('li');

 //Addclass
 li.className = 'list-group-item';
 // Addtext node with inputvalue
 li.appendChild(document.createTextNode(newItem));

 //Creare del button element
 var deleteBtn = document.createElement('button');

//add classes to del button
deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  
//Append text node
 deleteBtn.appendChild(document.createTextNode('X'));
 //Append button to li
 li.appendChild(deleteBtn);

 //Append li to list
 itemList.appendChild(li);
 }
 //Remove Item
 function removeItem(e){
    
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
        // console.log(1);
    }  
 }

//  //FilterItems
 function filterItems(e){
      
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    console.log(text);
//      //Get lis
     var items = itemList.getElementsByTagName('li');
     console.log(items);
//  //convert to an array
 Array.from(items).forEach(function(item){
     var itemName = item.firstChild.textContent;
     if(itemName.toLowerCase().indexOf(text) != -1){
         item.style.display = 'block';
     } else {
         item.style.display = 'none';
     }
    console.log(itemName);
     
 });
}


