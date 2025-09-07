import React from "react";
import Scrolltext from "../components/scrolltext";
import Blogpost from "../components/blogpost";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";

const blogs = [ /* your blog objects */];

function Homepage() {
    return (
        <div id="enter-page-container">
            <Navbar />
            <div id="hero-container">
                <Scrolltext text="blogs..." color="white" style={{ marginTop: '20rem', color: 'white' }} />
                <div className="blog-container">
                    <ul className="blog-list">
                        {blogs.map((b, index) => (
                            <li className="blog-item" key={index}>
                                <Link to="/">
                                    <Blogpost
                                        title={b.title}
                                        subtitle={b.subtitle}
                                        description={b.description}
                                        date={b.date}
                                    />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <Scrolltext text="tap..." />
            </div>
        </div>
    );
}

export default Homepage;
