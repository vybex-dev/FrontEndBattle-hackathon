'use client';

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(false);
  
  // Track mouse coordinates
  const mouse = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Check if device has touch capability, if so disable custom cursor
    if (window.matchMedia('(pointer: coarse)').matches) return;
    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      
      // Update dot immediately for zero latency
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    window.addEventListener('mousemove', onMouseMove);

    // Animation loop for the lagging ring
    let animationFrame: number;
    const render = () => {
      // Lerp for smooth trailing effect (native JS animation, no libraries!)
      ringPos.current.x += (mouse.current.x - ringPos.current.x) * 0.15;
      ringPos.current.y += (mouse.current.y - ringPos.current.y) * 0.15;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }
      animationFrame = requestAnimationFrame(render);
    };
    render();

    // Handle hover states (grow on click or hover)
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = target.closest('a') || 
                          target.closest('button') ||
                          target.closest('[role="button"]') ||
                          target.closest('input') ||
                          target.closest('.cursor-pointer') ||
                          target.closest('.group') ||
                          target.closest('[tabindex="0"]');
                          
      if (isClickable && ringRef.current && dotRef.current) {
        ringRef.current.style.width = '48px';
        ringRef.current.style.height = '48px';
        ringRef.current.style.backgroundColor = 'rgba(255, 200, 1, 0.1)';
        ringRef.current.style.borderColor = 'rgba(255, 200, 1, 0.8)';
        dotRef.current.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0) translate(-50%, -50%) scale(1.5)`;
      } else if (ringRef.current && dotRef.current) {
        ringRef.current.style.width = '32px';
        ringRef.current.style.height = '32px';
        ringRef.current.style.backgroundColor = 'transparent';
        ringRef.current.style.borderColor = 'rgba(217, 232, 226, 0.4)';
        dotRef.current.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0) translate(-50%, -50%) scale(1)`;
      }
    };

    window.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div 
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-mystic-mint/40 pointer-events-none z-[9999] transition-all duration-300 ease-out"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      <div 
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-forsythia rounded-full pointer-events-none z-[10000] mix-blend-screen shadow-[0_0_8px_#FFC801] transition-transform duration-100 ease-out"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
    </>
  );
}
