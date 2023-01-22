import {useRouter} from 'next/router';
import React from 'react';

const blogDetails = () => {
    const router = useRouter();
    const blogId = router.query.blogId;
    console.log(blogId);
    return (
        <div>
            <h2>This is blog details. {blogId}</h2>
        </div>
    );
};

export default blogDetails;