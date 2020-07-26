import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetching() {

    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    const [idFromButtonClick, SetIdFromButtonClick] = useState(1);

    useEffect(() => {
        // axios.get('https://jsonplaceholder.typicode.com/posts')
        // axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then(res => {
                console.log(res);
                //setPosts(res.data);
                setPost(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [idFromButtonClick])


    const handleClick = () =>{
        SetIdFromButtonClick(id)
    }
    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)}></input>
            <button onClick={handleClick}>fetch post</button>
            <div>{post.title}</div>
            {/* <ul>
                {
                    posts.map(post =>(
                        <li key={post.id}>{post.title}</li>
                    ))
                }
            </ul> */}
        </div>
    )
}

export default DataFetching
