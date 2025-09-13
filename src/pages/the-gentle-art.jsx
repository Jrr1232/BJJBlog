import React from "react";
import Blog from "../components/blogpage";
function TheGentleArt() {
    return (
        <>
            <div id="the-gentle-art-container">
                <div id="blog-post-container">

                    <Blog
                        title="My First Blog"
                        subtitle="Learning React"
                        bio="This is my journey with React so far."
                        date="Sept 12, 2025"
                    />
                </div>
            </div>
        </>
    )
}

export default TheGentleArt;
