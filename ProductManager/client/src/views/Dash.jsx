import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ProductRow = ({ product, deleteProduct }) => {
	return (
		<tr className="text-center text-2xl">
			<td>{product.title}</td>
			<td>
				<span className="text-emerald-900 font-bold text-2xl"> $ </span>
				{product.price}
			</td>
			<td>{product.description}</td>
			<td>
				<button className="btn btn-sm bg-primary text-black mx-2">
					<Link to={`/product/${product._id}`}>Details</Link>
				</button>
				<button
					className="btn btn-sm bg-red-800 text-white mx-2"
					onClick={() => deleteProduct(product._id)}>
					Delete
				</button>
			</td>
		</tr>
	);
};

const Dashboard = () => {
	const [products, setProducts] = useState([]);
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		axios
			.get("http://localhost:8000/api/product")
			.then((res) => {
				setProducts(res.data.allDaProducts);
				setLoaded(true);
			})
			.catch((err) => console.error(err));
	}, []);

	const deleteProduct = (productId) => {
		axios
			.delete("http://localhost:8000/api/product/" + productId)
			.then(() => {
				setProducts(products.filter((product) => product._id !== productId));
			})
			.catch((err) => console.error(err));
	};

	return (
		<div>
			<hr />
			{loaded && (
				<table className="table text">
					<thead>
						<tr>
							<th className="text-xl text-center text-primary-focus">Title</th>
							<th className="text-xl text-center text-warning">Price</th>
							<th className="text-xl text-center text-success">Description</th>
							<th className="text-xl text-center text-info">Actions</th>
						</tr>
					</thead>
					<tbody>
						{products &&
							products.map((p) => (
								<ProductRow
									key={p._id}
									product={p}
									deleteProduct={deleteProduct}
								/>
							))}
					</tbody>
				</table>
			)}
		</div>
	);
};

export default Dashboard;
