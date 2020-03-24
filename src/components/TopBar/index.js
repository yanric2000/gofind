import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { ContainerNavigation } from './styles';
import DesktopTopBar from '../DesktopTopBar';
import MobileTopBar from '../MobileTopBar';


export default class TopBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            navigationBackground: false,
            width: window.innerWidth
        }

        this.handleScroll = this.handleScroll.bind(this);
    }

    updateDimensions = () => {
        this.setState({ width: window.innerWidth });
    };

    componentDidMount () {
        window.addEventListener('resize', this.updateDimensions);
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount () {
        window.removeEventListener('resize', this.updateDimensions);
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        if(window.pageYOffset > 250) {
            this.setState({navigationBackground: true});
        }else {
            this.setState({navigationBackground: false});
        }
    }

    render() {
        const TopBar = this.state.width > 568 ? DesktopTopBar : MobileTopBar;
        
        return (
            <ContainerNavigation className={this.state.navigationBackground ? 'active' : ''}>
                <BrowserRouter>
                    <TopBar />
                </BrowserRouter>
            </ContainerNavigation>
        )
    }
}
