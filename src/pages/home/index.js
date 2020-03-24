import React, { Component } from 'react';
import ContainerFullScreen from '../../components/ContainerFullScreen';
import ContainerDefault from '../../components/ContainerDefault'
import { ContainerSlide, ContainerCards } from './styles';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Card from '../../components/Card';
import FirstImage from '../../assets/images/bg1.jpg';
import SecondImage from '../../assets/images/bg2.jpg';
import ThirdImage from '../../assets/images/bg3.jpg';
import PersonIcon from '@material-ui/icons/Person';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import BarChartIcon from '@material-ui/icons/BarChart';


export default class Home extends Component {
    render() {
        const settings = {
            showArrows: true,
            showStatus: false, 
            showIndicators: false,
            showThumbs: false,
            infiniteLoop: true,
            axis: 'horizontal',
            autoPlay: true,
            stopOnHover: true,
            interval: 6000,
            transitionTime: 400,
            swipeable: true,
            emulateTouch: true,
            dynamicHeight: true,
            centerMode: false,
        };
        return (
            <ContainerFullScreen>
                <ContainerDefault customStyle={{padding: 0, margin: 0, maxWidth: '100%'}}>
                    <ContainerSlide>
                        <div className="floating-container">
                            <div className="container-text">
                                <h1> Lorem ipsum </h1>
                                <p> Consectetur adipiscing elit. In a velit a <br/> mauris dapibus pretium. </p>
                            </div>
                        </div>
                        <Carousel {...settings}>
                            <div className="item">
                            <picture>
                                <source media="(max-width: 700px)" srcSet="https://images.wallpaperscraft.com/image/forest_fantasy_glow_164368_1280x1024.jpg" />
                                <img src={FirstImage} alt="Caroussel background"/>
                            </picture>
                            </div>
                            <div className="item">
                                <picture>
                                    <source media="(max-width: 700px)" srcSet="https://images.wallpaperscraft.com/image/astronaut_spacesuit_space_164333_1280x1024.jpg" />
                                    <img src={SecondImage} alt="Caroussel background"/>
                                </picture>
                            </div>
                            <div className="item">
                                <picture>
                                    <source media="(max-width: 700px)" srcSet="https://images.wallpaperscraft.com/image/room_distance_triangle_164306_1280x1024.jpg" />
                                    <img src={ThirdImage} alt="Caroussel background"/>
                                </picture>
                            </div>
                        </Carousel>
                    </ContainerSlide>
                    <ContainerCards>
                        <Card>
                            <div className="header">
                                <PersonIcon
                                    style={{ color: '#FFFFFF', height: '512px', width: '512px' }}
                                />
                            </div>
                            <div className="container-text">
                                <h3>Lorem Ipsum </h3>
                                <span> Vestibulum pellentesque consequat nibh, <br/> at vulputate nisl faucibus quis. </span>
                            </div>
                        </Card>
                        <Card>
                            <div className="header">
                                <SmartphoneIcon
                                    style={{ color: '#FFFFFF', height: '512px', width: '512px' }}
                                />
                            </div>
                            <div className="container-text">
                                <h3>Lorem Ipsum </h3>
                                <span> Vestibulum pellentesque consequat nibh, <br/> at vulputate nisl faucibus quis. </span>
                            </div>
                        </Card>
                        <Card>
                            <div className="header">
                                <QuestionAnswerIcon
                                    style={{ color: '#FFFFFF', height: '512px', width: '512px' }}
                                />
                            </div>
                            <div className="container-text">
                                <h3>Lorem Ipsum </h3>
                                <span> Vestibulum pellentesque consequat nibh, <br/> at vulputate nisl faucibus quis. </span>
                            </div>
                        </Card>
                        <Card>
                            <div className="header">
                                <BarChartIcon
                                    style={{ color: '#FFFFFF', height: '512px', width: '512px' }}
                                />
                            </div>
                            <div className="container-text">
                                <h3>Lorem Ipsum </h3>
                                <span> Vestibulum pellentesque consequat nibh, <br/> at vulputate nisl faucibus quis. </span>
                            </div>
                        </Card>
                    </ContainerCards>
                </ContainerDefault>
            </ContainerFullScreen>
        )
    }
}
