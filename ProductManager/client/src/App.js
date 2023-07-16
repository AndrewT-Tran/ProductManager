import React from "react";
import "./output.css";
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./views/Dash";
import New from "./views/New";
import Update from "./views/Update";
import Detail from "./views/Detail";

function App() {
	return (
		<div className="App">
			<h1 className="text-3xl font-bold  text-primary-focus my-3">
				Welcome to Product Tracker!
			</h1>
			<button className="btn-sm btn-accent btn rounded-sm my-4 mx-1">
				<Link to={"/"}>Dashboard</Link>
			</button>
			<button className="btn-sm btn-success btn rounded-sm my-4 mx-1">
				<Link to={"/new"}>New Product</Link>
			</button>

			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route element={<Detail />} path="/product/:id" />
				<Route path="/new" element={<New />} />
				<Route path="/product/:id/edit" element={<Update />} />
			</Routes>
		</div>
	);
}

export default App;
