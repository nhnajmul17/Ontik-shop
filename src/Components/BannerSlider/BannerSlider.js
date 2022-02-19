import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../Images/h4-slide3-img.png'
import img2 from '../../Images/slider2.jpeg'
import img3 from '../../Images/h5-slide3-img.jpg'

const BannerSlider = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img data-aos="zoom-in-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500"
                        style={{ height: '500px' }}
                        className="d-block  w-100"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        <h3 className='text-secondary fw-bold '>Think Different</h3>
                        <p className='text-secondary mb-5 pb-5 fw-bold'>Teck Shop is a unique and captivating theme designed specially for all type shop and online stores</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: '500px' }}
                        className="d-block w-100 "
                        src={img2}
                        alt="Second slide"
                    />

                    <Carousel.Caption data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        <h3 className='text-white fw-bold'>Premium Comfort</h3>
                        <p className='text-white mb-5 pb-5 fw-bold'>One-Click import feature lets you import the complete Teck demo content with a single mouse click .</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: '500px' }}
                        className="d-block w-100 "
                        src={img3}
                        alt="Third slide"
                    />

                    <Carousel.Caption data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        <h3 className='text-secondary fw-bold'>Contemporary Design</h3>
                        <p className='text-secondary mb-5 pb-5 fw-bold'>A large set of beautiful and fully flexible homepage layouts lets you create your website quickly & easily</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default BannerSlider;