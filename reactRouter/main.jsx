'use strict';
import React from 'react';
import ReactDom from 'react-dom';
//路由
import {Router,Route,Link,IndexRoute,Redirect} from 'react-router';
require('./main.css');

/**
 * 主组件
 */
class App extends React.Component{
    componentDidMount(){
        console.log('app mount');
    }
    componentWillReceiveProps(){
        console.log('app receive props');
    }
    componentDidUpdate(){
        console.log('app did update');
    }
    render(){
        return (
            <div>
                <div className="ui secondary pointing menu">
                    {/*添加两个链接*/}
                    <Link to="/" className = "item">首页</Link>
                    <Link to="/tv" className = "item" query={{orderBy:'date'}}>电视</Link>
                </div>
                {this.props.children }
            </div>


        );
    }
}
/**
 * 电视组件
 */
class Tv extends React.Component{
    constructor(props){
        super(props);
        let {query} = this.props.location;
        console.log(this.props);
    }
    componentDidMount(){
        console.log('tv did mount');
    }
    render(){
        return (
            <div>
                {/*<div className="ui info message">
                    电视节目列表
                </div>*/}
                {this.props.children }
            </div>



    );
    }
}

class Show extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <h3>展示节目{this.props.params}</h3>



        );
    }
}

class Home extends React.Component{
    componentDidMount(){
        console.log('home mount');
    }
    componentWillUnmount(){
        console.log('home will unmount');
    }
    
    render(){
        return (
            <div className = "ui info message">首页默认内容组件</div>


        );
    }
}
class ShowIndex extends React.Component{
    
    render(){
        return (
            <div className = "ui info message">tv默认显示组件</div>


        );
    }
}
function handleEnter(){
    console.log('进入');
}
function handleLeave(){
    console.log('离开');
}
/**
 * 通过路由进行组件切换
 * 最外层更目录
 * 下来点击tv
 * 再点击shows
 */
ReactDom.render((
    <Router>

        <Route path="/" component = {App}>
            <IndexRoute component={Home}/>
            <Route path="tv" component = {Tv}>
                <IndexRoute component = {ShowIndex}/>
                <Route paht="/shows/:id" component = {Show}
                    onEnter={handleEnter}
                    onLeave={handleLeave}

                />
                <Redirect from="shows/:id" to="/shows/:id"/>
            }
            </Route>
        </Route>
    </Router>
),document.body);