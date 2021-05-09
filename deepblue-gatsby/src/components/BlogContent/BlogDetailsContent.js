import React from 'react'
import img6 from '../../assets/images/blog/cloud-computing.jpg'
import img6W from '../../assets/images/blog/cloud-computing.webp'

const BlogDetailsContent = () => {
    return (
        <section className="blog-details-area ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-lg-12">
                        <div className="blog-details-desc">
                            <div className="article-image">
                                <picture>
                                    <source type="image/webp" srcset={img6W} alt="binary infromation comming out of a cloud" />
                                    <source type="image/jpg" srcset={img6} alt="binary infromation comming out of a cloud" />
                                    <img src={img6} alt="bb" />
                                </picture>
                            </div>

                            <div className="article-content">
                                <div className="entry-meta">
                                    <ul>
                                        <li>
                                            <i className='bx bx-folder-open'></i>
                                            <span>Category </span>
                                                IT Basics
                                        </li>
                                        <li>
                                            <i className='bx bx-calendar'></i>
                                            <span>Last Updated</span>
                                                12/01/2021
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
                                
                                <h2> Virtualization </h2>

                                <h3> What is virtualization?</h3>

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
                                        <h5>Software as a Service (SaaS)</h5>
                                    </li>
                                    <p>It is an application run remotely, typically over a browser and most of use make use of 
                                    them every day wether we are aware of them or not and many of them are free. Some 
                                    examples are:</p>
                                    <ul>
                                        <li>Gmail</li>
                                        <li>Google Drive</li>
                                        <li>Microsoft Office</li>
                                    </ul>
                                    <p>This model has the most responsibility for the vendor and least for the user of the product.</p>
                                    <div class="row">
                                        <div class="col-6 text-center">
                                            <h6>Vendor Responsibility</h6>
                                            <p>Application Maintenance</p>
                                            <p>Application Data</p>
                                            <p>Operating System Environment</p>
                                            <p>Virtualization Infrastructure</p>
                                            <p>Hardware Infrastructure</p>
                                            <p>Network Infrastructure</p>
                                        </div>
                                        <div class="col-6 text-center">
                                            <h6>User Responsibility</h6>
                                            <p>Payment of the service</p>
                                        </div>
                                    </div>
                                    <li>
                                        <h5>Platform as a Service (PaaS)</h5>
                                    </li>
                                    <p>
                                        This model provides the user with an environment for the development of application. Some PaaS examples are: 
                                    </p>
                                    <ul>
                                        <li>Heroku</li>
                                        <li>GitHub</li>
                                        <li>Google app engine</li>
                                    </ul>
                                    <p>This model balances the responsibility between the user and the vendor.</p>
                                    <div class="row">
                                        <div class="col-6 text-center">
                                            <h6>Vendor Responsibility</h6>
                                            <p>Operating System Environment</p>
                                            <p>Virtualization Infrastructure</p>
                                            <p>Hardware Infrastructure</p>
                                            <p>Network Infrastructure</p>
                                        </div>
                                        <div class="col-6 text-center">
                                            <h6>User Responsibility</h6>
                                            <p>Payment of the service</p>
                                            <p>Application Maintenance</p>
                                            <p>Application Data</p>
                                        </div>
                                    </div>
                                    <li><h5>Infrastructure as a Service (IaaS)</h5></li>
                                    <p>In this model the user has much more flexibility as how he uses the services, 
                                    as what it does mainly is to provide the user with a computing infrastructure. 
                                    Some common examples are:</p>
                                    <ul>
                                        <li>Amazon Web Services (AWS)</li>
                                        <li>Microsoft Azure</li>
                                        <li>Cisco Metacloud</li>
                                    </ul>
                                    <p>This model shift more of the responsibility away from the vendor and to the user.</p>
                                    <div class="row">
                                        <div class="col-6">
                                            <h6>Vendor Responsibility</h6>
                                            <p>Virtualization Infrastructure</p>
                                            <p>Hardware Infrastructure</p>
                                            <p>Network Infrastructure</p>
                                        </div>
                                        <div class="col-6">
                                            <h6>User Responsibility</h6>
                                            <p>Payment of the service</p>
                                            <p>Application Maintenance</p>
                                            <p>Application Data</p>
                                            <p>Operating System Environment</p>
                                        </div>
                                    </div>
                                    <p>Additionally when talking about the cloud it is also important to consider the common 
                                    architectures. Out of which the 4 most common are: </p>
                                    <ol>
                                        <li>Public</li>
                                        <p>It is by fare the most common and it is as the name suggest cloud vendor that offers 
                                        it services publicly and therefore every one has access to them. Some common examples are:</p>
                                        <ul>
                                            <li>AWS</li>
                                            <li>Google Cloud</li>
                                            <li>Microsoft Azure</li>
                                        </ul>
                                        <li>Private</li>
                                        <p>For this architecture the company owns and maintains everything, however, can provide additional 
                                        security as it you have you have more control over how you data is handled and backed up. It is often 
                                        called on-premises (on-prem) however it is possible to have the servers running in a server farm and 
                                        still maintain complete ownership and responsibility.</p>
                                        <li>Hybrid</li>
                                        <p>As the name suggest it is a bit of both, you can keep your private information on-prem and move the 
                                        rest of you computing requirements to a public cloud.</p>
                                        <li>Community</li>
                                        <p>A community cloud is a multi-tenant platform where several people and/or organizations can share 
                                        computing resources.</p>
                                    </ol>
                                </ol>
                                <h3>Cloud computing features and issues</h3>
                                <p>There are a couple defining features of cloud computing which can have a massive advantage to your organization. 
                                We will about a few here and describe them: </p>
                                <ol>
                                    <li>Shared resources</li>
                                    <p>This refers to the fact that when using cloud computing you are often sharing resources with other users. 
                                    These resources can be; Internal - which is also known as on-prem, or external, which is also known as cloud storage.</p>
                                    <li>Rapid elasticity</li>
                                    <p>This refers to the fact that many cloud computing services such as elastic-beam-stock, allow your computing 
                                    resources to rapidly grow just as rapidly decrease matching the needs. This is quite useful when handling peak 
                                    traffic on web applications, as you will require having more resources but only for a small period of time. </p>
                                    <li>On demand</li>
                                    <p>This refers to the fact that the resources are available when ever you need them and can be obtained 
                                    extremely fast.</p>
                                    <li>Resource pooling</li>
                                    <p>This refers to the fact that to make this possible providers create large clusters of servers 
                                    aggregating the computing power together. </p>
                                    <li>Measured service</li>
                                    <p>Cloud computing services are measured and you only pay for what you use, this often uses a 
                                    system similar to meters to measure the services and then charges you at the end of the month.</p>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default BlogDetailsContent