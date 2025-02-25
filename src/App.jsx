import { useEffect, useMemo, useReducer, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// import Mycomponent from './components/MyComponent'
import MyComponent from './componentSwitch/MyComponent'
import todoReducer from './toDoList/todoReducer'



function App() {
  const [todos,dispatch] = useReducer(todoReducer,[]);
  const [inputValue,setInputValue] = useState('');
  const inputRef = useRef();

  useEffect(()=>{
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    console.log(storedTodos)
    if(storedTodos){
      dispatch({
        type: 'SET',
        payload: storedTodos
      })
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos));
  },[todos])

  const filteredTodos = useMemo(()=>{
    return {
      incomplete: todos.filter(todo => !todo.completed),
      completed: todos.filter(todo => todo.completed)
    }
  },[todos])

  const handleAddTodo = ()=>{
    if(!inputValue) return;
    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    }
    dispatch({
      type: 'ADD',
      payload: newTodo
    })
    setInputValue('')
    inputRef.current.focus()
  }

  const handleToggle = (id)=>{
    dispatch({
      type: 'TOGGLE',
      payload: id
    })
  }

  const handleDele = (id)=>{
    dispatch({
      type: 'DELETE',
      payload: id
    })
  }

  const handleChange = (e)=>{
    setInputValue(e.target.value)
  }

  console.log(todos)
  
  
  return (
    <>
      {/* <Mycomponent></Mycomponent> */}
      {/* <MyComponent></MyComponent> */}
      <h1>Todo List App</h1>
      <div style={{display: 'flex', justifyContent: 'start'}}>
        <input style={{height: '26px'}} ref={inputRef} type="text" value={inputValue} onChange={handleChange}/>
        <button
          className='btn btnAdd'
          style={{marginLeft: '10px'}} 
          onClick={()=>{handleAddTodo()}}
        >
          Add Item
        </button>
      </div>

      <ul className='listTodo'>
        {
          todos.map(todo => (
            <li style={{listStyle: 'none', margin: '10px 0px', fontSize: '22px'}} key={todo.id}>
              <input 
                type="checkbox" 
                name={todo.id} 
                id={todo.id} 
                defaultChecked={todo.completed ? true : false}
                // value={todo.completed ? true : false}
                onChange={(e)=>{
                    console.log(e.target.checked)
                    handleToggle(todo.id)
                }}
              />
              <span style={{}} >{todo.text}</span>
              <button 
                className='btn btnDele'
                style={{marginLeft: '10px'}} 
                onClick={()=>{handleDele(todo.id)}}
              >
                delete</button>
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default App
