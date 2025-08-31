import React from "react";
import Scrolltext from "../components/scrolltext";
import Blogpost from "../components/blogpost";
import Navbar from "../components/navbar";


const blogs = [
    {
        title: "5 Lessons I Learned as a Blue Belt",
        subtitle: "What 6 months on the mat taught me",
        description: "Being a blue belt is humbling. You think you’ve got moves until someone taps you in 5 seconds. Here are five key lessons that shaped my journey: patience, consistency, humility, focus, and flow.",
        date: "August 30, 2025"
    },
    {
        title: "Guard Passing: Tips That Actually Work",
        subtitle: "Stop getting stuck under closed guard",
        description: "I used to struggle endlessly with guard passing. After experimenting with drills and watching higher belts, I discovered simple adjustments that make a huge difference. Here’s what worked for me.",
        date: "August 25, 2025"
    },
    {
        title: "Rolling With Higher Belts Without Feeling Defeated",
        subtitle: "How to learn from taps instead of feeling frustrated",
        description: "Tapping to higher belts can be discouraging, but it’s the fastest way to improve. I’ll share my approach to staying motivated, analyzing mistakes, and turning each roll into a lesson.",
        date: "August 20, 2025"
    },
    {
        title: "Blue Belt Gear Guide",
        subtitle: "What I actually use in training",
        description: "Finding the right gi, rash guard, and accessories can be overwhelming. Here’s my honest review of gear I’ve tried as a blue belt and what I recommend for comfort and durability.",
        date: "August 15, 2025"
    },
    {
        title: "Mental Game: Staying Calm Under Pressure",
        subtitle: "Applying Jiu-Jitsu mindset off the mat",
        description: "BJJ teaches patience and composure. I’ve found that techniques for staying calm during rolling apply to work, school, and daily life. Here are strategies that helped me.",
        date: "August 10, 2025"
    }
];




function homepage() {

    return (

        <>
            <div id="enter-page-container">
                <Navbar />
                <div id="hero-container">
                    <Scrolltext text="blogs..." color="white" style={{ marginTop: '20rem', Color: 'white' }}/>
                    <div className="blog-container">
                        <ul className="blog-list">
                            {blogs.map((b, index) => (
                                <li className="blog-item" key={index}>
                                    <a href='/'>
                                        <Blogpost
                                            title={b.title}
                                            subtitle={b.subtitle}
                                            description={b.description}
                                            date={b.date}
                                        />
                                    </a>
                                </li>
                            ))}
                        </ul>

                    </div>
                    <Scrolltext text="tap..." />
                </div>
            </div>

        </>
    )
}

export default homepage