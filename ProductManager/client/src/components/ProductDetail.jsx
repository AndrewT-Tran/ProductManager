import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import '../output.css'

const ProductDetail = () => {
	const { id } = useParams();
	const [product, setProduct] = useState({});
	const [loaded, setLoaded] = useState(false);
	const [error, setError] = useState("");

	useEffect(() => {
		axios
			.get(`http://localhost:8000/api/product/${id}`)
			.then((res) => {
				if (res.data.product) {
					setProduct(res.data.product);
					setLoaded(true);
				} else {
					setError("Product not found");
				}
			})
			.catch((err) => {
				console.error(err);
				setError("Failed to get product");
			});
	}, [id]);

	return (
		<div>
			{error ? (
				<div>{error}</div>
			) : loaded ? (
				<div className=" my-3 text-center text-2xl">
					<h1 className="texl-2xl text-primary ">{product.title}</h1>
					<h2 className="text-success text-xl my-2 font-semibold"> $ {product.price}</h2>
					<p className="text-primary text-xl">{product.description}</p>
					<Link to={"/product/" + product._id + "/edit"}>
    					Edit
					</Link>
				</div>
			) : (
				<div>Loading...</div>
			)}
		</div>
	);
};

export default ProductDetail;
