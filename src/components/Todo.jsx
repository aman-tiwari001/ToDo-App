// import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeToDo, updateToDo } from "../features/todo/todoSlice";

const Todo = ({ input, setInput, btnName, setbtnName, settodoID }) => {
	const todos = useSelector((state) => state.todos);
	console.log("todos list :", todos);
	const dispatch = useDispatch();

	const handleEditToDo = (id, text) => {
        settodoID(id);
		setInput(text);
        setbtnName("Update Todo");
	};

	return (
		<div>
			<h2>Todo List</h2>
			{todos.length ? (
				todos.map((todo) => {
					return (
						<li id='todo-item' key={todo.id}>
							{todo.text}{" "}
							<div id='operations'>
								<img
									onClick={() =>
										handleEditToDo(todo.id, todo.text)
									}
									id='edit-btn'
									src='/edit.png'
									alt='edit'
									width={30}
								/>
								<button
									id='remove-todo'
									onClick={() =>
										dispatch(removeToDo(todo.id))
									}>
									X
								</button>
							</div>
						</li>
					);
				})
			) : (
				<h3>No #todos added</h3>
			)}
		</div>
	);
};

export default Todo;
