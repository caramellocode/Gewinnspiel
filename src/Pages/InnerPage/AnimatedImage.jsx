import React, { useEffect, useRef, useState } from 'react';
import './AnimatedImage.css';

const AnimatedImage = () => {
    const imageRef = useRef(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [windowWidth]);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            if (windowWidth >= 800) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                    } else {
                        entry.target.classList.remove('in-view');
                    }
                });
            } else {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view2');
                    } else {
                        entry.target.classList.remove('in-view2');
                    }
                });
            }
        }, {
            threshold: 0.5 // Ändern Sie dies nach Bedarf, um den Zeitpunkt der Animation anzupassen
        });

        const img = imageRef.current;
        if (img) {
            observer.observe(img);
        }

        return () => {
            if (img) {
                observer.unobserve(img);
            }
        };
    }, [windowWidth]);

    return <img ref={imageRef} src="/images/home-1/whiskey2-home-pic3.webp" alt="" className="animated-image w-[250px] md:w-[500px]" />
};

export default AnimatedImage;