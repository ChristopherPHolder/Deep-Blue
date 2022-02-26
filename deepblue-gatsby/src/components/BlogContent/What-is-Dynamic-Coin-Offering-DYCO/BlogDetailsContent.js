import React from 'react'

const BlogDetailsContent = () => {
    return (
        <section className="blog-details-area ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-lg-12">
                        <div className="blog-details-desc">

                            <div className="article-content">
                                <div className="entry-meta">
                                    <ul>
                                        <li>
                                            <i className='bx bx-folder-open'></i>
                                            <span>Category </span>
                                                Crypto
                                        </li>
                                        <li>
                                            <i className='bx bx-calendar'></i>
                                            <span>Last Updated</span>
                                                20/02/2022
                                        </li>
                                    </ul>
                                </div>

                                <h2>What is Dynamic Coin Offering (DYCO)?</h2>

                                <p>
                                A <a href="https://learn.daomaker.com/dyco">Dynamic Coin Offering or DYCO </a> 
                                is a way to finance crypto projects or companies that reduces the risk of participants 
                                by granting refunds with a deflationary supply over a predefined period of time. 
                                </p>
                                <p>
                                It does this by using vesting smart contracts which lock in a certain 
                                amount of funds to guarantee a token can be converted on predetermined dates 
                                into a safer asset such as USDC while burning the token which reduces its 
                                supply and should in theory increase the value of the remaining tokens.
                                </p>

                                <h3> How do DYCO's insure refunds? </h3>
                                <p>
                                As mentioned above, <a href="https://drive.google.com/file/d/1ZZUVyQXnBgLaqWqv7qRnU0jNpEyxEkff/view?usp=sharing">DYCO’s </a>
                                use <a href="https://medium.com/trusteddapps/how-to-check-vesting-statements-in-smart-contracts-2b559afdc270">smart vesting contracts </a>
                                which lock-in a percentage of the funds. Then are predetermined dates or 
                                periods of time after the launch the token can be converted into the asset 
                                in which the contact is holding that percentage. However, it can only
                                be converted to a discounted price which is also predetermined. After the 
                                token is converted it is also burned which reduces the supply of the token
                                 and should increase the value of the remaining tokens.
                                </p>

                                <p>
                                In more practical terms let's say that the DYCO contact says that participants can convert their tokens on 3 separate occasions. The first is after 6 months where they can convert it for 80% of the original value, then the next is 12 months where they can convert it for 70% and the final one is at 18 months where they can convert it for 60% of its value. 
                                </p>

                                <p>
                                When you purchase the Token in this scenario for let's say 100 USDCs, 80% or 80 USDCs of that will go into a separate wallet and 20% or 20 USDCs to the companies wallet. Then the company has 6 months to prove itself, and at the end of these 6 months, the token holders get the choice to convert the token for 80 USDCs. If the token is converted, then it is burned. However, if the Token is not converted, then the company receives another 10% or 10 USDCs and another 6 months to prove itself before the participants get the option to convert their tokens again. On this second occasion at 12 months after the creation of the token, the Token holder gets the same choice to convert it but this time only for 70% of its original value 70 USDCs, and the company receives an additional 10% or 10 USDCs. On the 3 and final occasion, the Token holders get a last chance to convert their tokens for 60% of the value and if the tokens are not converted the funds are sent to the company. 
                                </p>
                                
                                <h3>
                                Why does DYCO burn refunded tokens?
                                </h3>
                                <p>
                                DYCO’s burn Tokens have been converted to reduce the supply and increase the value of the remaining token. This creates an additional incentive to the remaining Token holders to not convert their remaining Tokens.
                                </p>

                                <p>
                                To illustrate how reducing the supply of a token will theoretically increase its value, let’s imagine that there is a DYCO with 1000 Tokens sold at 100 USDC’s each, meaning the overall value of the DYCO is 100,000 USDCs; and 2 conversion dates at 6 months for 80% and at 12 months for 60%. Let’s say that in the first conversion date 20% of the tokens were converted back to USDC, meaning that 20 Tokens are burned, 16,000 USDCs have been refunded and only 80 Tokens are left. The value of the DYCO goes down from 100,000 USDCs to 84,000 USDCs, however, the Token value went up from 100 USDCs per Token to 105 USDC’s per Token. This increase in value of the token is should incentivize fewer tokens to be converted on its second refund date. 
                                </p>

                                <h3>
                                Are DYCO’s a safe investment?
                                </h3>
                                <p>
                                A DYCO offers its participants the ability to refund any token, no matter if they held them or sold them at a profit. This allows Token holders to minimize risk and ensure they can only lose a predetermined amount. 
                                </p>
                                <p>
                                It is important to remember that any company can 
                                <a href="https://markets.businessinsider.com/news/stocks/crypto-scams-are-always-there--avoid-getting-rug-pulled-with-these-tips-10809410"> lie about doing DYCO </a>
                                , to be sure it is a real DYCO and its smart contracts are properly set up it should be backed by a trusted launchpad such as 
                                <a href="https://learn.daomaker.com"> DAO PAD </a> 
                                </p>

                                <p>
                                Launchpads like <a href="https://learn.daomaker.com"> DAO PAD </a> and 
                                <a href="https://infinitypad.com"> Infinity PAD </a> function like a trusted central entity which ensures the DYCO is properly set up. Additionally, 
                                <a href="https://learn.daomaker.com/research">DAO Maker researches the companies and projects</a>, and publish all the information they find making it easier for you to learn about these project and reducing the chances of getting scammed.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default BlogDetailsContent;