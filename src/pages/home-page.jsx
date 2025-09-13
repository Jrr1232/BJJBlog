import React from "react";
import Scrolltext from "../components/scrolltext";
import Blogpost from "../components/blogpost";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";

const blogs = [{ title: "The Gentle Art", subtitle: "An Introduction to Brazilian Jiu-Jitsu", description: "Discover the fundamentals of Brazilian Jiu-Jitsu, its history, and why it's known as the gentle art.", bio: "Love it", date: "2023-10-01", link: "gentleart" },
{ title: "Training Tips", subtitle: "Maximizing Your BJJ Workouts", description: "Learn effective training techniques to improve your skills and endurance on the mat.", date: "2023-10-15" },
{ title: "BJJ Lifestyle", subtitle: "Incorporating BJJ into Daily Life", description: "Explore how Brazilian Jiu-Jitsu can positively impact your lifestyle and mindset.", date: "2023-11-05" }];

function Homepage() {
    return (
        <div id="enter-page-container">
            <Navbar />
            <div id="hero-container">
                <Scrolltext text="blogs..." style={{ marginTop: '20rem', color: 'white' }} />
                <div className="blog-container">
                    <ul className="blog-list">
                        {blogs.map((b, index) => (
                            <li className="blog-item" key={index}>
                                <Link to={b.link ? `/${b.link}` : '#'}>
                                    <Blogpost
                                        title={b.title}
                                        subtitle={b.subtitle}
                                        description={b.description}
                                        bio={b.bio}
                                        date={b.date}
                                    />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <h1 id='click-here-link'>click here</h1>
                <a
                    href="https://bjjhq.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    id="bjj-hq-link"
                    aria-label="BJJHQ - opens in a new tab"
                >
                    <Scrolltext text="www.BJJHQ.com  DEALS" color="yellow" />
                </a>

                <div id="bjjhq-container">
                    <img
                        src="https://product_images_bjj.s3.amazonaws.com/sc-rg-028/product_alternate/05.jpg"
                        id="bjj-hq"
                        alt="BJJ gi / product preview from BJJHQ"
                        loading="lazy"
                    />
                </div>

            </div>
            <div id="black-belt-container">
                <img className="black-belt" src="assets/ChatGPT Image Sep 12, 2025, 10_30_00 PM.png" alt="black belt" />
                <img className="black-belt" src="assets/ChatGPT Image Sep 12, 2025, 10_30_00 PM.png" alt="black belt" />
                <img className="black-belt" src="assets/ChatGPT Image Sep 12, 2025, 10_30_00 PM.png" alt="black belt" />
            </div>

        </div>
    );
}

export default Homepage;
