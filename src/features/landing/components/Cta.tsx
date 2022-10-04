import { forwardRef } from 'react';

const Cta = forwardRef<HTMLButtonElement, any>(({ children }, ref) => (<button
    ref={ref}
    className={
        `relative px-12 py-3 md:px-20 md:py-4
        text-white font-bold md:text-lg
        rounded-[10px] shadow-lg
        bg-gradient-to-r from-purple-envited to-pink-envited
        bg-[length:100%]
        hover:animate-moving-gradient
        hover:bg-[length:200%]
        focus:outline-none focus:ring focus:ring-violet-300`
    }>
    {children}
</button>));

Cta.displayName = 'Cta';

export default Cta;
