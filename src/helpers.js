// Returns a randomly selected item from array of items
function choice(items) {
  const randomIdx = Math.floor(Math.random()*items.length)
  return items[randomIdx];
}

// Removes the first matching item from items, if item exists, and returns it. Otherwise returns undefined.
function remove(items, item){
  const checkItem = items.find(i => i===item);
  if (checkItem) {
    items.splice(items.indexOf(checkItem),1);
    return checkItem;
  }
  return checkItem;
}


export {choice, remove};


