import { useState } from "react";

const User = () => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(2);

    return (
        <div className="user-card">
            <h1>Count: {count}</h1>
            <h1>Count2: {count2}</h1>
            <h2>Name: SaiKiran Reddy Kotha</h2>
            <h3>Location: Warangal</h3>
            <h4>Contact: saikiranreddykotha260@gmail.com</h4>
        </div>
    );
};

export default User;