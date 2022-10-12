import css from "./header.module.css"
export const Header = () => {
    const items = [
        {name:"Products"},
        {name:"Services"},
        {name:"Contact"},
        {name:"Log in"},
        {name:"Get Access"},
    ]
    return(
        <div className={css.container}>
            <div className={css.topContainer}>
                <p className={css.logoText}>team.</p>
            </div>
            <div className={css.texts}>
                {items.map((element,index) => {
                    return(
                        <li href="#" >{element.name}</li>
                    )
                })}
            </div>
        </div>
    )
}