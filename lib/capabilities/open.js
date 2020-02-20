'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _iconsSvg = require('../icons-svg');

var _iconsSvg2 = _interopRequireDefault(_iconsSvg);

var _translations = require('../translations');

var _translations2 = _interopRequireDefault(_translations);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var label = 'open';

function _handler(apiOptions, actions) {
  var navigateToDir = actions.navigateToDir,
      getSelectedResources = actions.getSelectedResources;


  var selectedResources = getSelectedResources();
  var selectedResourceId = selectedResources[0].id;
  navigateToDir(selectedResourceId);
}

exports.default = function (apiOptions, actions) {
  var localeLabel = (0, _translations2.default)(apiOptions.locale, label);
  var getSelectedResources = actions.getSelectedResources;

  return {
    id: label,
    icon: { svg: _iconsSvg2.default.open },
    label: localeLabel,
    shouldBeAvailable: function shouldBeAvailable(apiOptions) {
      var selectedResources = getSelectedResources();
      return selectedResources.length === 1 && selectedResources[0].type === 'dir';
    },
    availableInContexts: ['row', 'toolbar'],
    handler: function handler() {
      return _handler(apiOptions, actions);
    }
  };
};