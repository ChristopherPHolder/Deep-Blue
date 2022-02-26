import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const BlogCard = () => {
    return (
        <div className="blog-area ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog-post bg-fffbf5">
                                <div className="post-image">
                                    <Link to="/blog-details/What-is-Dynamic-Coin-Offering-DYCO/">
                                        <StaticImage
                                            width={400}
                                            height={350}
                                            src='../../assets/images/blog/token-converion-ilustration.jpeg'
                                            alt="token convertion ilustration"
                                            placeholder="tracedSVG"
                                        />
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
                                            <i className='flaticon-calendar'></i> February 20, 2022
                                        </li>
                                    </ul>
                                    <h3>
                                        <Link to="/blog-details/What-is-Dynamic-Coin-Offering-DYCO/">
                                            What is Dynamic Coin Offering (DYCO)?
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog-post bg-fffbf5">
                            <div className="post-image">
                                <Link to="/blog-details/Does-a-faster-website-bring-more-conversions/">
                                    <StaticImage
                                        src='../../assets/images/blog/blog-img8.jpg'
                                        alt="traffic analytics ilutration"
                                        width={400}
                                        height={350}
                                        placeholder="tracedSVG"
                                    />
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
                                        <i className='flaticon-calendar'></i> August 3, 2021
                                    </li>
                                </ul>
                                <h3>
                                    <Link to="/blog-details/Does-a-faster-website-bring-more-conversions/">
                                        Does a faster website bring more conversions?
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog-post bg-fffbf5">
                            <div className="post-image">
                                <Link to="/blog-details/Virtualization-and-Cloud-Computing/">
                                    <StaticImage
                                        src='../../assets/images/blog/blog-img4.jpg'
                                        width={400}
                                        height={350}
                                        alt="cloud computing ilustration"
                                        placeholder="tracedSVG"
                                    />
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
                                    <Link to="/blog-details/Virtualization-and-Cloud-Computing/">
                                        The basics of cloud computing
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