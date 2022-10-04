import { ReactComponent as BirthdayCard } from '@/assets/images/birthday-card.svg';
import Cta from './Cta';
import { useTypeEffect } from '../hooks/useTypeEffect';
import { Link } from "react-router-dom";

export default function HeroSection() {
    const { typeRef: platformName } = useTypeEffect([
        'Whatsapp',
        'Snapchat',
        'Instagram',
        'Messenger',
        'Discord',
        'Twitter'
    ]);

    return (
        <section className="hero-section h-full bg-purple-3">
            <div className="hero-section__container
            container flex flex-col h-full items-center xl:items-stretch
            py-8 md:py-16 px-4 mx-auto lg:flex-row md:gap-x-8">
                <div className="hero-section__img-box flex items-center justify-center order-1 lg:order-0 relative w-1/3 lg:w-1/2 lg:mx-12 my-10 lg:my-0 drop-shadow-2xl ">
                    <BirthdayCard className="h-full lg:h-auto" />
                </div>
                <div className="hero-section__content-box order-0 lg:order-1 lg:self-center lg:mr-24 text-center lg:text-right">
                    <div className="hero-section__content-text lg:mb-12">
                        <h1 className="hero-section__heading min-h-[90px] lg:min-h-[120px] mb-5 lg:mb-8 text-3xl md:text-4xl lg:text-5xl xl:text-[64px] font-bold text-purple-dark">
                            <span className="block">Imagine if</span>
                            <span className="inline text-pink-envited">
                            <span
                              ref={platformName}
                              className="hero-section__platform-name text-transparent
                              bg-clip-text bg-gradient-to-r from-purple-envited to-pink-envited"></span>
                        </span>
                            <span className="block"> had events.</span>
                        </h1>
                        <p className="hero-section__description font-light text-neutral-1 md:text-xl lg:text-2xl">
                            Easily host and share events with your friends<br className="lg:hidden" />
                            across any social media.
                        </p>
                    </div>
                    <Link className="hero-section__event-link hidden lg:inline-block" to="/create"><Cta>🎉 Create my event</Cta></Link>
                </div>
                <Link className="hero-section__event-link order-3 lg:hidden" to="/create"><Cta>🎉 Create my event</Cta></Link></div>
        </section>
    )
}
