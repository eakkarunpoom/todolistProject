import './App.css';
import AddForm from './componant/AddForm';
import Header from './componant/Header';
import Item from './componant/Item';
import { useState,useEffect } from 'react';

function App() {
  const [task, setTask] = useState(JSON.parse(localStorage.getItem("task"))||[]);
  const [title, setTitle] = useState("");
  const [edit, setEdit] = useState("");
  const [theme, setTheme] = useState("light");

  useEffect(()=>{
    localStorage.setItem("task",JSON.stringify(task))
  },[task])

  const deleteTask = (id) => {
    const deleteResult = task.filter(item=>item.id !==id)
    setTask(deleteResult);
  }

  const addTask = (e) => {
    e.preventDefault();
    console.log("Add sucess")
    if (!title){
      alert("Please input task")
    }
    else if(edit){
      const updateTask = task.map((item)=>{
        if(item.id === edit){
          return {...item,title:title}
        }
        return item;
      })
      setTask(updateTask)
      setEdit(null)
      setTitle("")
    }else{
      const newTask = {
        id:Math.floor(Math.random()*1000),
        title:title
      }
      setTask([...task,newTask]);
      setTitle("")
    }
  }

  const editTask = (id) => {
    setEdit(id)
    const editId = task.find((item)=>item.id === id)
    setTitle(editId.title);
  }

  return (
    <div className={"App "+theme}>
      <Header theme={theme} setTheme={setTheme}/>
      <div className='container'>
        <AddForm title={title} setTitle={setTitle} addTask={addTask} edit={edit}/>
        <div>
          {
            task.map((data)=>(
              <Item key={data.id} data={data} deleteTask={deleteTask} editTask={editTask}/>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
