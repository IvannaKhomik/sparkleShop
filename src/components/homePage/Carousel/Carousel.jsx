import { CCarousel, CCarouselItem, CImage } from '@coreui/react';
import slide1 from './../../../images/carousel/slide1.jpg';
import slide2 from './../../../images/carousel/slide2.jpg';
import slide3 from './../../../images/carousel/slide3.jpg';
import '@coreui/coreui/dist/css/coreui.min.css';
import { CaptionDesc, Quotes, SliderCaption } from './Carousel.styled';

export const Carousel = () => {
  return (
    <CCarousel controls indicators transition="crossfade" style={{ height: '620px' }}>
      <CCarouselItem>
        <CImage className="d-block" src={slide1} alt="girl into the garden" />
        <SliderCaption className="d-none d-md-block">
          <CaptionDesc>
            <Quotes>&#8220;</Quotes>
            Одяг Sparkle - це ніжний дотик сучасності. Стильні та зручні комлекти з якісної тканини,
            створені з любов'ю та натхненням.
          </CaptionDesc>
        </SliderCaption>
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block" src={slide2} alt="smiling girl" />
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block" src={slide3} alt="girls" />
      </CCarouselItem>
    </CCarousel>
  );
};
