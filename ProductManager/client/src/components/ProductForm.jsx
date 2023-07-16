import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ProductForm() {
	const [title, setTitle] = useState("");
	const [price, setPrice] = useState("");
	const [description, setDescription] = useState("");
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post("http://localhost:8000/api/product", {
				title,
				price,
				description,
			})
			.then(() => {
				navigate("/");
			})
			.catch((err) => console.log(err));
	};

	return (
		<form className="my-3" onSubmit={handleSubmit}>
			<label className='text-warning font-bold'>
				Title:
				<input
					className="input mx-3 my-3 input-bordered input-primary w-full max-w-xs"
					type="text"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
			</label>
			<br />
			<label className="text-emerald-800 font-bold">
				Price:
				<input
					className="input input-bordered input-info w-min my-3 mx-2 max-w-xs"
					type="number"
					value={price}
					onChange={(e) => setPrice(e.target.value)}
				/>
			</label>
			<br />
			<label className='text-warning font-bold'>
				Description:
				<input
					className="input mx-3 my-3 input-bordered input-primary w-full max-w-xs"
					type="text"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
			</label>
			<br />
			<button className="btn btn-success" type="submit">
				Submit
			</button>
		</form>
	);
}

export default ProductForm;
