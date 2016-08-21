/**
 * 聊天框最外边组件
 * @authors gaomysion (gaomysion@163.com)
 * @date    2016-08-20 18:13:18
 */


"use strict";
import React from 'react';
import $ from 'jquery';
import CommentList from './CommentList.jsx';
import CommentForm from './CommentForm.jsx';
require('./css/main.css');


export default class CommentBox extends React.Component {
    constructor(props){
        super(props);
        this.state = {data:[]};
        this.getComments();
        // setInterval(() =>this.getComments(),5000);


    }
    handleCommentSubmit(comment){
        console.log(comment);
        let comments = this.state.data,
            newComments = comments.concat(comment);
        this.setState({data:newComments});
    };

  getComments(){
      console.log(this.props.url);
      $.ajax({
          url:this.props.url,
          dataType:'json',
          cache:false,
          success:comments =>{
              this.setState({data:comments});
          },
          error:(xhr,status,error)=>{
              console.log(error);
          }
      });
  }
  render() {
    return (
      <div className = "ui comments">
      	<h1>评论框</h1>
      	<div className = "ui divider">
      	<CommentList data={this.state.data}/>
      	<CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)}/>
      	</div>
      </div>
    );
  }
}
