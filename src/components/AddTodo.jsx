import { useState } from "react";
import { useDispatch } from "react-redux";
import todoSlice, { addTodo, updateToDo } from "../features/todo/todoSlice";

const AddTodo = ({ input, setInput, btnName, setbtnName, todoID }) => {
	const dispatch = useDispatch();

	const addTodoHandler = (e) => {
		if (btnName === "Add Todo") {
			e.preventDefault();
			dispatch(addTodo(input));
			console.log("click");
		} else {
			e.preventDefault();
			dispatch(updateToDo({ id: todoID, text: input }));
			setbtnName("Add Todo");
		}
		setInput("");
	};

	return (
		<div>
			<h2> Todo App</h2>
			<div className='form-container'>
				<form onSubmit={addTodoHandler}>
					<input
						type='text'
						placeholder='Enter a todo...'
						value={input}
						onChange={(e) => setInput(e.target.value)}
					/>
					<button disabled={!input.length} type='submit'>
						{btnName}
					</button>
				</form>
			</div>
		</div>
	);
};

export default AddTodo;
