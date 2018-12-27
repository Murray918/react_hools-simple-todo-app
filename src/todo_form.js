import React, { useState } from 'react'

export default function TodoForm ({ addTodo }) {
	const [value, setValue] = useState("")

	  const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
   };

	return (
		<form onSubmit = { handleSubmit }>
         	<input
            	className = "input"
            	type = "text"
            	value = { value }
            	onChange = { e => setValue( e.target.value )}
            	placeholder = "Enter your task"
        	/>
      	</form>
		)
}

