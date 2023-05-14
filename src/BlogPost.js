import React, { useContext, useState } from 'react';
import { LoginContext } from './LoginContext';

const BlogPost = () => {
    const { mobileNumber } = useContext(LoginContext);
    const [blogContent, setBlogContent] = useState('');

    const handleBlogContentChange = (e) => {
        setBlogContent(e.target.value)
    };

    const handleShareOnSocialMedia = async () => {
        if (blogContent?.length > 0) {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ mobileNumber, blogContent }),
                });
                if (response.ok) {
                    // Handle successful sharing on social media
                    alert('Shared on social media!');
                } else {
                    // Handle error while sharing on social media
                    console.error('Error while sharing on social media');
                }
            } catch (error) {
                // Handle error while sharing on social media
                console.error('Error while sharing on social media');
            }
        }
    }

    return (
        <div>
            <h2>Write Blog Post</h2>
            <textarea value={blogContent} onChange={handleBlogContentChange} />
            <button onClick={handleShareOnSocialMedia}>Share on Social Media</button>
        </div>
    );
};

export default BlogPost;
