
import React from 'react'

function todoReducer(state = [],action) {
  switch (action.type) {
    case 'SET':
        return [...action.payload];
    case 'ADD':
        return [...state,action.payload];
    case 'TOGGLE':
        return state.map((todo)=>{
            return todo.id === action.payload ? {...todo, completed: !todo.completed} : todo;
        });
    case 'DELETE':
        return state.filter(todo => todo.id !== action.payload);
    default:
        return state;
  }
}

export default todoReducer