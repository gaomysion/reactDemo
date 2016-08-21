/**
 * main
 * @authors gaomysion (gaomysion@163.com)
 * @date    2016-08-20 16:44:06
 */


"use strict";
import CommentBox from './commentBox.jsx';
import React from 'react';
import ReactDom from 'react-dom';
// var path = require("path");


ReactDom.render( <CommentBox url="comentSrc/commentBox/comments.json" /> , document.body);

