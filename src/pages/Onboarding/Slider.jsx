import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators } from 'reactstrap';
import './Slider.css';
// Carousel images 
import img1 from '../../assets/images/asfasfasf.png'
import img2 from '../../assets/images/dummy_1126x911_000000_8696d8.png'
import img3 from '../../assets/images/dummy_1126x911_000000_dd49bb.png'
import img4 from '../../assets/images/dummy_1126x911_ffffff_6870cc.png'
const items = [
    {
        src: img1,
        altText: 'Slide 1',
        caption: 'Slide 1',
    },
    {
        src: img2,
        altText: 'Slide 2',
        caption: 'Slide 2'
    },
    {
        src: img3,
        altText: 'Slide 3',
        caption: 'Slide 3'
    },
    {
        src: img4,
        altText: 'Slide 4',
        caption: 'Slide 4'
    }
];

const Slidewithindicator = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    let animating = false;

    const onExiting = () => {
        animating = true;
    }

    const onExited = () => {
        animating = false;
    }

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => (
        <CarouselItem
            onExiting={onExiting}
            onExited={onExited}
            key={item.src}
        >
            <img src={item.src} className="d-block img-fluid" alt={item.altText} />
        </CarouselItem>
    ));

    return (
        <>
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
                {/* <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} /> */}
            </Carousel>
        </>
    );
}

export default Slidewithindicator;
