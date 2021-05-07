import React from 'react'
import {Link} from 'gatsby'
import img4 from '../../assets/images/blog/blog-img4.jpg'

const BlogCard = () => {
    return (
        <div className="blog-area ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog-post bg-fffbf5">
                            <div className="post-image">
                                <Link to="/blog-details">
                                    <img src={img4} alt="image" />
                                </Link>
                            </div>

                            <div className="post-content">
                                <ul className="post-meta d-flex justify-content-between align-items-center">
                                    <li>
                                        <div className="post-author d-flex align-items-center">
                                            
                                            <span>Christopher Holder</span>
                                        </div>
                                    </li>
                                    <li>
                                        <i className='flaticon-calendar'></i> January 8, 2021
                                    </li>
                                </ul>
                                <h3>
                                    <Link to="/blog-details">
                                        Tha basics of cloud computing
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard