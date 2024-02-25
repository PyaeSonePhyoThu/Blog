import {useState} from 'react';

const Home = () => {

    const [blogs, setBlogs] = useState(
    [
        {title : 'My new Website', body : 'Lorem', author : 'Mario', id : 1},
        {title : 'My new Website', body : 'Lorem', author : 'Luigi', id : 2},
        {title : 'My new Website', body : 'Lorem', author : 'May', id : 3},
    ]);
    return (  
        <div className="home">
            {blogs.map((blog)=>(
                <div className="blog-preview" key = {blog.id}>
                    <h2>{blog.title}</h2>
                    <p>written by {blog.author}</p>
                </div>
            ))}
        </div>
    );
}
 
export default Home;

