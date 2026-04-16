import React, { useEffect, useRef } from 'react';
 // Your CSS file

const CircleFollowCursor = () => {
  const circleRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const circle = circleRef.current;
      if (circle) {
        circle.style.left = `${e.clientX}px`;
        circle.style.top = `${e.clientY}px`;
      }
    };

    // Add event listener for mouse movement
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div ref={circleRef} className="circle" />
    </div>
  );
};

export default CircleFollowCursor;
