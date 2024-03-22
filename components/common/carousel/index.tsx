import styles from './styles.module.scss';
import Image from 'next/image';
import Heart from '/public/assets/btn_heart.png';
import React from 'react';
import { Carousel, CarouselItem, CarouselControl, Button } from 'reactstrap';
import Link from 'next/link';

interface CarouselItemProps {
  src: string;
  altText: string;
  background: string;
  backgroundColor: string;
  title: React.ReactNode;
  desc: string;
  width: number;
  height: number;
}

interface BootstrapCarouselProps {
  items: CarouselItemProps[];
}

const BootstrapCarousel: React.FC<BootstrapCarouselProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const slides = items.map((item, index) => (
    <CarouselItem onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={index}>
      <div className={styles.container}>
        <Image src={item.src} alt={item.altText} width={item.width} height={item.height} className={styles.image} />
        <div className={styles.container_left}>
          <div className={styles.overlaw}></div>
          <Image src={item.background} alt={item.altText} width={1980} height={1220} className={styles.background} />
        </div>
        <div className={styles.container_right} style={{ backgroundColor: item.backgroundColor }}>
          <div className={styles.container_info}>
            <p className={styles.title}>{item.title}</p>
            <p className={styles.desc}>{item.desc}</p>
            <Link
              href={
                'https://www.ifood.com.br/delivery/porto-alegre-rs/wonders-cup-cafeteria-e-acaiteria-cristal/37bf0085-15ab-4830-8fbe-6dd1c436d4b1'
              }
              target="_blank"
            >
              <div className={styles.container_btn}>
                <Button className={styles.btn}>Peça agora</Button>
                <Image
                  src={Heart}
                  alt="Coração"
                  width={80}
                  height={80}
                  style={{ maxWidth: '40px', height: 'auto' }}
                  className={styles.heart}
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </CarouselItem>
  ));

  return (
    <div className={styles.container_carousel}>
      <Carousel activeIndex={activeIndex} next={next} previous={previous} fade={true}>
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} className={styles.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} className={styles.next} />
      </Carousel>
    </div>
  );
};

export default BootstrapCarousel;
