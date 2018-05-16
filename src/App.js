import React, {Component} from 'react';
import Proptypes from 'prop-types';
import logo from './logo.svg';
import './App.css';
import {Button, NavBar, Icon} from 'antd-mobile';
import {hot} from 'react-hot-loader';
import {wire,register} from './di.jsx';
import {Span} from './styled';

import('./a.js').then(a=>{
    // console.log(a);
})

register('my-title','react in patterns');


@wire(['my-title'],(title)=>({title}))
class Title extends React.Component {
    static state = {
        a: 1
    }
    static defaultProps = {
        text: 'Text'
    }
    static propTypes = {
        text: Proptypes.string
    }
    render() {
        return (<Span>{this.props.text}--{this.props.title.join()}</Span>)
    }
}

function Con({text, children}) {
    return (<React.Fragment>
        {text}<br/>{children}
    </React.Fragment>)
}


@hot(module)
class App extends Component {
    constructor(){
        super();
        this.state={
            clicked:0,
        }
        // this._handleButtonClick=this._handleButtonClick.bind(this);
    }
    // _handleButtonClick(event){
    //     this.setState(state=>{
    //         return{clicked:++state.clicked};
    //     });
    //     event.preventDefault();
    // }
    _handleButtonClick=()=>{
        this.setState(state=>({clicked:++state.clicked}));
    }
    render() {
        return (<div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
                <Button onClick={this._handleButtonClick}>{this.state.clicked}</Button>
                To get started, edit
                <code>src/App.js</code>
                and save to reload.
            </p>
            <p><Title text="Hello Title"/></p>
            <NavBar mode="light" icon={<Icon type = "left" />} onLeftClick={() => console.log('onLeftClick')} rightContent={[
                    <Icon key="0" type="search" style={{
                            marginRight: '16px'
                        }}/>,
                    <Icon key="1" type="ellipsis"/>
                ]}>NavBar</NavBar>
            <p>
                <Con text="Con.props.text">Con.props.children</Con>
            </p>

        </div>);
    }
}

export default App;
