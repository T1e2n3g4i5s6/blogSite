import React from "react";
import Post from "../components/card/card";
import css from "../styles/blogPage.module.css"
import {useRouter}
const BlogPage = () => {
    return(
        <div className={css.container}>
            <div className={css.topContainer}>
                <p className={css.title}>Blog posts</p>
                <p className={css.titleTwo}>Our latest updates and blogs about managing your team</p>
            </div>
            <div className={css.postContainer}>
                <Post/>
            </div>
        </div>
    )
}
export default BlogPage;