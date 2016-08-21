/**
 * 聊天框最外边组件
 * @authors gaomysion (gaomysion@163.com)
 * @date    2016-08-20 18:13:18
 */

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _CommentList = require('./CommentList.jsx');

var _CommentList2 = _interopRequireDefault(_CommentList);

var _CommentForm = require('./CommentForm.jsx');

var _CommentForm2 = _interopRequireDefault(_CommentForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('./css/main.css');

var CommentBox = function (_React$Component) {
    _inherits(CommentBox, _React$Component);

    function CommentBox(props) {
        _classCallCheck(this, CommentBox);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CommentBox).call(this, props));

        _this.state = { data: [] };
        _this.getComments();
        // setInterval(() =>this.getComments(),5000);


        return _this;
    }

    _createClass(CommentBox, [{
        key: 'handleCommentSubmit',
        value: function handleCommentSubmit(comment) {
            console.log(comment);
            var comments = this.state.data,
                newComments = comments.concat(comment);
            this.setState({ data: newComments });
        }
    }, {
        key: 'getComments',
        value: function getComments() {
            var _this2 = this;

            console.log(this.props.url);
            _jquery2.default.ajax({
                url: this.props.url,
                dataType: 'json',
                cache: false,
                success: function success(comments) {
                    _this2.setState({ data: comments });
                },
                error: function error(xhr, status, _error) {
                    console.log(_error);
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'ui comments' },
                _react2.default.createElement(
                    'h1',
                    null,
                    '评论框'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'ui divider' },
                    _react2.default.createElement(_CommentList2.default, { data: this.state.data }),
                    _react2.default.createElement(_CommentForm2.default, { onCommentSubmit: this.handleCommentSubmit.bind(this) })
                )
            );
        }
    }]);

    return CommentBox;
}(_react2.default.Component);

exports.default = CommentBox;

//# sourceMappingURL=CommentBox.js.map