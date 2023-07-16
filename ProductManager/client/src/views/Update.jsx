import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Update = () => {
    const { id } = useParams();
    const navigate = useNavigate(); // add this line
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:8000/api/people/${id}`)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => console.log(err));
    }, [id]);

    const updateProduct = e => {
        e.preventDefault();
        axios.patch(`http://localhost:8000/api/product/${id}`, {
            title,
            price,
            description
        })
            .then(res => {
                console.log(res);
                navigate('/'); // add this line
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
            <h1 className='text-red-600 text-3xl my-4'>Update Product</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label className='text-primary'>Title: </label>
                    <br />
                    <input className='focus:ring-1 ring-gray-800 bottom-3 outline my-2'
                        type='text'
                        name='title'
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                </p>
                <p>
                    <label className='text-secondary'>Price: </label>
                    <br />
                    <input className='outline ring-neutral-focus my-3'
                        type='text'
                        name='price'
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                    />
                </p>
                <p>
                    <label className='text-primary'>Description: </label>
                    <br />
                    <textarea className='outline ring-slate-700'
                        name='description'
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                </p>
                <button className='btn btn-md btn-accent my-5' type='submit'>Update Product</button>
            </form>
        </div>
    );
};

export default Update;
