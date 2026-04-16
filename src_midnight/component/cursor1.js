import React from 'react';
import  { useState, useEffect, useRef } from 'react';

export default function Cursor() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const circleRef = useRef(null);


    useEffect(() => {
        const handleMouseMove = (e) => {
          setMousePos({
            x: e.clientX,
            y: e.clientY
          });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
          };
        }, []);

        useEffect(() => {
            const circleElement = circleRef.current;
        
            let circleX = 0, circleY = 0;
            const speed = 0.1;
        
            const animateCircle = () => {
              // Gradually move the circle towards the mouse position
              circleX += (mousePos.x - circleX) * speed;
              circleY += (mousePos.y - circleY) * speed;
        
              if (circleElement) {
                circleElement.style.left = `${circleX}px`;
                circleElement.style.top = `${circleY}px`;
              }
        
              requestAnimationFrame(animateCircle); // Continuously update
            };
        
            animateCircle();
          }, [mousePos]);
    

  return (
    <div>
      <div  ref={circleRef} class="circle"></div>

    </div>
  )
}
