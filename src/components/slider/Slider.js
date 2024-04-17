import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import IconButton from '../iconButton/IconButton';
import "./Slider.css"

const Slider = ({ data }) => {
    const [active, setActive] = useState(0)

    const handleKeyDown = (e) => {
        if (e.key === "ArrowLeft") {
            setActive(active => {
                if (active > 0) {
                    return active - 1
                }
                return data.length - 1
            })
        }

        if (e.key === "ArrowRight") {
            setActive(active => {
                if (active < data.length - 1) {
                    return active + 1
                }
                return 0
            })
        }
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setActive(active => {
                if (active < data.length - 1) {
                    return active + 1
                }
                return 0
            })
        }, 4000)
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            clearInterval(intervalId)
        };
    }, []);

    const prev = () => {
        setActive(active => {
            if (active > 0) {
                return active - 1
            }
            return data.length - 1
        })
    }

    const next = () => {
        setActive(active => {
            if (active < data.length - 1) {
                return active + 1
            }
            return 0
        })
    }



    return (
        <div className='slider-wrap'>
            <div className="slider__actions">
                <IconButton direction="left" onClick={prev} disabled={active === 0} />
                <IconButton direction="right" onClick={next} disabled={active === data.length - 1} />
            </div>
            <div className="slider">
                {data.map((slide, index) => (
                        <div
                            className={`slide${active === index ? " active" : ""}`}
                        >
                             <Link key={slide.label} to={`/${ slide.tool }`} className="slide__link">
                            {/* <div className='slide__info'>
                            <div className='slide__label'>{slide.label}</div>
                            <div className='slide__title'>{slide.title}</div>
                        </div> */}
                            <img src={slide.img} alt={`Slide ${index}`} />
                            </Link>
                        </div>
                ))}
            </div>
        </div>
    );
};

export default Slider;