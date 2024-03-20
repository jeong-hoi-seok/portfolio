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
        canvas: HTMLCanvasElement;
        ctx: CanvasRenderingContext2D | null;
        constructor(canvas: HTMLCanvasElement)
        {
            this.canvas = canvas;
            this.ctx = canvas.getContext('2d');
            this.reset();
        }
        reset()
        {
            const angle = Math.random() * Math.PI * 2; //0~360도
            const speed = 2;
            //init
            this.x = getRandom(0, this.canvas.width);
            this.y = getRandom(0, this.canvas.height);
            this.dx = Math.cos(angle) * speed;
            this.dy = Math.sin(angle) * speed;
            this.size = getRandom(1, 2);
        }
        draw()
        {
            if(this.ctx)
            {
                // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.ctx.beginPath();
                this.ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
                this.ctx.fillStyle = 'rgba(255,255,255)';
                this.ctx.fill();
                this.ctx.stroke();
                this.ctx.closePath();
            }
        }
        update()
        {
            this.x += this.dx;
            this.y += this.dy;

            if (this.x <= 0 || this.x >= this.canvas.width || this.y <= 0 || this.y >= this.canvas.height) 
            {
                this.dx = 0;
                this.dy = 0;
            }
        }
    }

    React.useLayoutEffect(() => 
    {
        const canvas = canvasRef.current;
        if (canvas) 
        {
            const rect = canvas.getBoundingClientRect();
            canvas.width = rect.width;
            canvas.height = rect.height;

            const particle = [];

            for (let i = 0; i < 100; i++) 
            {
                particle.push(new CanvasEvent(canvas));
            }

            console.log(particle);

            for (let i = 0; i < particle.length; i++) 
            {
                particle[i].draw();
                
            }
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