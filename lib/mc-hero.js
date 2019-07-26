'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _mjmlHero = require('mjml-hero');

var _mjmlHero2 = _interopRequireDefault(_mjmlHero);

var _mjmlValidator = require('mjml-validator');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _mjmlValidator.registerDependencies)({
  'mj-wrapper': ['mc-hero'],
  'mj-body': ['mc-hero'],
  'mc-hero': ['mj-raw', 'mj-text', 'mc-text', 'mj-image', 'mc-image']
});

var McHero = (_temp = _class = function (_MjHero) {
  (0, _inherits3.default)(McHero, _MjHero);

  function McHero() {
    (0, _classCallCheck3.default)(this, McHero);
    return (0, _possibleConstructorReturn3.default)(this, (McHero.__proto__ || (0, _getPrototypeOf2.default)(McHero)).apply(this, arguments));
  }

  (0, _createClass3.default)(McHero, [{
    key: 'getMcAttributes',
    value: function getMcAttributes() {
      var _this2 = this;

      var mcAttrs = {};

      (0, _keys2.default)(McHero.allowedAttributes).filter(function (attr) {
        return attr.indexOf('mc:') === 0;
      }).forEach(function (attr) {
        var attrVal = _this2.getAttribute(attr);

        attrVal && (mcAttrs[attr] = attrVal);
      });

      return mcAttrs;
    }

    // MODIFIED form https://github.com/mjmlio/mjml/blob/master/packages/mjml-hero/src/index.js

  }, {
    key: 'render',
    value: function render() {
      var containerWidth = this.context.containerWidth;

      var mcAttributes = this.getMcAttributes();
      var hasMcAttribute = (0, _keys2.default)(mcAttributes).length;

      return '\n      ' + (hasMcAttribute && '<div ' + this.htmlAttributes(mcAttributes) + '>') + '\n      <!--[if mso | IE]>\n        <table\n          ' + this.htmlAttributes({
        align: 'center',
        border: '0',
        cellpadding: '0',
        cellspacing: '0',
        role: 'presentation',
        style: 'outlook-table',
        width: parseInt(containerWidth, 10)
      }) + '\n        >\n          <tr>\n            <td ' + this.htmlAttributes({ style: 'outlook-td' }) + '>\n              <v:image\n                ' + this.htmlAttributes({
        style: 'outlook-image',
        src: this.getAttribute('background-url'),
        'xmlns:v': 'urn:schemas-microsoft-com:vml'
      }) + '\n              />\n      <![endif]-->\n      <div\n        ' + this.htmlAttributes({
        align: this.getAttribute('align'),
        class: this.getAttribute('css-class'),
        style: 'div'
      }) + '\n      >\n        <table\n          ' + this.htmlAttributes({
        border: '0',
        cellpadding: '0',
        cellspacing: '0',
        role: 'presentation',
        style: 'table'
      }) + '\n        >\n          <tr\n            ' + this.htmlAttributes({
        style: 'tr'
      }) + '\n          >\n            ' + this.renderMode() + '\n          </tr>\n      </table>\n    </div>\n    <!--[if mso | IE]>\n          </td>\n        </tr>\n      </table>\n    <![endif]-->\n    ' + (hasMcAttribute && '</div>') + '\n    ';
    }
  }]);
  return McHero;
}(_mjmlHero2.default), _class.tagOmission = true, _class.allowedAttributes = (0, _extends3.default)({}, _mjmlHero2.default.allowedAttributes, {
  'mc:edit': 'string',
  'mc:hideable': 'string',
  'mc:repeatable': 'string',
  'mc:variant': 'string'
}), _class.defaultAttributes = (0, _extends3.default)({}, _mjmlHero2.default.defaultAttributes, {
  'mc:hideable': false
}), _temp);
exports.default = McHero;
module.exports = exports.default;