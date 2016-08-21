/**
 * list
 * @authors gaomysion (gaomysion@163.com)
 * @date    2016-08-20 18:13:18
 */


"use strict";
import React from 'react';
import Comment from './Comment.jsx';

export default class CommentList extends React.Component {
  render() {
      let commentNodes = this.props.data.map(comment=>{
         return(
             <Comment author={comment.author}date={comment.date}>{comment.text}</Comment>
         );
      });
    return (
    	<div>
            {commentNodes}
        </div>
    );
  }
}
