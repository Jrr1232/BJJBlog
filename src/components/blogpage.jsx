import React from "react";

function Blog({ title, subtitle, bio, date }) {
    return (
        <>
            <h1 id ="blog-post-title">{title}</h1>
            <h2>{subtitle}</h2>
            <h3>{bio}</h3>
            <h4>{date}</h4>
        </>
    );
}

export default Blog;