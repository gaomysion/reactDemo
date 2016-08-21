/**
 * form
 * @authors gaomysion (gaomysion@163.com)
 * @date    2016-08-20 18:13:18
 */


"use strict";
import React from 'react';

export default class CommentForm extends React.Component {
	handleSubmit(event){
		event.preventDefault();
		console.log('提交表单、、、');

		let author = this.refs.author.value,
			text = this.refs.text.value;
		console.log(author,text);

		this.props.onCommentSubmit({author,text,date:'刚刚'});
	}
  render() {
    return (
    	<form className = "ui reply form" onSubmit={this.handleSubmit.bind(this)}>
    		<div className = "field">
    			<input type="text" placeholder="姓名" ref="author"/>
    		</div>
    		<div className = "field">
    		<textarea  placeholder="评论内容" ref="text"></textarea>
    		</div>
    		<div className = "field">
    			<button type="submit" placeholder="ui blue button">
    			添加评论
    			</button>
    		</div>
    	</form>
    );
  }
}
