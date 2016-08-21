'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//路由


require('./main.css');

/**
 * 主组件
 */

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            console.log('app mount');
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps() {
            console.log('app receive props');
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            console.log('app did update');
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'ui secondary pointing menu' },
                    _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/', className: 'item' },
                        '首页'
                    ),
                    _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/tv', className: 'item', query: { orderBy: 'date' } },
                        '电视'
                    )
                ),
                this.props.children
            );
        }
    }]);

    return App;
}(_react2.default.Component);
/**
 * 电视组件
 */


var Tv = function (_React$Component2) {
    _inherits(Tv, _React$Component2);

    function Tv(props) {
        _classCallCheck(this, Tv);

        var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(Tv).call(this, props));

        var query = _this2.props.location.query;

        console.log(_this2.props);
        return _this2;
    }

    _createClass(Tv, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            console.log('tv did mount');
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                this.props.children
            );
        }
    }]);

    return Tv;
}(_react2.default.Component);

var Show = function (_React$Component3) {
    _inherits(Show, _React$Component3);

    function Show(props) {
        _classCallCheck(this, Show);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Show).call(this, props));
    }

    _createClass(Show, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'h3',
                null,
                '展示节目',
                this.props.params
            );
        }
    }]);

    return Show;
}(_react2.default.Component);

var Home = function (_React$Component4) {
    _inherits(Home, _React$Component4);

    function Home() {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Home).apply(this, arguments));
    }

    _createClass(Home, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            console.log('home mount');
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log('home will unmount');
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'ui info message' },
                '首页默认内容组件'
            );
        }
    }]);

    return Home;
}(_react2.default.Component);

var ShowIndex = function (_React$Component5) {
    _inherits(ShowIndex, _React$Component5);

    function ShowIndex() {
        _classCallCheck(this, ShowIndex);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ShowIndex).apply(this, arguments));
    }

    _createClass(ShowIndex, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'ui info message' },
                'tv默认显示组件'
            );
        }
    }]);

    return ShowIndex;
}(_react2.default.Component);

function handleEnter() {
    console.log('进入');
}
function handleLeave() {
    console.log('离开');
}
/**
 * 通过路由进行组件切换
 * 最外层更目录
 * 下来点击tv
 * 再点击shows
 */
_reactDom2.default.render(_react2.default.createElement(
    _reactRouter.Router,
    null,
    _react2.default.createElement(
        _reactRouter.Route,
        { path: '/', component: App },
        _react2.default.createElement(_reactRouter.IndexRoute, { component: Home }),
        _react2.default.createElement(
            _reactRouter.Route,
            { path: 'tv', component: Tv },
            _react2.default.createElement(_reactRouter.IndexRoute, { component: ShowIndex }),
            _react2.default.createElement(_reactRouter.Route, { paht: '/shows/:id', component: Show,
                onEnter: handleEnter,
                onLeave: handleLeave

            }),
            _react2.default.createElement(_reactRouter.Redirect, { from: 'shows/:id', to: '/shows/:id' }),
            '}'
        )
    )
), document.body);

//# sourceMappingURL=main.js.map