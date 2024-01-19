import React from 'react';
import './news.css';
const News = () => {

    return (
        <div className="container-news">
            <div className="news">
                <div className="news-top">
                    <p>News Update</p>
                    <h2>Recent News & Weather, Flight</h2>
                    <span>Provide information about news, weather, traffic, …</span>
                </div>
                <div className="news-list">
                <div className="child-news">
                        <a href="/single/1">
                            <div className="news-img">
                                <img src="https://res.cloudinary.com/dgyolr1sq/image/upload/v1703174454/nhatrang1-500x425_1_lpwoe7.png" alt="" />
                            </div>
                        </a>
                        <div className="news-name">
                            <div className="name-left">
                                <a href="/single/1">
                                    <div className="news-form">Flight</div>
                                    <div className='name-new'>Unusually Bad Weather Across The Country</div>
                                </a>
                                <div className="new-desc">The North welcomes a cold wave, the South has a low pressure area, these two weather patterns cause bad weather...</div>
                            </div>
                        </div>
                    </div>
                    <div className="child-news">
                        <a href="/single/1">
                            <div className="news-img">
                                <img src="https://res.cloudinary.com/dgyolr1sq/image/upload/v1703174454/nhatrang1-500x425_1_lpwoe7.png" alt="" />
                            </div>
                        </a>
                        <div className="news-name">
                            <div className="name-left">
                                <a href="/single/1">
                                    <div className="news-form">Flight</div>
                                    <div className='name-new'>Unusually Bad Weather Across The Country</div>
                                </a>
                                <div className="new-desc">The North welcomes a cold wave, the South has a low pressure area, these two weather patterns cause bad weather...</div>
                            </div>
                        </div>
                    </div>
                     <div className="child-news">
                        <a href="/single/1">
                            <div className="news-img">
                                <img src="https://res.cloudinary.com/dgyolr1sq/image/upload/v1703174454/nhatrang1-500x425_1_lpwoe7.png" alt="" />
                            </div>
                        </a>
                        <div className="news-name">
                            <div className="name-left">
                                <a href="/single/1">
                                    <div className="news-form">Flight</div>
                                    <div className='name-new'>Unusually Bad Weather Across The Country</div>
                                </a>
                                <div className="new-desc">The North welcomes a cold wave, the South has a low pressure area, these two weather patterns cause bad weather...</div>
                            </div>
                        </div>
                    </div>
                    <div className="child-news">
                        <a href="/single/1">
                            <div className="news-img">
                                <img src="https://res.cloudinary.com/dgyolr1sq/image/upload/v1703174454/nhatrang1-500x425_1_lpwoe7.png" alt="" />
                            </div>
                        </a>
                        <div className="news-name">
                            <div className="name-left">
                                <a href="/single/1">
                                    <div className="news-form">Flight</div>
                                    <div className='name-new'>Unusually Bad Weather Across The Country</div>
                                </a>
                                <div className="new-desc">The North welcomes a cold wave, the South has a low pressure area, these two weather patterns cause bad weather...</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="btn-more">
                    <button>VIEW ALL</button>
                </div>
            </div>
        </div>
    )
};

export default News;
