import './App.css';
import star from "./image/stars.png"
import logo from "./image/logo.webp"
import master_logo from "./image/master_elite_logo.png"
import reward from "./icon/reward.png"
import badge from "./icon/badge.png"
import loc_icon from "./icon/location.png"
import roof_icon from "./icon/roof_icon.png"
import money_icon from "./icon/money.png"
import warranty from "./icon/warranty.png"
import review from "./icon/review.svg"
import play_icon from "./icon/play_icon.png"
import detail_icon from "./icon/details_icon.png"
import time_icon from "./icon/time_icon.png"
import facebook_icon from "./icon/facebook_icon.svg"
import placeholder_icon from "./icon/placeholder.png"
import master_elite from "./image/master_elite.jpg"
import iko_logo from "./image/iko_logo.png"
import NRM_logo from "./image/NRM_Logo.gif"


function App() {
    return (
        <>
            <div className="main">
                <div className="center-container">
                    <div>
                        <div className="rate">
                            <div className="rate_num">
                                <p>4.9</p>
                            </div>
                            <div>
                                <img src={star} alt="rating" className="rate_star" />
                            </div>
                        </div>
                        <div className="rate_text">
                            <p>(106 Ratings & Reviews)</p>
                            <h3>(360) 623-9035</h3>
                        </div>
                    </div>
                    <div className="logo1">
                        <img src={logo} alt="top_weather_logo" />
                    </div>
                    <div className="button1">
                        <button>Request an Estimate</button>
                        <p className="link-button__text">Serving Thurston, Lewis, Mason, and Grays Harbor Counties, WA</p>
                    </div>
                </div>
                <div className="bar">
                    <ul>
                        <li>
                            <a className="link active" href="sample.html">Home</a>
                        </li>
                        <li>
                            <a className="link1" href="roofing.html">Roofing Services</a>
                        </li>
                        <li>
                            <a className="link2" href="finaning.html">Financing</a>
                        </li>
                        <li>
                            <a className="link3" href="warranty.html">Warrranty</a>
                        </li>
                        <li>
                            <a className="link4" href="request.html">Request an Estimate</a>
                        </li>
                        <li>
                            <a className="link5" href="gallery.html">Gallery</a>
                        </li>
                        <li>
                            <a className="link6" href="review.html">Review</a>
                        </li>
                        <li>
                            <a className="link7" href="about.html">About</a>
                        </li>
                        <li>
                            <a className="link8" href="contact.html">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="text">
                    <h1 className="white">Comprehensive Roofing Services</h1><br />
                    <h2 className="white">Free Estimates&nbsp;&nbsp;|&nbsp;&nbsp;Financing Available&nbsp;&nbsp;|&nbsp;&nbsp;Se
                        Habla Español</h2><br />
                    <h2 className="white">(360)623-9035</h2>
                </div>
                <div className="img1">
                    <img src={master_logo} alt="master elite logo" className="inline-image" />
                    <div className="img1_edit">
                        <img src={reward} alt="reward_icon" className="inline-image1" />
                        <p>Over 15 Years of Experience</p>
                    </div>
                    <div>
                        <img src={badge} alt="badge_icon" className="inline-image2" />
                        <p>Competitive Pricing</p>
                    </div>
                    <div>
                        <img src={loc_icon} alt="location_icon" className="inline-image3" />
                        <p>Family Owned</p>
                    </div>
                </div>
                <div className="black">
                    <h2>Quality Roofing at Affordable Prices</h2><br />
                    <p>With over 15 years of experience, trust in the professionals at Top Weather Roofing LLC for all<br /> your roofing needs! Our family-owned business is licensed, bonded, and insured, and offers <br /> expert roofing services at affordable prices. We offer financing with 0% down, 0% interest, and <br /> no payments for 12 months (if qualified)! Contact us today to discuss your needs and receive a <br /> FREE estimate on our services. Your satisfaction is guaranteed with us!</p>
                </div>
                <div className="lin">
                    <div className="lin_head">
                        <p>License # TOPWEWR-821NW</p>
                    </div>
                    <div className="lin_content">
                        <div className="lin_content1">
                            <img src={roof_icon} alt="roof_icon" className="lin_img" />
                            <h2>Roofing</h2>
                            <p>We specialize in top-quality roofing solutions for both residential
                                and commercial properties.
                            </p>
                            <button>Learn More</button>
                        </div>
                        <div className="lin_content1">
                            <img src={money_icon} alt="money_icon" className="lin_img" />
                            <h2>Financing</h2>
                            <p>We make affording your roofing services easy with multiple financing
                                options for you to choose
                                from.</p>
                            <button>Learn More</button>
                        </div>
                        <div className="lin_content1">
                            <img src={warranty} alt="warranty_icon" className="lin_img" />
                            <h2>Warranty</h2>
                            <p>Our services are backed by quality warranties. Choose a standard
                                10-year warranty or an extended
                                warranty!</p>
                            <button>Learn More</button>
                        </div>
                    </div>
                </div>
                <div className="review">
                    <div>
                        <img src={review} alt="review_icon" className="review_img" />
                        <p>Here's what our satisfied customers are saying...</p>
                    </div>
                    <div className="review_content">
                        <h2>Richard A</h2>
                        <p>Absolutely great service. Look no further for top notch roofing company. Wilson
                            Hiner is simply excellent.
                            8/5/2022</p>
                        <hr />
                        <h2>Jeff Y</h2>
                        <p>We just had our garage reroofed by Top Weather Roofing. They were fast, efficient,
                            and did a wonderful job. Would recommend these these fine folks to a... read more
                            8/3/2022</p>
                        <hr />
                        <button>Read More Reviews</button>
                    </div>
                </div>
                <div className="Learn">
                    <div className="learn_content">
                        <h3>Learn More About</h3>
                        <h1>Top Weather Roofing LLC</h1>
                    </div>
                    <div className="learn_play">
                        <img src={play_icon} alt="play" className="learn_play_image" />
                    </div>
                </div>
                <div className="buyers">
                    <div className="buy_master">
                        <img src={master_elite} alt="master_elite" />
                    </div>
                    <div className="buy_master">
                        <img src={iko_logo} alt="iko_logo" />
                    </div>
                    <div className="buy_master">
                        <img src={NRM_logo} alt="NRM_logo" />
                    </div>
                </div>
                <div className="details">
                    <div className="place">
                        <img src={placeholder_icon} alt="details_icon" className="details_img" />
                        <h3>SERVING</h3>
                        <p>Thurston County, Lewis County, Mason County, & Surrounding Area's</p>
                    </div>
                    <div>
                        <img src={time_icon} alt="time_icon" className="details_img" />
                        <h3>HOURS</h3>
                        <div>
                            <div>
                                <p>Mon - Fri</p>
                                <p>Sat</p>
                                <p>Sun</p>
                            </div>
                            <div>
                                <p>8:00 am - 5:00 pm</p>
                                <p>Closed</p>
                                <p>Closed</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={detail_icon} alt="placeholder_icon" className="details_img" />
                        <h3>CONTACT US</h3>
                        <p>Main: (360) 623-9035S</p>
                    </div>
                </div>
                <div className="details_face">
                    <img src={facebook_icon} alt="facebook_icon" className="facebook" />
                </div>
                <footer className="foot">
                    <p>Privacy Policy| Do Not Share My Information | Conditions of Use | Notice and Take Down Policy | Website
                        Accessibility Policy</p>
                    <p>© 2023 The content on this website is owned by us and our licensors. Do not copy any content (including
                        images) without our consent.</p>
                </footer>
            </div>
        </>
    );
}

export default App;
