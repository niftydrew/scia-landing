'use client';

import { useEffect, useRef } from 'react';

export const AnimatedLines = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to match window size
    const resizeCanvas = () => {
      const container = canvas.parentElement;
      if (!container) return;
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Line properties
    const lines: { x: number; y: number; speed: number; length: number }[] = [];
    const numberOfLines = 50;

    // Initialize lines
    for (let i = 0; i < numberOfLines; i++) {
      lines.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: 1 + Math.random() * 2,
        length: 10 + Math.random() * 20,
      });
    }

    // Animation loop
    const animate = () => {
      // Clear canvas with slight opacity for trail effect
      ctx.fillStyle = 'rgba(4, 1, 17, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw and update lines
      ctx.strokeStyle = 'rgba(99, 102, 241, 1)';
      ctx.lineWidth = 1;

      lines.forEach((line) => {
        // Draw line
        ctx.beginPath();
        ctx.moveTo(line.x, line.y);
        ctx.lineTo(line.x, line.y + line.length);
        ctx.stroke();

        // Update position
        line.y += line.speed;

        // Reset position when line goes off screen
        if (line.y > canvas.height) {
          line.y = -line.length;
          line.x = Math.random() * canvas.width;
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className='absolute inset-0 w-full h-full -z-20 opacity-30'
      style={{ background: 'transparent' }}
    />
  );
};
