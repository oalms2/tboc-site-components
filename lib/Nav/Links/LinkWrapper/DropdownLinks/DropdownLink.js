"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(["", ""], ["", ""]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _codogoUtilityFunctions = require("codogo-utility-functions");

var _reactRouterDom = require("react-router-dom");

var _gatsbyLink = require("gatsby-link");

var _gatsbyLink2 = _interopRequireDefault(_gatsbyLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// --------------------------------------------------

var LinkStyles = [(0, _styledComponents.css)(["display:block;padding:", ";padding-left:2em;color:", ";padding:0.5em 1em;opacity:0.8;&:hover{color:", ";text-decoration:underline;}"], function (props) {
	return props.padding.xs;
}, function (props) {
	return props.color.xs;
}, function (props) {
	return props.color.xs;
}), (0, _styledComponents.css)(["align-items:center;color:black;display:flex;flex-direction:row;height:100%;letter-spacing:0.1em;padding:0.5em ", ";justify-content:left;", ";", ";&.active{color:black;padding-top:", ";border-bottom:", ";}&:hover{color:black;text-decoration:underline;padding-top:", ";text-decoration:", ";border-bottom:", ";}"], function (props) {
	return props.padding.other;
}, function (props) {
	return props.clear && "justify-content: center;";
}, function (props) {
	return props.underlineColor && "height: 100%";
}, function (props) {
	return props.underlineColor && "3px";
}, function (props) {
	return props.underlineColor && "3px solid " + props.underlineColor;
}, function (props) {
	return props.underlineColor && "3px";
}, function (props) {
	return !props.underlineColor && "underline";
}, function (props) {
	return props.underlineColor && "3px solid " + props.underlineColor;
})];

var StyledLink = _styledComponents2.default.a.withConfig({
	displayName: "DropdownLink__StyledLink"
})(["", ";", ";"], (0, _codogoUtilityFunctions.xs)(_templateObject, LinkStyles[0]), _codogoUtilityFunctions.bp.sm.min(_templateObject, LinkStyles[1]));

var GatsbyLink = StyledLink.withComponent(_gatsbyLink2.default);
var RouterLink = StyledLink.withComponent(_reactRouterDom.Link);
var RouterNavLink = StyledLink.withComponent(_reactRouterDom.NavLink);
var DivLink = StyledLink.withComponent("div");

var LinkOptions = {
	"a": StyledLink,
	"gatsby-link": GatsbyLink,
	"link": RouterLink,
	"nav-link": RouterNavLink,
	"div": DivLink
};

// --------------------------------------------------

var DropdownLink = function (_Component) {
	(0, _inherits3.default)(DropdownLink, _Component);

	function DropdownLink() {
		(0, _classCallCheck3.default)(this, DropdownLink);
		return (0, _possibleConstructorReturn3.default)(this, (DropdownLink.__proto__ || Object.getPrototypeOf(DropdownLink)).apply(this, arguments));
	}

	(0, _createClass3.default)(DropdownLink, [{
		key: "render",
		value: function render() {
			var _props = this.props,
			    to = _props.to,
			    close = _props.close,
			    theme = _props.theme;


			var VariousLink = LinkOptions[this.props.as];

			return _react2.default.createElement(
				VariousLink,
				{
					to: to,
					href: to,
					onClick: close,
					underlineColor: theme.underlineColor,
					padding: theme.padding,
					color: theme.color,
					clear: theme.clear
				},
				this.props.content
			);
		}
	}]);
	return DropdownLink;
}(_react.Component);

DropdownLink.displayName = "DropdownLink";
exports.default = DropdownLink;