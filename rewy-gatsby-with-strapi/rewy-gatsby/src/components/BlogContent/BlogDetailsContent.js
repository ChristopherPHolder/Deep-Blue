import React from 'react'
import {Link} from 'gatsby'
import BlogSidebar from './BlogSidebar'
import img6 from '../../assets/images/blog/blog-img6.jpg'
import img4 from '../../assets/images/blog/blog-img4.jpg'
import img5 from '../../assets/images/blog/blog-img5.jpg'
import img7 from '../../assets/images/blog/blog-img7.jpg'
import img11 from '../../assets/images/blog/blog-img11.jpg'
import img12 from '../../assets/images/blog/blog-img12.jpg'
import user1 from '../../assets/images/user1.jpg'
import user2 from '../../assets/images/user2.jpg'
import user3 from '../../assets/images/user3.jpg'
import user4 from '../../assets/images/user4.jpg'

const BlogDetailsContent = () => {
    return (
        <section className="blog-details-area ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12">
                        <div className="blog-details-desc">
                            <div className="article-image">
                                <img src={img6} alt="bb" />
                            </div>

                            <div className="article-content">
                                <div className="entry-meta">
                                    <ul>
                                        <li>
                                            <i className='bx bx-folder-open'></i>
                                            <span>Category</span>
                                            <Link to="#">
                                                IT Basics
                                            </Link>
                                        </li>
                                        <li>
                                            <i className='bx bx-calendar'></i>
                                            <span>Last Updated</span>
                                            <Link to="#">
                                                12/01/2021
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <h2>Virtualization and Cloud computing</h2>

                                <p>This is an introduction to virtualization and cloud computing. 
                                Here we will talk about the basic concepts that make all of this 
                                possible and a high level overview of the topics. We will start 
                                getting a general understanding of virtualization and hypervisors 
                                as well as their purpose and requirements. Then we will talk about 
                                cloud computing and the different models that agreed upon, highlighting 
                                who carries responsibility for each part of the service.</p>

                                <blockquote>
                                    <p>I don't need a hard disk in my computer if I can get to the server 
                                    faster ... carring around these non-connected is byzantine by comparison </p>
                                    <cite>Steve Jobs</cite>
                                </blockquote>
                                
                                <h2> Virtualization </h2>

                                <h3> What is versutalization?</h3>

                                <p>Generally speaking then we talk about virtualization we are referring to 
                                the process of running a virtual instance also known as a virtual machine 
                                (VM) in a layer abstracted from the the actual hardware. Moreover, we usually 
                                use virtualization to run multiple independent operating systems on one 
                                physical computer.  Essentially it it is the process of creating a simulated 
                                “virtual" environment inside of a computer where you can run virtual machines.</p>

                                <p>There are some terms which are commonly used which are important to discuss such as:</p>
                                <ul>
                                    <li> Virtual Machine (VM), which is nothing more than the software construct that allows 
                                    a user to run one or more operating systems on top of an existing operating system as 
                                    well as the name we give these machines themselves.</li>

                                    <li>Guest OS, which is used interchangeably for virtual machine as a machine usually 
                                    requires using an Operating System (OS).</li>

                                    <li>Host OS, which refers to the computer the Virtual machine is hosted on.</li>

                                    <li>Hypervisor, which is the process and software that allows the host OS to 
                                    communicate with the guest OS.</li>
                                </ul>

                                <p>Additionally we can divide the use of virtualization into two categories; 
                                client-side virtualization and server-side virtualization, however, 
                                there are others such as application visualization which will not 
                                be covered here.</p>
                                
                                <h3>Client-side Virtualization</h3>

                                <p>This refers to running one or more virtual machines on a personal or work station 
                                which can also referred to in the IT community as a thick client. Typically this is 
                                done using a type 2 hypervisor and can be on both a laptop or a desktop computer as 
                                long as the hardware can support virtualization. (We will talk about the requirements 
                                of visualization later in here). There are two cases where this can be extremely useful:</p>
                                
                                <ol>
                                    <li>
                                        Testing software applications that should run on several divergent operating 
                                        (Windows, Mac, Linux) and flavors of operating systems (Windows 7, Windows 10,  
                                        and macOS Big Sur, MacOS Catelina, Ubunto, Fedora, etc.). This is particularly useful 
                                        when it is important to maintain backwards compatibility while pushing new software 
                                        updates.
                                    </li>

                                    <li>
                                        Using software that is not available for your operating system wether it is 
                                        business applications of games. However, it is important to not that Mac virtual 
                                        machines can only be created on Mac hardware.
                                    </li>
                                </ol>

                                <p>It is important to note that even if this has many practical applications, it is 
                                not a scalable solution or at least not efficiently.</p>
                                
                                <h3>Server-side Virtualization</h3>
                                
                                <p>This refers to running multiple virtual machines on a server which is simply a 
                                very powerful computer which provides functionality for other programs or devices 
                                which we call "clients". This is usually done with a type 1 hypervisor. The main 
                                use case here is to have one large computer that functions as the host for multiple 
                                virtual machines that are used by the employee of the organization in the organization. 
                                Additionally it is used when purchasing computing power from a cloud provider. Services 
                                such as storage space, web servers and computing instances. </p>

                                <h3>The pursue of a Virtual Machine</h3>

                                <p>It allows us to use our hardware resources more efficiently and would also allow more 
                                efficient allocation of capital resulting in a reduction in monetary spending. This 
                                refers to the fact that we can allocate pieces of hour host machine to the guest machines. 
                                In particular me the following resources: </p>

                                <ul>
                                    <li>CPU</li>
                                    <li>RAM</li>
                                    <li>Storage</li>
                                    <li>Networking adapters</li>
                                </ul>
                                
                                <p>
                                    Additionally it is important to note that if we allocate hardware resources to a virtual 
                                    machine, to this guest OS it will appear as if it I its one Hardware. For example if we 
                                    allocate 2GB of RAM to a guest OS, it will appear to it that it has 2GR of RAM as if 
                                    it was its own hardware.  The same idea applies if we allocate it 1 core of the CPU and 
                                    other physical resources.
                                </p>
                                <p>
                                    Another purpose for the use of virtualization but in this case only for cloud services, 
                                    is rapid scalability. As it allows the the company to expand its resources much 
                                    faster and at a much lower cost.This applies both for scaling vertically, which 
                                    means to expanding the hardware capabilities of the VM’s and horizontally which 
                                    means to expand the number of VM's or computing instances. This will be explained 
                                    in more detail in the section on on cloud computing features.
                                </p>

                                <p>
                                    As well as the pre-mentioned purposes of this technology we can also make use of its 
                                    isolation property. What is mean by this is that even tho the guest OS is on a host OS 
                                    where it is possible to host multiple other guest OS’s, the VM’s are isolated from each 
                                    other and from the host. Meaning that to each guest Os it appears as it if it has its 
                                    one hardware and is a standalone (non-virtual) machine. A benefit of this is that if 
                                    VM squires a virus, it does not effect the host OS or other guest OS. Meaning this VM 
                                    can be terminated with no harm done to the other OS’s, and its resources can be 
                                    allocated to a new VM with no harm done to the system. Nevertheless it is possible 
                                    to give OS communication abilities explicitly or as part of a Local Area Network (LAN). 
                                    This is also a massive benefit for testing as you can easily spin up (create), and 
                                    terminal (delete) VM to test an application
                                </p>

                                <h3>Hypervisors</h3>
                                <p>
                                    As hinted above a hypervisor is the process or software that makes virtual 
                                    machines possible. They are softwares that allow for the creation of these 
                                    virtual machines as well as allow the communication between the host OS and 
                                    the guest OS. However, it is important to not that not all hypervisor are the 
                                    same and generally speaking there are two types.
                                </p>

                                <h4>Type 1 Hypervisor</h4>
                                <p>
                                    This type of hypervisor is commonly referred to as bare metal hypervisor 
                                    do to its position on the tech-stack. It runs directly on the hardware and 
                                    provides the best performance, however, it is generally only used for server-side 
                                    virtualization. Some examples of type 1 hypervisors are: 
                                </p>

                                <ul>
                                    <li>Microsoft hyper-V</li>
                                    <li>VMware ESXi</li>
                                    <li>Citrix XenServer</li>
                                </ul>

                                <h4>Type 2 Hypervisor</h4>
                                <p>
                                This type of hypervisor is also known as host-based hypervisor, as it is installed 
                                on top of the existing host OS. It has lower performance and is not scalable, however, 
                                it is great for anyone wanting to learn more about hypervisors of different operating 
                                systems as it provided a very cheap way for users experiment. Some common examples of 
                                this type are: 
                                </p>

                                <ul>
                                    <li>VMWare Fusion</li>
                                    <li>Oracle VirtualBox</li>
                                    <li>QEMU (also an emulator)</li>
                                </ul>

                                <h4>Emulator</h4>
                                <p>While talking about hypervisors it also seems important to mention what an emulator is 
                                and to make a clear differentiation. An emulator is a piece of software that enables the 
                                host computer to behave like a different computer which we refer to as guest. This is used 
                                to run software that was was designed for a specific and different piece of hardware. It is 
                                commonly used in for printers so that they emulate and HP LasorJet and are able to use its 
                                software. However, it is also typically used by game enthusiast which want to play classic 
                                video games and emulate the consoles on their computers.</p>
                                
                                <h2>Cloud Computing</h2>
                                <h4> What is cloud computing? </h4>
                                <p>Put as simply as possible, cloud computing is the delivery of computing services over the 
                                internet. These services may include servers, storage, databases, networking, software amount 
                                other. There are 3 commonly agreed upon types or models of cloud computing.</p>

                                <ol>
                                    <li>
                                        SaaS - Software as a Service
                                    </li>
                                    <br></br>

                                    <p>It is an application run remotely, typically over a browser and most of use make use of 
                                    them every day wether we are aware of them or not and many of them are free. Some 
                                    examples are:</p>

                                    <ul>
                                        <li>Gmail</li>
                                        <li>Google Drive</li>
                                        <li>Microsoft Office</li>
                                    </ul>
                                    <br></br>
                                    <p>This model has the most responsibility for the vendor end least for the user of the product.</p>
                                </ol>

                                <table>
                                    <tr>
                                        <th> <h5> Vendor Responsibility </h5> </th>
                                        <th> <h5> User Responsibility </h5></th>
                                    </tr>
                                    <tr> 
                                        <th>Application maintenance (code)</th>
                                        <th>Payment of the service</th>
                                    </tr>
                                    <tr>
                                        <th>Application Data</th>
                                        <th></th>
                                    </tr>
                                    <tr>
                                        <th>Operating System Environment</th>
                                    </tr>
                                    <tr>
                                        <th> Virtualization Infrastructure </th>
                                    </tr>
                                    <tr>
                                        <th> Hardware Infrastructure </th>
                                    </tr>
                                    <tr>
                                        <th> Network Infrastructure </th>
                                    </tr>
                                </table>

                                <ul className="wp-block-gallery columns-3">
                                    <li className="blocks-gallery-item">
                                        <figure>
                                            <img src={img4} alt="bb" />
                                        </figure>
                                    </li>

                                    <li className="blocks-gallery-item">
                                        <figure>
                                            <img src={img5} alt="bb" />
                                        </figure>
                                    </li>

                                    <li className="blocks-gallery-item">
                                        <figure>
                                            <img src={img7} alt="bb" />
                                        </figure>
                                    </li>
                                </ul>

                                <h3>Four major elements that we offer:</h3>

                                <ul className="features-list">
                                    <li><i className='bx bx-badge-check'></i> Scientific skills for getting a better result</li>
                                    <li><i className='bx bx-badge-check'></i> Communication skills to getting in touch</li>
                                    <li><i className='bx bx-badge-check'></i> A career overview opportunity available</li>
                                    <li><i className='bx bx-badge-check'></i> A good work environment for work</li>
                                </ul>

                                <h3>Setting the mood with incense</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>

                                <h3>The rise of marketing and why you need it</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                            </div>

                            <div className="article-footer">
                                <div className="article-tags">
                                    <span><i className='bx bx-purchase-tag'></i></span>

                                    <Link to="#">Fashion</Link>
                                    <Link to="#">Games</Link>
                                    <Link to="#">Travel</Link>
                                </div>

                                <div className="article-share">
                                    <ul className="social">
                                        <li><span>Share:</span></li>
                                        <li>
                                            <Link to="#" className="facebook">
                                                <i className='bx bxl-facebook'></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="twitter">
                                                <i className='bx bxl-twitter'></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="linkedin">
                                                <i className='bx bxl-linkedin'></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="instagram">
                                                <i className='bx bxl-instagram'></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="article-author">
                                <div className="author-profile-header"></div>
                                <div className="author-profile">
                                    <div className="author-profile-title">
                                        <img src={user1} className="shadow-sm" alt="uu" />
                                        <h4>Chris Orwig</h4>
                                        <span className="d-block">Photographer, Author, Writer</span>
                                        <p>Chris Orwig is a celebrated photographer, author, and writer who brings passion to everything he does. Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="tracer-post-navigation">
                                <div className="prev-link-wrapper">
                                    <div className="info-prev-link-wrapper">
                                        <Link to="#">
                                            <span className="image-prev">
                                                <img src={img11} alt="bb" />
                                                <span className="post-nav-title">Prev</span>
                                            </span>
        
                                            <span className="prev-link-info-wrapper">
                                                <span className="prev-title">What Is The MLB Summer Slugger Program?</span>
                                                <span className="meta-wrapper">
                                                    <span className="date-post">January 21, 2020</span>
                                                </span>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
        
                                <div className="next-link-wrapper">
                                    <div className="info-next-link-wrapper">
                                        <Link to="#">
                                            <span className="next-link-info-wrapper">
                                                <span className="next-title">28 Student-Centered Instructional Strategies</span>
                                                <span className="meta-wrapper">
                                                    <span className="date-post">January 19, 2020</span>
                                                </span>
                                            </span>
        
                                            <span className="image-next">
                                                <img src={img12} alt="bb" />
                                                <span className="post-nav-title">Next</span>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="comments-area">
                                <h3 className="comments-title">2 Comments:</h3>

                                <ol className="comment-list">
                                    <li className="comment">
                                        <div className="comment-body">
                                            <div className="comment-meta">
                                                <div className="comment-author vcard">
                                                    <img src={user1} className="avatar" alt="uu" />
                                                    <b className="fn">John Jones</b>
                                                    <span className="says">says:</span>
                                                </div>

                                                <div className="comment-metadata">
                                                    <span>April 24, 2019 at 10:59 am</span>
                                                </div>
                                            </div>

                                            <div className="comment-content">
                                                <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                                            </div>

                                            <div className="reply">
                                                <Link to="#" className="comment-reply-link">
                                                    Reply
                                                </Link>
                                            </div>
                                        </div>

                                        <ol className="children">
                                            <li className="comment">
                                                <div className="comment-body">
                                                    <div className="comment-meta">
                                                        <div className="comment-author vcard">
                                                            <img src={user2} className="avatar" alt="uu" />
                                                            <b className="fn">Steven Smith</b>
                                                            <span className="says">says:</span>
                                                        </div>
            
                                                        <div className="comment-metadata">
                                                            <a href="#">
                                                                <span>April 24, 2019 at 10:59 am</span>
                                                            </a>
                                                        </div>
                                                    </div>
            
                                                    <div className="comment-content">
                                                        <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                                                    </div>
            
                                                    <div className="reply">
                                                        <a href="#" className="comment-reply-link">Reply</a>
                                                    </div>
                                                </div>

                                                <ol className="children">
                                                    <li className="comment">
                                                        <div className="comment-body">
                                                            <div className="comment-meta">
                                                                <div className="comment-author vcard">
                                                                    <img src={user3} className="avatar" alt="uu" />
                                                                    <b className="fn">Sarah Taylor</b>
                                                                    <span className="says">says:</span>
                                                                </div>
                    
                                                                <div className="comment-metadata">
                                                                    <a href="#">
                                                                        <span>April 24, 2019 at 10:59 am</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                    
                                                            <div className="comment-content">
                                                                <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                                                            </div>
                    
                                                            <div className="reply">
                                                                <Link to="#" className="comment-reply-link">
                                                                    Reply
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ol>
                                            </li>
                                        </ol>
                                    </li>

                                    <li className="comment">
                                        <div className="comment-body">
                                            <div className="comment-meta">
                                                <div className="comment-author vcard">
                                                    <img src={user4} className="avatar" alt="uu" />
                                                    <b className="fn">John Doe</b>
                                                    <span className="says">says:</span>
                                                </div>

                                                <div className="comment-metadata">
                                                    <a href="#">
                                                        <span>April 24, 2019 at 10:59 am</span>
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="comment-content">
                                                <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                                            </div>

                                            <div className="reply">
                                                <Link to="#" className="comment-reply-link">
                                                    Reply
                                                </Link>
                                            </div>
                                        </div>

                                        <ol className="children">
                                            <li className="comment">
                                                <div className="comment-body">
                                                    <div className="comment-meta">
                                                        <div className="comment-author vcard">
                                                            <img src={user1} className="avatar" alt="uu" />
                                                            <b className="fn">James Anderson</b>
                                                            <span className="says">says:</span>
                                                        </div>
            
                                                        <div className="comment-metadata">
                                                            <a href="#">
                                                                <span>April 24, 2019 at 10:59 am</span>
                                                            </a>
                                                        </div>
                                                    </div>
            
                                                    <div className="comment-content">
                                                        <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                                                    </div>
            
                                                    <div className="reply">
                                                        <Link to="#" className="comment-reply-link">
                                                            Reply
                                                        </Link>
                                                    </div>
                                                </div>
                                            </li>
                                        </ol>
                                    </li>
                                </ol>

                                <div className="comment-respond">
                                    <h3 className="comment-reply-title">Leave a Reply</h3>

                                    <form className="comment-form">
                                        <p className="comment-notes">
                                            <span id="email-notes">Your email address will not be published.</span>
                                            Required fields are marked 
                                            <span className="required">*</span>
                                        </p>
                                        <p className="comment-form-author">
                                            <label>Name <span className="required">*</span></label>
                                            <input type="text" id="author" placeholder="Your Name*" name="author" required="required" />
                                        </p>
                                        <p className="comment-form-email">
                                            <label>Email <span className="required">*</span></label>
                                            <input type="email" id="email" placeholder="Your Email*" name="email" required="required" />
                                        </p>
                                        <p className="comment-form-url">
                                            <label>Website</label>
                                            <input type="url" id="url" placeholder="Website" name="url" />
                                        </p>
                                        <p className="comment-form-comment">
                                            <label>Comment</label>
                                            <textarea name="comment" id="comment" cols="45" placeholder="Your Comment..." rows="5" required="required"></textarea>
                                        </p>
                                        <p className="comment-form-cookies-consent">
                                            <input type="checkbox" value="yes" name="comment-cookies-consent" id="comment-cookies-consent" />
                                            <label>Save my name, email, and website in this browser for the next time I comment.</label>
                                        </p>
                                        <p className="form-submit">
                                            <input type="submit" name="submit" id="submit" className="submit" value="Post A Comment" />
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-12">
                        <BlogSidebar />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogDetailsContent