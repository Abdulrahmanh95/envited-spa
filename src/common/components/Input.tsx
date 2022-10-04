import { forwardRef } from 'react';

const Input = forwardRef<HTMLInputElement, any>(({ className, ...props }, ref) => (
  <input ref={ref}
         className={`bg-neutral-6 border border-purple-1 text-neutral-1 text-sm rounded-lg 
         focus:border-purple-envited focus:bg-purple-2 outline-0 block w-full p-2.5 text-lg ${className}`}
         {...props} />
));

Input.displayName = 'Input';

export default Input;
