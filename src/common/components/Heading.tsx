import { forwardRef } from 'react';

const Heading = forwardRef<HTMLHeadingElement, any>(({ className, ...props }, ref) => (
  <h1 ref={ref}
      className={'font-semibold text-left mb-9 text-purple-dark text-md md:text-5xl ' + className}
      {...props}>
    {props.children}
  </h1>
));

Heading.displayName = 'Heading';

export default Heading;
