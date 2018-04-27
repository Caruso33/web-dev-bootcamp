var answer = prompt('What are you going to do?');
arr = ['food', 'drink'];

while (answer !== 'quit'){
  if(answer === 'add') {
    var addItem = prompt('What do you want to add?');
    arr.push(addItem);
    console.log(`${addItem} to list added.`);
  } else if(answer === 'view'){
    console.log('*** Your Todo list consists of: ***');
    arr.forEach((item, ind) => {
      console.log(`${ind}: ${item}`);
    });
  } else if(answer === 'delete'){
    var deleteItem = prompt('which index you would like to delete?');
    arr.splice(deleteItem, 1);
  }
  answer = prompt('What are you going to do?');
}
