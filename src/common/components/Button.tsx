import { forwardRef } from 'react';

const Button = forwardRef<HTMLButtonElement, any>(({ children, className, ...props }, ref) => (<button
    ref={ref}
    className={
        `relative px-6
        text-white font-bold
        rounded-xl shadow-lg
        bg-[linear-gradient(90deg,#501FC1,#C245D3,#F0567A)] bg-[length:300%]
        hover:opacity-75 
        focus:outline-none focus:ring focus:ring-violet-300 ${className}`
    }
    {...props}>
    {children}
</button>));

Button.displayName = 'Button';

export default Button;
