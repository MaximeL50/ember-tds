"use strict";



define('prjt4/adapters/application', ['exports', 'ember-data', 'ember-inflector'], function (exports, _emberData, _emberInflector) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Adapater = _emberData.default.RESTAdapter.extend({
    ajaxOptions: function ajaxOptions(url, type, options) {
      var hash = this._super(url, type, options);
      if (type == 'POST' || type == 'PUT') {
        hash.dataType = 'text';
      }
      return hash;
    },
    host: 'http://127.0.0.1:8080',
    namespace: 'boards',
    urlForDeleteRecord: function urlForDeleteRecord(id, modelName) {
      modelName = (0, _emberInflector.pluralize)(modelName);
      return this.get('host') + '/' + this.get('namespace') + ('/' + modelName + '/*?filter={_id:\'' + id + '\'}');
    }
  });

  exports.default = Adapater;
});
define('prjt4/app', ['exports', 'prjt4/resolver', 'ember-load-initializers', 'prjt4/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('prjt4/components/bs-accordion', ['exports', 'ember-bootstrap/components/bs-accordion'], function (exports, _bsAccordion) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsAccordion.default;
    }
  });
});
define('prjt4/components/bs-accordion/item', ['exports', 'ember-bootstrap/components/bs-accordion/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('prjt4/components/bs-accordion/item/body', ['exports', 'ember-bootstrap/components/bs-accordion/item/body'], function (exports, _body) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
define('prjt4/components/bs-accordion/item/title', ['exports', 'ember-bootstrap/components/bs-accordion/item/title'], function (exports, _title) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
define('prjt4/components/bs-alert', ['exports', 'ember-bootstrap/components/bs-alert'], function (exports, _bsAlert) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsAlert.default;
    }
  });
});
define('prjt4/components/bs-button-group', ['exports', 'ember-bootstrap/components/bs-button-group'], function (exports, _bsButtonGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsButtonGroup.default;
    }
  });
});
define('prjt4/components/bs-button-group/button', ['exports', 'ember-bootstrap/components/bs-button-group/button'], function (exports, _button) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
define('prjt4/components/bs-button', ['exports', 'ember-bootstrap/components/bs-button'], function (exports, _bsButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsButton.default;
    }
  });
});
define('prjt4/components/bs-carousel', ['exports', 'ember-bootstrap/components/bs-carousel'], function (exports, _bsCarousel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsCarousel.default;
    }
  });
});
define('prjt4/components/bs-carousel/slide', ['exports', 'ember-bootstrap/components/bs-carousel/slide'], function (exports, _slide) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _slide.default;
    }
  });
});
define('prjt4/components/bs-collapse', ['exports', 'ember-bootstrap/components/bs-collapse'], function (exports, _bsCollapse) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsCollapse.default;
    }
  });
});
define('prjt4/components/bs-dropdown', ['exports', 'ember-bootstrap/components/bs-dropdown'], function (exports, _bsDropdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsDropdown.default;
    }
  });
});
define('prjt4/components/bs-dropdown/button', ['exports', 'ember-bootstrap/components/bs-dropdown/button'], function (exports, _button) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
define('prjt4/components/bs-dropdown/menu', ['exports', 'ember-bootstrap/components/bs-dropdown/menu'], function (exports, _menu) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _menu.default;
    }
  });
});
define('prjt4/components/bs-dropdown/menu/divider', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/divider'], function (exports, _divider) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _divider.default;
    }
  });
});
define('prjt4/components/bs-dropdown/menu/item', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('prjt4/components/bs-dropdown/menu/link-to', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('prjt4/components/bs-dropdown/toggle', ['exports', 'ember-bootstrap/components/bs-dropdown/toggle'], function (exports, _toggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
define('prjt4/components/bs-form', ['exports', 'ember-bootstrap/components/bs-form'], function (exports, _bsForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsForm.default;
    }
  });
});
define('prjt4/components/bs-form/element', ['exports', 'ember-bootstrap/components/bs-form/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('prjt4/components/bs-form/element/control', ['exports', 'ember-bootstrap/components/bs-form/element/control'], function (exports, _control) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _control.default;
    }
  });
});
define('prjt4/components/bs-form/element/control/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/control/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('prjt4/components/bs-form/element/control/input', ['exports', 'ember-bootstrap/components/bs-form/element/control/input'], function (exports, _input) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _input.default;
    }
  });
});
define('prjt4/components/bs-form/element/control/radio', ['exports', 'ember-bootstrap/components/bs-form/element/control/radio'], function (exports, _radio) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _radio.default;
    }
  });
});
define('prjt4/components/bs-form/element/control/textarea', ['exports', 'ember-bootstrap/components/bs-form/element/control/textarea'], function (exports, _textarea) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _textarea.default;
    }
  });
});
define('prjt4/components/bs-form/element/errors', ['exports', 'ember-bootstrap/components/bs-form/element/errors'], function (exports, _errors) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _errors.default;
    }
  });
});
define('prjt4/components/bs-form/element/feedback-icon', ['exports', 'ember-bootstrap/components/bs-form/element/feedback-icon'], function (exports, _feedbackIcon) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _feedbackIcon.default;
    }
  });
});
define('prjt4/components/bs-form/element/help-text', ['exports', 'ember-bootstrap/components/bs-form/element/help-text'], function (exports, _helpText) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _helpText.default;
    }
  });
});
define('prjt4/components/bs-form/element/label', ['exports', 'ember-bootstrap/components/bs-form/element/label'], function (exports, _label) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _label.default;
    }
  });
});
define('prjt4/components/bs-form/element/layout/horizontal', ['exports', 'ember-bootstrap/components/bs-form/element/layout/horizontal'], function (exports, _horizontal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _horizontal.default;
    }
  });
});
define('prjt4/components/bs-form/element/layout/horizontal/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/horizontal/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('prjt4/components/bs-form/element/layout/inline', ['exports', 'ember-bootstrap/components/bs-form/element/layout/inline'], function (exports, _inline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _inline.default;
    }
  });
});
define('prjt4/components/bs-form/element/layout/inline/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/inline/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('prjt4/components/bs-form/element/layout/vertical', ['exports', 'ember-bootstrap/components/bs-form/element/layout/vertical'], function (exports, _vertical) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _vertical.default;
    }
  });
});
define('prjt4/components/bs-form/element/layout/vertical/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/vertical/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('prjt4/components/bs-form/group', ['exports', 'ember-bootstrap/components/bs-form/group'], function (exports, _group) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _group.default;
    }
  });
});
define('prjt4/components/bs-modal-simple', ['exports', 'ember-bootstrap/components/bs-modal-simple'], function (exports, _bsModalSimple) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsModalSimple.default;
    }
  });
});
define('prjt4/components/bs-modal', ['exports', 'ember-bootstrap/components/bs-modal'], function (exports, _bsModal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsModal.default;
    }
  });
});
define('prjt4/components/bs-modal/body', ['exports', 'ember-bootstrap/components/bs-modal/body'], function (exports, _body) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
define('prjt4/components/bs-modal/dialog', ['exports', 'ember-bootstrap/components/bs-modal/dialog'], function (exports, _dialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dialog.default;
    }
  });
});
define('prjt4/components/bs-modal/footer', ['exports', 'ember-bootstrap/components/bs-modal/footer'], function (exports, _footer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _footer.default;
    }
  });
});
define('prjt4/components/bs-modal/header', ['exports', 'ember-bootstrap/components/bs-modal/header'], function (exports, _header) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _header.default;
    }
  });
});
define('prjt4/components/bs-modal/header/close', ['exports', 'ember-bootstrap/components/bs-modal/header/close'], function (exports, _close) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _close.default;
    }
  });
});
define('prjt4/components/bs-modal/header/title', ['exports', 'ember-bootstrap/components/bs-modal/header/title'], function (exports, _title) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
define('prjt4/components/bs-nav', ['exports', 'ember-bootstrap/components/bs-nav'], function (exports, _bsNav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsNav.default;
    }
  });
});
define('prjt4/components/bs-nav/item', ['exports', 'ember-bootstrap/components/bs-nav/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('prjt4/components/bs-nav/link-to', ['exports', 'ember-bootstrap/components/bs-nav/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('prjt4/components/bs-navbar', ['exports', 'ember-bootstrap/components/bs-navbar'], function (exports, _bsNavbar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsNavbar.default;
    }
  });
});
define('prjt4/components/bs-navbar/content', ['exports', 'ember-bootstrap/components/bs-navbar/content'], function (exports, _content) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _content.default;
    }
  });
});
define('prjt4/components/bs-navbar/link-to', ['exports', 'ember-bootstrap/components/bs-navbar/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('prjt4/components/bs-navbar/nav', ['exports', 'ember-bootstrap/components/bs-navbar/nav'], function (exports, _nav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _nav.default;
    }
  });
});
define('prjt4/components/bs-navbar/toggle', ['exports', 'ember-bootstrap/components/bs-navbar/toggle'], function (exports, _toggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
define('prjt4/components/bs-popover', ['exports', 'ember-bootstrap/components/bs-popover'], function (exports, _bsPopover) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsPopover.default;
    }
  });
});
define('prjt4/components/bs-popover/element', ['exports', 'ember-bootstrap/components/bs-popover/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('prjt4/components/bs-progress', ['exports', 'ember-bootstrap/components/bs-progress'], function (exports, _bsProgress) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsProgress.default;
    }
  });
});
define('prjt4/components/bs-progress/bar', ['exports', 'ember-bootstrap/components/bs-progress/bar'], function (exports, _bar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bar.default;
    }
  });
});
define('prjt4/components/bs-tab', ['exports', 'ember-bootstrap/components/bs-tab'], function (exports, _bsTab) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsTab.default;
    }
  });
});
define('prjt4/components/bs-tab/pane', ['exports', 'ember-bootstrap/components/bs-tab/pane'], function (exports, _pane) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _pane.default;
    }
  });
});
define('prjt4/components/bs-tooltip', ['exports', 'ember-bootstrap/components/bs-tooltip'], function (exports, _bsTooltip) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsTooltip.default;
    }
  });
});
define('prjt4/components/bs-tooltip/element', ['exports', 'ember-bootstrap/components/bs-tooltip/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('prjt4/components/ember-popper-targeting-parent', ['exports', 'ember-popper/components/ember-popper-targeting-parent'], function (exports, _emberPopperTargetingParent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopperTargetingParent.default;
    }
  });
});
define('prjt4/components/ember-popper', ['exports', 'ember-popper/components/ember-popper'], function (exports, _emberPopper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopper.default;
    }
  });
});
define('prjt4/components/ui-accordion', ['exports', 'semantic-ui-ember/components/ui-accordion'], function (exports, _uiAccordion) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiAccordion.default;
    }
  });
});
define('prjt4/components/ui-checkbox', ['exports', 'semantic-ui-ember/components/ui-checkbox'], function (exports, _uiCheckbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiCheckbox.default;
    }
  });
});
define('prjt4/components/ui-dimmer', ['exports', 'semantic-ui-ember/components/ui-dimmer'], function (exports, _uiDimmer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiDimmer.default;
    }
  });
});
define('prjt4/components/ui-dropdown', ['exports', 'semantic-ui-ember/components/ui-dropdown'], function (exports, _uiDropdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiDropdown.default;
    }
  });
});
define('prjt4/components/ui-embed', ['exports', 'semantic-ui-ember/components/ui-embed'], function (exports, _uiEmbed) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiEmbed.default;
    }
  });
});
define('prjt4/components/ui-modal', ['exports', 'semantic-ui-ember/components/ui-modal'], function (exports, _uiModal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiModal.default;
    }
  });
});
define('prjt4/components/ui-nag', ['exports', 'semantic-ui-ember/components/ui-nag'], function (exports, _uiNag) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiNag.default;
    }
  });
});
define('prjt4/components/ui-popup', ['exports', 'semantic-ui-ember/components/ui-popup'], function (exports, _uiPopup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiPopup.default;
    }
  });
});
define('prjt4/components/ui-progress', ['exports', 'semantic-ui-ember/components/ui-progress'], function (exports, _uiProgress) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiProgress.default;
    }
  });
});
define('prjt4/components/ui-radio', ['exports', 'semantic-ui-ember/components/ui-radio'], function (exports, _uiRadio) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiRadio.default;
    }
  });
});
define('prjt4/components/ui-rating', ['exports', 'semantic-ui-ember/components/ui-rating'], function (exports, _uiRating) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiRating.default;
    }
  });
});
define('prjt4/components/ui-search', ['exports', 'semantic-ui-ember/components/ui-search'], function (exports, _uiSearch) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiSearch.default;
    }
  });
});
define('prjt4/components/ui-shape', ['exports', 'semantic-ui-ember/components/ui-shape'], function (exports, _uiShape) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiShape.default;
    }
  });
});
define('prjt4/components/ui-sidebar', ['exports', 'semantic-ui-ember/components/ui-sidebar'], function (exports, _uiSidebar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiSidebar.default;
    }
  });
});
define('prjt4/components/ui-sticky', ['exports', 'semantic-ui-ember/components/ui-sticky'], function (exports, _uiSticky) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiSticky.default;
    }
  });
});
define('prjt4/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('prjt4/helpers/app-version', ['exports', 'prjt4/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    var versionOnly = hash.versionOnly || hash.hideSha;
    var shaOnly = hash.shaOnly || hash.hideVersion;

    var match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('prjt4/helpers/bs-contains', ['exports', 'ember-bootstrap/helpers/bs-contains'], function (exports, _bsContains) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsContains.default;
    }
  });
  Object.defineProperty(exports, 'bsContains', {
    enumerable: true,
    get: function () {
      return _bsContains.bsContains;
    }
  });
});
define('prjt4/helpers/bs-eq', ['exports', 'ember-bootstrap/helpers/bs-eq'], function (exports, _bsEq) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsEq.default;
    }
  });
  Object.defineProperty(exports, 'eq', {
    enumerable: true,
    get: function () {
      return _bsEq.eq;
    }
  });
});
define('prjt4/helpers/cancel-all', ['exports', 'ember-concurrency/helpers/cancel-all'], function (exports, _cancelAll) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _cancelAll.default;
    }
  });
});
define('prjt4/helpers/is-after', ['exports', 'ember-moment/helpers/is-after'], function (exports, _isAfter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isAfter.default;
    }
  });
});
define('prjt4/helpers/is-before', ['exports', 'ember-moment/helpers/is-before'], function (exports, _isBefore) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isBefore.default;
    }
  });
});
define('prjt4/helpers/is-between', ['exports', 'ember-moment/helpers/is-between'], function (exports, _isBetween) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isBetween.default;
    }
  });
});
define('prjt4/helpers/is-same-or-after', ['exports', 'ember-moment/helpers/is-same-or-after'], function (exports, _isSameOrAfter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isSameOrAfter.default;
    }
  });
});
define('prjt4/helpers/is-same-or-before', ['exports', 'ember-moment/helpers/is-same-or-before'], function (exports, _isSameOrBefore) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isSameOrBefore.default;
    }
  });
});
define('prjt4/helpers/is-same', ['exports', 'ember-moment/helpers/is-same'], function (exports, _isSame) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isSame.default;
    }
  });
});
define('prjt4/helpers/map-value', ['exports', 'semantic-ui-ember/helpers/map-value'], function (exports, _mapValue) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _mapValue.default;
    }
  });
  Object.defineProperty(exports, 'mapValue', {
    enumerable: true,
    get: function () {
      return _mapValue.mapValue;
    }
  });
});
define('prjt4/helpers/moment-add', ['exports', 'ember-moment/helpers/moment-add'], function (exports, _momentAdd) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentAdd.default;
    }
  });
});
define('prjt4/helpers/moment-calendar', ['exports', 'ember-moment/helpers/moment-calendar'], function (exports, _momentCalendar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentCalendar.default;
    }
  });
});
define('prjt4/helpers/moment-diff', ['exports', 'ember-moment/helpers/moment-diff'], function (exports, _momentDiff) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentDiff.default;
    }
  });
});
define('prjt4/helpers/moment-duration', ['exports', 'ember-moment/helpers/moment-duration'], function (exports, _momentDuration) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentDuration.default;
    }
  });
});
define('prjt4/helpers/moment-format', ['exports', 'ember-moment/helpers/moment-format'], function (exports, _momentFormat) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentFormat.default;
    }
  });
});
define('prjt4/helpers/moment-from-now', ['exports', 'ember-moment/helpers/moment-from-now'], function (exports, _momentFromNow) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentFromNow.default;
    }
  });
});
define('prjt4/helpers/moment-from', ['exports', 'ember-moment/helpers/moment-from'], function (exports, _momentFrom) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentFrom.default;
    }
  });
});
define('prjt4/helpers/moment-subtract', ['exports', 'ember-moment/helpers/moment-subtract'], function (exports, _momentSubtract) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentSubtract.default;
    }
  });
});
define('prjt4/helpers/moment-to-date', ['exports', 'ember-moment/helpers/moment-to-date'], function (exports, _momentToDate) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentToDate.default;
    }
  });
});
define('prjt4/helpers/moment-to-now', ['exports', 'ember-moment/helpers/moment-to-now'], function (exports, _momentToNow) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentToNow.default;
    }
  });
});
define('prjt4/helpers/moment-to', ['exports', 'ember-moment/helpers/moment-to'], function (exports, _momentTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentTo.default;
    }
  });
});
define('prjt4/helpers/moment-unix', ['exports', 'ember-moment/helpers/unix'], function (exports, _unix) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _unix.default;
    }
  });
});
define('prjt4/helpers/moment', ['exports', 'ember-moment/helpers/moment'], function (exports, _moment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _moment.default;
    }
  });
});
define('prjt4/helpers/now', ['exports', 'ember-moment/helpers/now'], function (exports, _now) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _now.default;
    }
  });
});
define('prjt4/helpers/perform', ['exports', 'ember-concurrency/helpers/perform'], function (exports, _perform) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _perform.default;
    }
  });
});
define('prjt4/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('prjt4/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('prjt4/helpers/task', ['exports', 'ember-concurrency/helpers/task'], function (exports, _task) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _task.default;
    }
  });
});
define('prjt4/helpers/unix', ['exports', 'ember-moment/helpers/unix'], function (exports, _unix) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _unix.default;
    }
  });
});
define('prjt4/helpers/utc', ['exports', 'ember-moment/helpers/utc'], function (exports, _utc) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _utc.default;
    }
  });
  Object.defineProperty(exports, 'utc', {
    enumerable: true,
    get: function () {
      return _utc.utc;
    }
  });
});
define('prjt4/index', ['exports', 'ember-cli-uuid'], function (exports, _emberCliUuid) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'uuid', {
    enumerable: true,
    get: function () {
      return _emberCliUuid.uuid;
    }
  });
});
define('prjt4/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'prjt4/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var name = void 0,
      version = void 0;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('prjt4/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('prjt4/initializers/data-adapter', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('prjt4/initializers/ember-cli-uuid', ['exports', 'ember-data', 'prjt4/config/environment', 'ember-cli-uuid/mixins/adapters/uuid', 'ember-cli-uuid/configuration'], function (exports, _emberData, _environment, _uuid, _configuration) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {

    name: 'ember-cli-uuid',

    initialize: function initialize() {

      var config = _environment.default['ember-cli-uuid'] || {};
      _configuration.default.load(config);

      _emberData.default.Adapter.reopen({
        generateIdForRecord: function generateIdForRecord() {
          return _configuration.default.defaultUUID ? _uuid.generateIdForRecord.apply(undefined, arguments) : null;
        }
      });
    }
  };
});
define('prjt4/initializers/ember-concurrency', ['exports', 'ember-concurrency/initializers/ember-concurrency'], function (exports, _emberConcurrency) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberConcurrency.default;
    }
  });
});
define('prjt4/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('prjt4/initializers/export-application-global', ['exports', 'prjt4/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('prjt4/initializers/injectStore', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('prjt4/initializers/load-bootstrap-config', ['exports', 'prjt4/config/environment', 'ember-bootstrap/config'], function (exports, _environment, _config) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() /* container, application */{
    _config.default.load(_environment.default['ember-bootstrap'] || {});
  }

  exports.default = {
    name: 'load-bootstrap-config',
    initialize: initialize
  };
});
define('prjt4/initializers/store', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('prjt4/initializers/transforms', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("prjt4/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('prjt4/mixins/base', ['exports', 'semantic-ui-ember/mixins/base'], function (exports, _base) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _base.default;
    }
  });
});
define('prjt4/models/application', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({});
});
define('prjt4/models/developers', ['exports', 'ember-data'], function (exports, _emberData) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _emberData.default.Model.extend({
        identity: _emberData.default.attr('string'),
        projects: _emberData.default.hasMany('projects', { inverse: 'owner' })
    });
});
define('prjt4/models/project', ['exports', 'ember-data'], function (exports, _emberData) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _emberData.default.Model.extend({
        name: _emberData.default.attr('string'),
        descriptif: _emberData.default.attr('string'),
        startDate: _emberData.default.attr('utc'),
        dueDate: _emberData.default.attr('utc'),
        owner: _emberData.default.belongsTo('developers')
    });
});
define('prjt4/models/step', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({});
});
define('prjt4/models/storie', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({});
});
define('prjt4/models/story', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({});
});
define('prjt4/models/tag', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({});
});
define('prjt4/models/task', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({});
});
define('prjt4/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('prjt4/router', ['exports', 'prjt4/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('developers', function () {
      this.route('new');
      this.route('edit', { path: 'edit/:developer_id' });
      this.route('remove', { path: 'remove/:developer_id' });
    }), this.route('projects', function () {
      this.route('new');
      this.route('remove', { path: 'remove/:project_id' });
      this.route('edit', { path: 'edit/:project_id' });
    });
  });

  exports.default = Router;
});
define('prjt4/routes/developers', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        model: function model() {
            return this.store.findAll('developers');
        },


        actions: {}
    });
});
define('prjt4/routes/developers/edit', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    templateName: 'developers/edit',
    afterModel: function afterModel(model) {
      var copy = Ember.Object.create(model.toJSON());
      Ember.set(model, 'copy', copy);
      return model;
    },

    actions: {
      save: function save(model) {
        model.setProperties(JSON.parse(JSON.stringify(model.copy)));

        model.save().then(this.transitionTo('developers'));
      }
    }
  });
});
define('prjt4/routes/developers/new', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        model: function model() {
            return { copy: {}
            };
        },


        actions: {
            save: function save(model) {
                var copy = model.copy;
                console.log("copy.identity");
                if (copy.identity == null) {
                    alert('veuillez remplir le champ "Identité".');
                } else {
                    var dev = this.store.createRecord('developers', Ember.Object.create(copy));
                    dev.save().then(this.transitionTo('developers'));
                }
            }
        }
    });
});
define('prjt4/routes/developers/remove', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    templateName: 'developers/remove',
    afterModel: function afterModel(model) {
      var copy = Ember.Object.create(model.toJSON());
      Ember.set(model, 'copy', copy);
      return model;
    },

    actions: {
      delete: function _delete(dev) {
        dev.destroyRecord().then(this.transitionTo('developers'));
      }
    }
  });
});
define('prjt4/routes/project', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('prjt4/routes/projects', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        model: function model() {
            return this.store.findAll('project');
        },


        actions: {}
    });
});
define('prjt4/routes/projects/edit', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    templateName: 'projects/edit',
    afterModel: function afterModel(model) {
      var copy = Ember.Object.create(model.toJSON());
      Ember.set(model, 'copy', copy);
      return model;
    },

    actions: {
      save: function save(model) {
        model.setProperties(JSON.parse(JSON.stringify(model.copy)));

        model.save().then(this.transitionTo('projects'));
      }
    }
  });
});
define('prjt4/routes/projects/new', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model: function model() {
      return { copy: {},
        devs: this.store.findAll('developers')
      };
    },


    actions: {
      save: function save(model) {
        //this.get('store');
        var copy = Ember.Object.create(model.copy);
        if (copy.name == null || copy.descriptif == null || copy.owner == null || copy.startDate == null || copy.dueDate == null) {
          alert('Veuillez remplir les champs.');
        } else {
          var dev = this.store.createRecord('project', copy);
          dev.save().then(this.transitionTo('projects'));
        }
      }
    }
  });
});
define('prjt4/routes/projects/remove', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    templateName: 'projects/remove',
    afterModel: function afterModel(model) {
      var copy = Ember.Object.create(model.toJSON());
      Ember.set(model, 'copy', copy);
      return model;
    },

    actions: {
      delete: function _delete(project) {
        project.destroyRecord().then(this.transitionTo('projects'));
      }
    }
  });
});
define('prjt4/serializers/application', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.JSONSerializer.extend({
    primaryKey: '_id',
    isNewSerializerAPI: true,
    extractId: function extractId(modelClass, resourceHash) {
      if (resourceHash._id) return resourceHash._id.$oid || resourceHash._id;
    },
    normalizeResponse: function normalizeResponse(store, primaryModelClass, payload, id, requestType) {
      if (requestType == 'createRecord') return this._super(store, primaryModelClass, {}, id, requestType);
      if (requestType == 'updateRecord') return this._super(store, primaryModelClass, {}, id, requestType);
      if (requestType == 'deleteRecord') return this._super(store, primaryModelClass, null, id, requestType);
      if (payload._embedded) return this._super(store, primaryModelClass, payload._embedded, id, requestType);
      return this._super(store, primaryModelClass, payload, id, requestType);
    },
    serializeId: function serializeId(snapshot, json) {
      var id = snapshot.id;
      json['_id'] = id;
    }
  });
});
define('prjt4/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define('prjt4/services/moment', ['exports', 'ember-moment/services/moment', 'prjt4/config/environment'], function (exports, _moment, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var get = Ember.get;
  exports.default = _moment.default.extend({
    defaultFormat: get(_environment.default, 'moment.outputFormat')
  });
});
define("prjt4/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "TWp9/k0G", "block": "{\"symbols\":[],\"statements\":[[1,[18,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "prjt4/templates/application.hbs" } });
});
define('prjt4/templates/components/ember-popper-targeting-parent', ['exports', 'ember-popper/templates/components/ember-popper-targeting-parent'], function (exports, _emberPopperTargetingParent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopperTargetingParent.default;
    }
  });
});
define('prjt4/templates/components/ember-popper', ['exports', 'ember-popper/templates/components/ember-popper'], function (exports, _emberPopper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopper.default;
    }
  });
});
define("prjt4/templates/developers", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Z7d9TdWm", "block": "{\"symbols\":[\"dev\"],\"statements\":[[6,\"nav\"],[9,\"class\",\"navbar navbar-dark bg-dark navbar-expand navbar-light bg-light\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"collapse navbar-collapse\"],[9,\"id\",\"navbarNav\"],[7],[0,\"\\n     \"],[6,\"ul\"],[9,\"class\",\"navbar-nav\"],[7],[0,\"\\n       \"],[6,\"li\"],[9,\"class\",\"nav-item\"],[7],[0,\"\\n\"],[4,\"link-to\",[\"developers\"],[[\"class\"],[\"ui rebel icon button orange\"]],{\"statements\":[[0,\"           \"],[6,\"i\"],[9,\"class\",\"user icon\"],[7],[8],[0,\" Voir les développeurs\\n\"]],\"parameters\":[]},null],[0,\"       \"],[8],[0,\"\\n       \"],[6,\"li\"],[9,\"class\",\"nav-item\"],[7],[0,\"\\n\"],[4,\"link-to\",[\"projects\"],[[\"class\"],[\"ui button orange\"]],{\"statements\":[[0,\"           \"],[6,\"i\"],[9,\"class\",\"file alternate icon\"],[7],[8],[0,\"Voir les projets\\n\"]],\"parameters\":[]},null],[0,\"       \"],[8],[0,\"\\n     \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\\n\"],[6,\"div\"],[9,\"style\",\"padding-left:50px;\"],[7],[0,\"\\n\"],[6,\"br\"],[7],[8],[0,\"\\n\"],[6,\"ul\"],[9,\"class\",\"list-group col-md-6\"],[7],[0,\"\\n  \"],[6,\"li\"],[9,\"class\",\"list-group-item active d-flex justify-content-between list-group-item list-group-item-action\"],[7],[0,\"\\n    Identité\\n  \"],[6,\"span\"],[7],[0,\"Action\"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[4,\"each\",[[20,[\"model\"]]],null,{\"statements\":[[0,\"    \"],[6,\"li\"],[9,\"class\",\"list-group-item d-flex justify-content-between list-group-item list-group-item-action \"],[7],[0,\"\\n      \"],[1,[19,1,[\"identity\"]],false],[0,\"\\n      \"],[6,\"span\"],[7],[0,\"\\n\"],[4,\"link-to\",[\"developers.edit\",[19,1,[]]],[[\"class\"],[\"ui icon circular button\"]],{\"statements\":[[0,\"          \"],[6,\"i\"],[9,\"class\",\"ui edit icon\"],[7],[8],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"link-to\",[\"developers.remove\",[19,1,[]]],[[\"class\"],[\"ui icon circular button\"]],{\"statements\":[[0,\"          \"],[6,\"i\"],[9,\"class\",\"ui remove icon\"],[7],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[8],[0,\"\\n\"],[6,\"br\"],[7],[8],[0,\"\\n\"],[4,\"link-to\",[\"developers.new\"],[[\"class\"],[\"ui button blue\"]],{\"statements\":[[0,\"  Ajouter un développeur\\n\"]],\"parameters\":[]},null],[6,\"br\"],[7],[8],[0,\"\\n\"],[6,\"br\"],[7],[8],[0,\"\\n\"],[1,[18,\"outlet\"],false],[0,\"\\n\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "prjt4/templates/developers.hbs" } });
});
define("prjt4/templates/developers/edit", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "cNOmekPB", "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"form-group col-md-6 \"],[7],[0,\"\\n  \"],[6,\"label\"],[9,\"for\",\"identityRename\"],[7],[0,\"Identité\"],[8],[0,\"\\n  \"],[1,[25,\"input\",null,[[\"type\",\"class\",\"id\",\"aria-describedby\",\"value\",\"placeholder\"],[\"text\",\"form-control \",\"identityRename\",\"editDescription\",[20,[\"model\",\"copy\",\"identity\"]],\"Rename\"]]],false],[0,\"\\n  \"],[6,\"small\"],[9,\"id\",\"editDescription\"],[9,\"class\",\"form-text text-muted\"],[7],[0,\"C'est ici que vous renommer le développeur\"],[8],[0,\"\\n  \"],[6,\"button\"],[9,\"class\",\"ui  button blue\"],[3,\"action\",[[19,0,[]],\"save\",[20,[\"model\"]]]],[7],[0,\"Modifier\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"developers\"],[[\"class\"],[\"ui button grey\"]],{\"statements\":[[0,\"    Annuler\\n\"]],\"parameters\":[]},null],[8],[0,\"\\n\\n\"],[1,[18,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "prjt4/templates/developers/edit.hbs" } });
});
define("prjt4/templates/developers/new", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "qkVMCuCn", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"form-group col-md-6 \"],[7],[0,\"\\n  \"],[6,\"label\"],[9,\"for\",\"identityAdd\"],[7],[0,\"Identité\"],[8],[0,\"\\n  \"],[1,[25,\"input\",null,[[\"type\",\"class\",\"id\",\"aria-describedby\",\"value\",\"placeholder\"],[\"text\",\"form-control \",\"identityAdd\",\"addDescription\",[20,[\"model\",\"copy\",\"identity\"]],\"identité\"]]],false],[0,\"\\n  \"],[6,\"small\"],[9,\"id\",\"addDescription\"],[9,\"class\",\"form-text text-muted\"],[7],[0,\"C'est ici que vous ajouter un développeur\"],[8],[0,\"\\n  \"],[6,\"button\"],[9,\"class\",\"ui button blue\"],[3,\"action\",[[19,0,[]],\"save\",[20,[\"model\"]]]],[7],[0,\"Ajouter\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"developers\"],[[\"class\"],[\"ui button grey\"]],{\"statements\":[[0,\"    Annuler\\n\"]],\"parameters\":[]},null],[8],[0,\"\\n\\n\"],[1,[18,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "prjt4/templates/developers/new.hbs" } });
});
define("prjt4/templates/developers/remove", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "dd7k8mVq", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"form-group col-md-6 \"],[7],[0,\"\\n  \"],[6,\"p\"],[7],[0,\"confirmer la suppression de \"],[1,[20,[\"model\",\"copy\",\"identity\"]],false],[0,\" ?\"],[8],[0,\"\\n  \"],[6,\"button\"],[9,\"class\",\"ui button green\"],[3,\"action\",[[19,0,[]],\"delete\",[20,[\"model\"]]]],[7],[0,\"\\n    Supprimer\\n  \"],[8],[0,\"\\n\"],[4,\"link-to\",[\"developers\"],[[\"class\"],[\"ui button red\"]],{\"statements\":[[0,\"    Annuler\\n\"]],\"parameters\":[]},null],[8],[0,\"\\n\\n\"],[1,[18,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "prjt4/templates/developers/remove.hbs" } });
});
define("prjt4/templates/projects", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "MueOs3ZU", "block": "{\"symbols\":[\"project\"],\"statements\":[[6,\"nav\"],[9,\"class\",\"navbar navbar-dark bg-dark navbar-expand navbar-light bg-light\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"collapse navbar-collapse\"],[9,\"id\",\"navbarNav\"],[7],[0,\"\\n     \"],[6,\"ul\"],[9,\"class\",\"navbar-nav\"],[7],[0,\"\\n       \"],[6,\"li\"],[9,\"class\",\"nav-item\"],[7],[0,\"\\n\"],[4,\"link-to\",[\"developers\"],[[\"class\"],[\"ui button orange\"]],{\"statements\":[[0,\"           \"],[6,\"i\"],[9,\"class\",\"user icon\"],[7],[8],[0,\" Voir les développeurs\\n\"]],\"parameters\":[]},null],[0,\"       \"],[8],[0,\"\\n       \"],[6,\"li\"],[9,\"class\",\"nav-item\"],[7],[0,\"\\n\"],[4,\"link-to\",[\"projects\"],[[\"class\"],[\"ui button orange\"]],{\"statements\":[[0,\"           \"],[6,\"i\"],[9,\"class\",\"file alternate icon\"],[7],[8],[0,\"Voir les projets\\n\"]],\"parameters\":[]},null],[0,\"       \"],[8],[0,\"\\n     \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[6,\"div\"],[9,\"style\",\"padding-left:50px;\"],[9,\"class\",\"col-md-10\"],[7],[0,\"\\n\\n\"],[6,\"br\"],[7],[8],[0,\"\\n\\n\"],[6,\"table\"],[9,\"class\",\"table table-hover ui yellow table selectable\"],[7],[0,\"\\n  \"],[6,\"thead\"],[9,\"class\",\"thead-blue\"],[7],[0,\"\\n    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"th\"],[9,\"scope\",\"col\"],[7],[0,\"Nom \"],[8],[0,\"\\n      \"],[6,\"th\"],[9,\"scope\",\"col\"],[7],[0,\"Descriptif\"],[8],[0,\"\\n      \"],[6,\"th\"],[9,\"scope\",\"col\"],[7],[0,\"Date de début\"],[8],[0,\"\\n      \"],[6,\"th\"],[9,\"scope\",\"col\"],[7],[0,\"Date de fin\"],[8],[0,\"\\n      \"],[6,\"th\"],[9,\"scope\",\"col\"],[7],[0,\"Propriétaire\"],[8],[0,\"\\n      \"],[6,\"th\"],[9,\"scope\",\"col\"],[7],[0,\"Action\"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"tbody\"],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"model\"]]],null,{\"statements\":[[0,\"    \"],[6,\"tr\"],[7],[0,\"\\n      \"],[6,\"th\"],[9,\"scope\",\"row\"],[7],[1,[19,1,[\"name\"]],false],[8],[0,\"\\n      \"],[6,\"td\"],[7],[1,[19,1,[\"descriptif\"]],false],[8],[0,\"\\n      \"],[6,\"td\"],[7],[1,[25,\"moment-format\",[[19,1,[\"startDate\"]],\"DD/MM/YY\"],null],false],[8],[0,\"\\n      \"],[6,\"td\"],[7],[1,[25,\"moment-format\",[[19,1,[\"dueDate\"]],\"DD/MM/YY\"],null],false],[8],[0,\"\\n      \"],[6,\"td\"],[7],[1,[19,1,[\"owner\",\"identity\"]],false],[8],[0,\"\\n\\n      \"],[6,\"td\"],[7],[0,\"\\n\"],[4,\"link-to\",[\"projects.edit\",[19,1,[]]],[[\"class\"],[\"ui icon circular button\"]],{\"statements\":[[0,\"          \"],[6,\"i\"],[9,\"class\",\"ui edit icon\"],[7],[8],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"link-to\",[\"projects.remove\",[19,1,[]]],[[\"class\"],[\"ui icon circular button\"]],{\"statements\":[[0,\"          \"],[6,\"i\"],[9,\"class\",\"ui remove icon\"],[7],[8],[0,\"\\n        \"]],\"parameters\":[]},null],[8],[0,\"\\n    \"],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[6,\"br\"],[7],[8],[0,\"\\n\"],[4,\"link-to\",[\"projects.new\"],[[\"class\"],[\"ui button green\"]],{\"statements\":[[0,\"  Ajouter un projet\\n\"]],\"parameters\":[]},null],[6,\"br\"],[7],[8],[0,\"\\n\"],[6,\"br\"],[7],[8],[0,\"\\n\"],[1,[18,\"outlet\"],false],[0,\"\\n\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "prjt4/templates/projects.hbs" } });
});
define("prjt4/templates/projects/edit", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "9I3W5xZR", "block": "{\"symbols\":[\"execute\",\"mapper\",\"owner\"],\"statements\":[[6,\"div\"],[9,\"class\",\"form-group col-md-6 \"],[7],[0,\"\\n  \"],[6,\"label\"],[9,\"for\",\"NameAdd\"],[7],[0,\"Nom\"],[8],[0,\"\\n  \"],[1,[25,\"input\",null,[[\"type\",\"class\",\"id\",\"aria-describedby\",\"value\",\"placeholder\"],[\"text\",\"form-control \",\"NameAdd\",\"addNameDescription\",[20,[\"model\",\"copy\",\"name\"]],\"Nom\"]]],false],[0,\"\\n  \"],[6,\"small\"],[9,\"id\",\"addNameDescription\"],[9,\"class\",\"form-text text-muted\"],[7],[0,\"C'est ici que vous ajouter le nom d'un projet\"],[8],[0,\"\\n\\n  \"],[6,\"br\"],[7],[8],[0,\"\\n\\n  \"],[6,\"label\"],[9,\"for\",\"DescriptifAdd\"],[7],[0,\"Description\"],[8],[0,\"\\n  \"],[1,[25,\"textarea\",null,[[\"class\",\"id\",\"aria-describedby\",\"value\",\"placeholder\"],[\"form-control\",\"DescriptifAdd\",\"addDescriptifDescription\",[20,[\"model\",\"copy\",\"descriptif\"]],\"descriptif\"]]],false],[0,\"\\n  \"],[6,\"small\"],[9,\"id\",\"addDescriptifDescription\"],[9,\"class\",\"form-text text-muted\"],[7],[0,\"Décrivez rapidement ou avec des mots clé votre projet\"],[8],[0,\"\\n\\n  \"],[6,\"br\"],[7],[8],[0,\"\\n\\n  \"],[6,\"label\"],[9,\"for\",\"StartDateAdd\"],[7],[0,\"Date De Début\"],[8],[0,\"\\n  \"],[1,[25,\"input\",null,[[\"type\",\"class\",\"id\",\"aria-describedby\",\"value\"],[\"date\",\"form-control\",\"StartDateAdd\",\"addStartDateDescription\",[20,[\"model\",\"copy\",\"startDate\"]]]]],false],[0,\"\\n  \"],[6,\"small\"],[9,\"id\",\"addStartDateDescription\"],[9,\"class\",\"form-text text-muted\"],[7],[0,\"La date du début de votre projet \"],[8],[0,\"\\n\\n  \"],[6,\"br\"],[7],[8],[0,\"\\n\\n  \"],[6,\"label\"],[9,\"for\",\"DueDateAdd\"],[7],[0,\"Date de Fin\"],[8],[0,\"\\n  \"],[1,[25,\"input\",null,[[\"type\",\"class\",\"id\",\"aria-describedby\",\"value\"],[\"date\",\"form-control\",\"DueDateAdd\",\"addDueDateDescription\",[20,[\"model\",\"copy\",\"dueDate\"]]]]],false],[0,\"\\n  \"],[6,\"small\"],[9,\"id\",\"addDueDateDescription\"],[9,\"class\",\"form-text text-muted\"],[7],[0,\"La date de fin de votre projet \"],[8],[0,\"\\n\\n  \"],[6,\"br\"],[7],[8],[0,\"\\n\\n  \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n    \"],[6,\"label\"],[7],[0,\"Propriétaire\"],[8],[0,\"\\n\"],[4,\"ui-dropdown\",null,[[\"class\",\"selected\",\"onChange\"],[\"selection\",[20,[\"model\",\"copy\",\"owner\"]],[25,\"action\",[[19,0,[]],[25,\"mut\",[[20,[\"model\",\"copy\",\"owner\"]]],null]],null]]],{\"statements\":[[0,\"      \"],[6,\"div\"],[9,\"class\",\"default text\"],[7],[1,[25,\"if\",[[20,[\"model\",\"owner\"]],[20,[\"model\",\"owner\",\"identity\"]],\"Propriétaire\"],null],false],[8],[0,\"\\n      \"],[6,\"i\"],[9,\"class\",\"dropdown icon\"],[7],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"menu\"],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"model\",\"devs\"]]],null,{\"statements\":[[0,\"          \"],[6,\"div\"],[10,\"data-value\",[26,[[25,\"map-value\",[[19,2,[]],[19,3,[]]],null]]]],[9,\"class\",\"item\"],[7],[0,\"\\n            \"],[1,[19,3,[\"identity\"]],false],[0,\"\\n          \"],[8],[0,\"\\n\"]],\"parameters\":[3]},null],[0,\"      \"],[8],[0,\"\\n\"]],\"parameters\":[1,2]},null],[0,\"  \"],[8],[0,\"\\n  \"],[6,\"br\"],[7],[8],[0,\"\\n  \"],[6,\"button\"],[9,\"class\",\"ui button green\"],[3,\"action\",[[19,0,[]],\"save\",[20,[\"model\"]]]],[7],[0,\"Modifier\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"projects\"],[[\"class\"],[\"ui button red\"]],{\"statements\":[[0,\"    Annuler\\n\"]],\"parameters\":[]},null],[8]],\"hasEval\":false}", "meta": { "moduleName": "prjt4/templates/projects/edit.hbs" } });
});
define("prjt4/templates/projects/new", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "5ktgsoqj", "block": "{\"symbols\":[\"execute\",\"mapper\",\"owner\"],\"statements\":[[6,\"div\"],[9,\"class\",\"form-group col-md-6 \"],[7],[0,\"\\n  \"],[6,\"label\"],[9,\"for\",\"NameAdd\"],[7],[0,\"Nom\"],[8],[0,\"\\n  \"],[1,[25,\"input\",null,[[\"type\",\"class\",\"id\",\"aria-describedby\",\"value\",\"placeholder\"],[\"text\",\"form-control \",\"NameAdd\",\"addNameDescription\",[20,[\"model\",\"copy\",\"name\"]],\"Nom\"]]],false],[0,\"\\n  \"],[6,\"small\"],[9,\"id\",\"addNameDescription\"],[9,\"class\",\"form-text text-muted\"],[7],[0,\"C'est ici que vous ajouter le nom d'un projet\"],[8],[0,\"\\n\\n  \"],[6,\"br\"],[7],[8],[0,\"\\n\\n  \"],[6,\"label\"],[9,\"for\",\"DescriptifAdd\"],[7],[0,\"Description\"],[8],[0,\"\\n  \"],[1,[25,\"textarea\",null,[[\"class\",\"id\",\"aria-describedby\",\"value\",\"placeholder\"],[\"form-control\",\"DescriptifAdd\",\"addDescriptifDescription\",[20,[\"model\",\"copy\",\"descriptif\"]],\"descriptif\"]]],false],[0,\"\\n  \"],[6,\"small\"],[9,\"id\",\"addDescriptifDescription\"],[9,\"class\",\"form-text text-muted\"],[7],[0,\"Décrivez rapidement ou avec des mots clé votre projet\"],[8],[0,\"\\n\\n  \"],[6,\"br\"],[7],[8],[0,\"\\n\\n  \"],[6,\"label\"],[9,\"for\",\"StartDateAdd\"],[7],[0,\"Date De Début\"],[8],[0,\"\\n  \"],[1,[25,\"input\",null,[[\"type\",\"class\",\"id\",\"aria-describedby\",\"value\"],[\"date\",\"form-control\",\"StartDateAdd\",\"addStartDateDescription\",[20,[\"model\",\"copy\",\"startDate\"]]]]],false],[0,\"\\n  \"],[6,\"small\"],[9,\"id\",\"addStartDateDescription\"],[9,\"class\",\"form-text text-muted\"],[7],[0,\"La date du début de votre projet \"],[8],[0,\"\\n\\n  \"],[6,\"br\"],[7],[8],[0,\"\\n\\n  \"],[6,\"label\"],[9,\"for\",\"DueDateAdd\"],[7],[0,\"Date de Fin\"],[8],[0,\"\\n  \"],[1,[25,\"input\",null,[[\"type\",\"class\",\"id\",\"aria-describedby\",\"value\"],[\"date\",\"form-control\",\"DueDateAdd\",\"addDueDateDescription\",[20,[\"model\",\"copy\",\"dueDate\"]]]]],false],[0,\"\\n  \"],[6,\"small\"],[9,\"id\",\"addDueDateDescription\"],[9,\"class\",\"form-text text-muted\"],[7],[0,\"La date de fin de votre projet \"],[8],[0,\"\\n\\n  \"],[6,\"br\"],[7],[8],[0,\"\\n\\n  \"],[6,\"div\"],[9,\"class\",\"field\"],[7],[0,\"\\n    \"],[6,\"label\"],[7],[0,\"Propriétaire\"],[8],[0,\"\\n\"],[4,\"ui-dropdown\",null,[[\"class\",\"selected\",\"onChange\"],[\"selection\",[20,[\"model\",\"copy\",\"owner\"]],[25,\"action\",[[19,0,[]],[25,\"mut\",[[20,[\"model\",\"copy\",\"owner\"]]],null]],null]]],{\"statements\":[[0,\"      \"],[6,\"div\"],[9,\"class\",\"default text\"],[7],[1,[25,\"if\",[[20,[\"model\",\"owner\"]],[20,[\"model\",\"owner\",\"identity\"]],\"Propriétaire\"],null],false],[8],[0,\"\\n      \"],[6,\"i\"],[9,\"class\",\"dropdown icon\"],[7],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"menu\"],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"model\",\"devs\"]]],null,{\"statements\":[[0,\"          \"],[6,\"div\"],[10,\"data-value\",[26,[[25,\"map-value\",[[19,2,[]],[19,3,[]]],null]]]],[9,\"class\",\"item\"],[7],[0,\"\\n            \"],[1,[19,3,[\"identity\"]],false],[0,\"\\n          \"],[8],[0,\"\\n\"]],\"parameters\":[3]},null],[0,\"      \"],[8],[0,\"\\n\"]],\"parameters\":[1,2]},null],[0,\"  \"],[8],[0,\"\\n  \"],[6,\"br\"],[7],[8],[0,\"\\n  \"],[6,\"button\"],[9,\"class\",\"ui button green\"],[3,\"action\",[[19,0,[]],\"save\",[20,[\"model\"]]]],[7],[0,\"Ajouter\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"projects\"],[[\"class\"],[\"ui button red\"]],{\"statements\":[[0,\"    Annuler\\n\"]],\"parameters\":[]},null],[8],[0,\"\\n\\n\"],[1,[18,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "prjt4/templates/projects/new.hbs" } });
});
define("prjt4/templates/projects/remove", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "u2aCAcPj", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"form-group col-md-6 \"],[7],[0,\"\\n  \"],[6,\"p\"],[7],[0,\"confirmer la suppression de \"],[1,[20,[\"model\",\"copy\",\"name\"]],false],[0,\" ?\"],[8],[0,\"\\n  \"],[6,\"button\"],[9,\"class\",\"ui button green\"],[3,\"action\",[[19,0,[]],\"delete\",[20,[\"model\"]]]],[7],[0,\"\\n    Supprimer\\n  \"],[8],[0,\"\\n\"],[4,\"link-to\",[\"projects\"],[[\"class\"],[\"ui button red\"]],{\"statements\":[[0,\"    Annuler\\n\"]],\"parameters\":[]},null],[8],[0,\"\\n\\n\"],[1,[18,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "prjt4/templates/projects/remove.hbs" } });
});
define("prjt4/transforms/utc", ["exports", "ember-data"], function (exports, _emberData) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  exports.default = _emberData.default.Transform.extend({
    deserialize: function deserialize(serialized) {
      var type = typeof serialized === "undefined" ? "undefined" : _typeof(serialized);
      if (type === "string") {
        return new Date(Date.parse(serialized));
      } else if (type === "number") {
        return new Date(serialized);
      } else if (serialized != null && type === "object") {
        return new Date(serialized.$numberLong);
      } else if (serialized === null || serialized === undefined) {
        return serialized;
      } else {
        return null;
      }
    },
    serialize: function serialize(deserialized) {
      if (deserialized instanceof Date) {
        return deserialized.toJSON();
      } else {
        return new Date(Date.parse(deserialized));
      }
    }
  });
});


define('prjt4/config/environment', [], function() {
  var prefix = 'prjt4';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("prjt4/app")["default"].create({"name":"prjt4","version":"0.0.0+73c536e3"});
}
//# sourceMappingURL=prjt4.map
