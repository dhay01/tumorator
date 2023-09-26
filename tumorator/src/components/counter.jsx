import React, { useState, useEffect } from 'react';

function AnimatedCounter() {
    const [percentage, setPercentage] = useState(0);

    const animateCounter = () => {
        let start = 0;
        const end = 36;
        const duration = 2000; // Animation duration in milliseconds
        const increment = (end - start) / (duration / 16); // 16ms is close to 60fps

        const updateCounter = () => {
            if (start < end) {
                setPercentage(start);
                start += increment;
                requestAnimationFrame(updateCounter);
            } else {
                setPercentage(end);
            }
        };

        updateCounter();
    };

    useEffect(() => {
        animateCounter();
    }, []);

    return (
        <div>
            <div className="counter">{Math.round(percentage)}<span className="small-text">%</span></div>
        </div>
    );
}

export default AnimatedCounter;
