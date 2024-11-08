import React from 'react'
import Header from '../common/Header'
import { data } from '../Data/data'
import { Link } from 'react-router-dom'

export default function Blog() {
    return (
        <div>
            <Header />
            <BlogBox data={data} />
        </div>
    )
}

function BlogBox({ data }) {
    
    return (
        <div className='AllBlogs'>
            <h3>All Blogs</h3>
            <div className="BlogArea">
                {
                    data.map((detail, index) => {
                        return (
                            <Card detail={detail} key={index} index={index}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

let Card = ({ detail, index }) => {
    return (
        <div className="card">
            <h4>
                {detail.name}
            </h4>
            <h5>
                {detail.language}
            </h5>
            <button>
                <Link to={`/blog/${index}`}>
                Read Blog
                </Link>
            </button>
        </div>
    );
}
