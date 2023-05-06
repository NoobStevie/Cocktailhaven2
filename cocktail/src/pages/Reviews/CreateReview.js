import axios from 'axios';
import React, { useState } from 'react';

const CreateReview = () => {

    const [user, setUser] = useState('');
    const [cocktail, setCocktail] = useState('');
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState(0);

    const postData = () => {
        axios.post(`http://localhost:8000/reviews`, {
        user,
        cocktail,
        comment,
        rating
	})

    }

    return (
        <div className="form-container">
  <form className="create-form">
    <label>User</label>
    <input placeholder='User'  onChange={(e) => setUser(e.target.value)}/>

    <label>Cocktail</label>
    <input placeholder='Cocktail'  onChange={(e) => setCocktail(e.target.value)}/>

    <label>Comment</label>
    <input placeholder='Comment'  onChange={(e) => setComment(e.target.value)}/>

    <label>Rating</label>
    <input placeholder='Rating'  onChange={(e) => setRating(e.target.value)}/>        

    <button onClick={postData} type='submit'>Submit</button>
  </form>
</div>
    )
}

export default CreateReview;