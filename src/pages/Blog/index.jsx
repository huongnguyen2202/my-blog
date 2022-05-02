import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { blogList } from '../../config/data';
import EmptyList from '../../components/common/EmptyList';
import Chip from '../../components/common/Chip';
import './style.css';

const Blog = () => {
    const {id} = useParams()
    const [blog, setBlog] = useState(null)

    useEffect(() => {
        let blog = blogList.find(blog=> blog.id === parseInt(id))

        if(blog) {
            setBlog(blog)
        }
    }, [])
    return (
        <div>
            <Link className="blog-goBack" to="/">
                <span>&#8592;</span> Go Back 
            </Link>

            {
                blog ? <div className="blog-wrap">
                    <header>
                        <p className="blog-date">Published{blog.createAt}</p>
                        <h1>{blog.title}</h1>
                        <div className="blog-subCategory">
                            {blog.subCategory.map((category, index)=>
                                <div><Chip key={index} label={category}/></div>

                            )}
                        </div>
                    </header>
                    <img src={blog.cover} alt='cover' />
                    <p className='blog-desc'>{blog.description}</p>
                </div> : <EmptyList/>
            }
        </div>
    )
}

export default Blog