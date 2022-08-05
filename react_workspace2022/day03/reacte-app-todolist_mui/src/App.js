import { Grid, List,Container, Paper, TextField,Button } from "@mui/material";
import {useState} from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';

function ItmeListComp({items}) {
  return (<Paper>
    <List>
    {
      items.map((item)=>(<Todo item={item} key={item.id}/>))
    }
    </List>
  </Paper>);
}


function App() {
  const [items, setItems] = useState([
    {id:"0", title:"hello world 1", done:true},
    {id:"1", title:"hello world 1", done:false},
    {id:"2", title:"hello world 2", done:true}
  ]);
  function onAddItem(newItem){
    const currItems = [...items,newItem];
    setItems(currItems);
  }

  function onDeleteItem(delItem){
    const index = items.findIndex((item)=>{
      return item.id === delItem.id;
    });
    const currItems = [...items];
    currItems.splice(index, 1);
    setItems(currItems);
  }
  function updateItem(newItem){
    const index = items.findIndex((item)=>{
      return item.id === newItem.id;
    });
    const currItems = [...items];
    currItems[index] = newItem;
    setItems(currItems);
  }

 // 3항 연산자 확장 형태 : (조건)?참일때:거짓일때   =>   조건 && 참일대
  const itemListTemp = items.length>0 && (<Paper>
    <List>
      {items.map((item)=>(<Todo updateItem={updateItem} onDeleteItem={onDeleteItem} key={item.id} item={item}/>))}
    </List>
  </Paper>);
  return (
    <div>
      <Container maxWidth="md">
        <AddTodo onAddItem={onAddItem}/>
      <div className="todoList"> 
      {itemListTemp}
      </div>
      </Container>
    </div>
  );
}
export default App;