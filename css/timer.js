import React, { useEffect, useState } from 'react';
import './css/style.css';

function Timer() {
    const [timeLeft, setTimeLeft] = useState(120);

    useEffect(() => {
        if(timeLeft > 0) {
            const timerId = setInterval(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);

            return () => clearInterval(timerId);
        }
    }, [timeLeft]);

    return (
        <div id="timer">{timeLeft > 0 ? `${timeLeft} seconds remaining` : 'Finished'}</div>
    );
}

export default Timer;