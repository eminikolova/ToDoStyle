function Todo({todo,index,remove}){
  function handle(){
    console.log('Ping:',index);
    remove(index);
  }
  return <div className="todo">{todo.text}
  <div id='minus' onClick={handle}>(-)</div>
  </div>
}
