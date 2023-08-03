import {useState} from "react";
import classes from './AboutPage.module.scss';


const AboutPage = () => {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
    }

    return (
        <div className={classes.btm}>
            <h1>{count}</h1>
            <button onClick={increment}>increment</button>
        </div>
    );
};

export default AboutPage;
