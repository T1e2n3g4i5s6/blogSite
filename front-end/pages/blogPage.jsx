import React from "react";
import css from "../styles/blogPage.module.css"
const BlogPage = () => {
    return(
        <div className={css.container}>
            <div className={css.topContainer}>
                <p className={css.title}>Blog posts</p>
                <p className={css.titleTwo}>Our latest updates and blogs about managing your team</p>
            </div>
        </div>
    )
}
export default BlogPage;