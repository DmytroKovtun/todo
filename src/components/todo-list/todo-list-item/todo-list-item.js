import React, {Component} from 'react'
import   './todo-list-item.css'

class TodoListItem extends Component {


  render () {

   const {label, onDeleted, onToggleImportant, onToggleDone, done, important} = this.props;

 

   let classNames = 'todo-list-item'

   if (done){
     classNames += ' done';
   };

   if (important){
    classNames += ' important'; 
   }

  return (
     <div className = {classNames}> 
             <div className='todo-list-item-label' 
              onClick = {onToggleDone}
             >   
             {label}
             </div>
             <div className = 'button'>
             <button type = 'button' className = 'btn btn-outline-success '
              onClick = {onToggleImportant}
             >
               <i className= 'fa fa-exclamation' />
             </button>

             <button type = 'button' className = 'btn btn-outline-danger '
             onClick = {onDeleted}
             
             >
               <i className= 'fa fa-trash-o' />
             </button>
             </div>
             
      </div>
  )
  }
}

 export default TodoListItem