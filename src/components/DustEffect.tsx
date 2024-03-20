'use client';
import React from 'react';

const getRandom = (min: number, max: number) =>
{
    return Math.round(Math.random() * (max - min)) + min;
};

const DustEffect = () => 
{
    //ref
    const canvasRef = React.useRef<HTMLCanvasElement | null>(null);

    class CanvasEvent 
    {
        x!: number;
        y!: number;
        dx!: number;
        dy!: number;
        size!: number;
        alpha!: number;
        dalpha!: number;
        canvas: HTMLCanvasElement;
        ctx: CanvasRenderingContext2D | null;
        constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D | null)
        {
            this.canvas = canvas;
            this.ctx = ctx;
            this.reset();
        }
        reset()
        {
            const angle = Math.random() * Math.PI * 2; //0~360도
            const speed = getRandom(0.2, 0.8);
            //init
            this.ctx?.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.x = getRandom(0, this.canvas.width);
            this.y = getRandom(0, this.canvas.height);
            this.alpha = getRandom(0, 1);
            this.dx = Math.cos(angle) * speed;
            this.dy = Math.sin(angle) * speed;
            this.dalpha = 0.1;
            this.size = getRandom(0.8, 1);
        }
        draw()
        {
            if(this.ctx)
            {
                this.ctx.beginPath();
                this.ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
                this.ctx.fillStyle = `rgba(255,255,255,${this.alpha})`;
                this.ctx.fill();
                this.ctx.closePath();
            }
        }
        update()
        {
            this.x += this.dx;
            this.y += this.dy;

            if (this.alpha < 1)
            {
                this.alpha += this.dalpha;
            }

            if (this.x <= 0 || this.x >= this.canvas.width || this.y <= 0 || this.y >= this.canvas.height) 
            {
                this.reset();
            }
        }
    }

    React.useLayoutEffect(() => 
    {
        const canvas = canvasRef.current;
        const particles: CanvasEvent[] = [];
        if (canvas) 
        {
            const ctx = canvas.getContext('2d');
            const rect = canvas.getBoundingClientRect();
            canvas.width = rect.width;
            canvas.height = rect.height;

            for (let i = 0; i < 100; i++) 
            {
                particles.push(new CanvasEvent(canvas, ctx));
            }

            const animate = () => 
            {
                if (ctx) 
                {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    particles.forEach((particle) => 
                    {
                        particle.update();
                        particle.draw();
                    });
                    requestAnimationFrame(animate);
                }
            };

            animate();
        }
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className='h-full w-full'
        />
    );
};

export default DustEffect;