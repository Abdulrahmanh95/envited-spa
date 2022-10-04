import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

interface TypeEffectOptions {
    startDelay: number;
    typeSpeed: number;
    backSpeed: number;
    backDelay: number
}

export function useTypeEffect(strings: string[], options: TypeEffectOptions = { startDelay: 300, typeSpeed: 50, backDelay: 2000, backSpeed: 50 }) {
    const typeRef = useRef<HTMLSpanElement | null>(null);

    useEffect(() => {
        if (typeRef.current == null) {
            return;
        }
        const typed = new Typed(typeRef.current, {
            strings,
            ...options,
            smartBackspace: true
        });

        return () => typed.destroy();
    }, [typeRef]);

    return {
        typeRef
    };
}
