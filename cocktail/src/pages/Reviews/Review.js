import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import StarRating from '../../components/StarRating';


const Review = () => {
    const [APIData, setAPIData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/reviews`)
        .then((response) => {
            setAPIData(response.data);
        })
    }, [])

    const setData = (data) => {
        let { id, user, cocktail, comment, rating } = data;

        localStorage.setItem('ID', id);
        localStorage.setItem('User', user);
        localStorage.setItem('Cocktail',cocktail);
        localStorage.setItem('Comment', comment);
        localStorage.setItem('Rating', rating)
      }

      const onDelete = (id) => {
        axios.delete(`http://localhost:8000/reviews/${id}`)
        .then(() => {
            getData();
        })
      }

      const getData = () => {
        axios.get(`http://localhost:8000/reviews`)
            .then((getData) => {
                 setAPIData(getData.data);
             })
    }

    return (
        <div className="container">

        {APIData.map((data) => (

          <div className="review" key={data.id}>
            User: {data.user}<br/>
            Cocktail: {data.cocktail}<br/>
            Comment: {data.comment}<br/>
            Rating: {data.rating} <StarRating/> <br/>
            <div className="gap">
       
            </div>
          
          </div>
        ))}
      </div>
    )
}

export default Review;