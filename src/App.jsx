import {useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";

function App() {
	const [input, setInput] = useState("");
	const [btnName, setbtnName] = useState("Add Todo");
	const [todoID, settodoID] = useState("Add Todo");

	// useEffect(()=>{
	// 	fetch("http://localhost:4000/request");
	// }, []);

	return (
		<div>
			<h1>Learning Redux Toolkit</h1>
			<AddTodo
				input={input}
				setInput={setInput}
				btnName={btnName}
				setbtnName={setbtnName}
        todoID= {todoID}
        settodoID={settodoID}
			/>
			<Todo
				input={input}
				setInput={setInput}
				btnName={btnName}
				setbtnName={setbtnName}
        todoID= {todoID}
        settodoID={settodoID}
			/>
		</div>
	);
}

export default App;
