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
                                                Web Performance
                                        </li>
                                        <li>
                                            <i className='bx bx-calendar'></i>
                                            <span>Last Updated</span>
                                                2/03/2022
                                        </li>
                                    </ul>
                                </div>

                                <h2>What is Web Performance?</h2>

                                <p>Most of us have heard that web performance is about speed, however,
                                that is not exactly true. It is about much more than that. 
                                Web Performance is about user experience. Optimizing it refers to
                                improving the user experience which usually has the benefit of 
                                <a href="https://www.thinkwithgoogle.com/intl/en-gb/marketing-strategies/app-and-mobile/furniture-village-and-greenlight-slash-page-load-times-boosting-user-experience/" target="_blank" rel="noreferrer"> increasing visitor retention and loyalty</a>. 
                                However, to be able to optimize something, you require being able to 
                                measure it objectively with metrics.  This is why most consider that 
                                to be part of web performance optimization.</p>

                                <p>In other words: <a href="https://developer.mozilla.org/en-US/docs/Learn/Performance/What_is_web_performance#what_is_web_performance" target="_blank" rel="noreferrer">
                                Web performance is the objective measurement and perceived user experience of a website or application. 
                                </a></p>

                                <h3>Why is Web Performance important?</h3>
                                <p>Most users do not notice good performance, they don’t notice that they did not have to wait for content to load or that the objects on the screen did not shift when new content loaded, but they do notice when it's bad. That is why we care and why you should care too. </p>
                                <p>Because when web performance is bad our users get frustrated and associate our website with that frustration and if it's bad enough, they assume it's broken and leave. </p>
                                <p>Good performance is an asset. Bad performance is a liability. Optimizing Web Performance directly affects bounce rates, conversion, revenue, and search engine ranking. A good case study that illustrated this point is
                                <a href="https://medium.com/pinterest-engineering/driving-user-growth-with-performance-improvements-cfc50dafadd7#.wwimdmkpp" target="_blank" rel="noreferrer">Pinterest, when it reduced its weight time by 40%, it increased its SEO traffic by 15% as well as increased its signup conversion rates by 15%.</a></p>

                                <h3>How to diagnose your web performance?</h3>
                                <p>
                                    The best way to make long-term improvements to your web performance is to quantify aspects of your website or application which affect user experience and make incremental adjustments to improve the metrics you have decided on. However, to make that work easier companies have come up with free tools to help us measure and track our web performance. Some of the most recognized tools in this area are: 
                                    <ul>
                                        <li>
                                            <a href="https://developers.google.com/web/tools/lighthouse" target="_blank" rel="noreferrer">Google Lighthouse</a>
                                        </li>
                                        <li>
                                            <a href="https://pagespeed.web.dev" target="_blank" rel="noreferrer">Pagespeed Insights</a>
                                        </li>
                                        <li>
                                            <a href="https://gtmetrix.com" target="_blank" rel="noreferrer">GTmetrix</a>
                                        </li>
                                        <li>
                                            <a href="https://www.webpagetest.org" target="_blank" rel="noreferrer">WebPagetest</a>
                                        </li>
                                        <li>
                                            <a href="https://yellowlab.tools" target="_blank" rel="noreferrer">Yellow Lab Tools</a>
                                        </li>
                                    </ul>
                                    Though it is worth mentioning there are alternatives to Google Lighthouse, it is the dominant tool in the market and can provide the most accurate results. Additionally, Pagespeed Insights is an online implementation of Google Lighthouse which allows you to test any website in a stable environment.
                                </p>

                                <h4>What is Google Lighthouse?</h4>
                                <p><a href="https://developers.google.com/web/tools/lighthouse" target="_blank" rel="noreferrer">
                                Lighthouse </a> is an open-source automated tool built and maintained by google to audit your web performance, accessibility, progressive web apps, SEO, and more as well as identify improvement opportunities.</p>
                                <p>Additionally, in the same way, as the web is constantly evolving, so is Lighthouse, and as of November 15, 2020, <a href="https://developer.chrome.com/blog/lighthouse-9-0/" target="_blank" rel="noreferrer"> Lighthouse 9.0 </a> has been released. </p>

                                <h5>What does the Lighthouse Performance Audit measure?</h5>
                                <p>As of Lighthouse 8, the Lighthouse Performance Audit (https://web.dev/performance-scoring/) consists of the following 6 scored audits and their assigned weights according to the user's perception of performance:
                                    <ul>
                                        <li><a href="https://web.dev/first-contentful-paint/" target="_blank" rel="noreferrer">10% First Contentful Paint (FCP)</a></li>
                                        <li><a href="https://web.dev/interactive/" target="_blank" rel="noreferrer">10% Time to Interactive (Time to Interactive)</a></li>
                                        <li><a href="https://web.dev/speed-index/" target="_blank" rel="noreferrer">10% Speed Index</a></li>
                                        <li><a href="https://web.dev/lighthouse-total-blocking-time/" target="_blank" rel="noreferrer">30% Total Blocking Time</a></li>
                                        <li><a href="https://web.dev/cls/" target="_blank" rel="noreferrer">15% Cumulative Layout Shift</a></li>
                                        <li><a href="https://web.dev/lcp/" target="_blank" rel="noreferrer">25% Largest Contentful Paint</a></li>
                                    </ul>
                                </p>
                                <h5>How Lighthouse metric scores are calculated?</h5>
                                <p>Most of the data extracted from the automated test are calculated in milliseconds and then converted to a value from 0 to 100 depending on and is giving a score based on where it falls on their log-normal distribution derived from the performance metrics of real website performance data on
                                    <a href="https://httparchive.org/" target="_blank" rel="noreferrer">HTTP Archive</a>
                                </p>

                                <h5>How to interpret your Lighthouse score?</h5>
                                <p>As the name suggests, a good user experience usually falls in the range of 90 to 100 and should be what the website should aim to be achieved. To achieve this we suggest stating by identifying what issue is causing the large performance damage, improving it, and then continuing to the next one until satisfied with the score and user experience. </p>
                                <p>The closer your score is to 90 or over the closer it is to being an asset, and if your score is under 50 then it’s a liability and people can probably feel its performance is lacking.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default BlogDetailsContent;