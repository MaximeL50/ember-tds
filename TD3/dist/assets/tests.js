'use strict';

define("td4/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/contacts/add.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/contacts/add.js should pass ESLint\n\n');
  });
  QUnit.test('models/contact.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/contact.js should pass ESLint\n\n');
  });
  QUnit.test('models/person.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/person.js should pass ESLint\n\n');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/contacts.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/contacts.js should pass ESLint\n\n2:21 - \'computed\' is defined but never used. (no-unused-vars)');
  });
  QUnit.test('routes/contacts/add.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/contacts/add.js should pass ESLint\n\n');
  });
  QUnit.test('routes/contacts/edit.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/contacts/edit.js should pass ESLint\n\n');
  });
});
define("td4/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('td4/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'td4/templates/application.hbs should pass TemplateLint.\n\ntd4/templates/application.hbs\n  2:0  error  Incorrect indentation for `{{outlet}}` beginning at L2:C0. Expected `{{outlet}}` to be at an indentation of 2 but was found at 0.  block-indentation\n');
  });
  QUnit.test('td4/templates/contacts.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'td4/templates/contacts.hbs should pass TemplateLint.\n\ntd4/templates/contacts.hbs\n  12:0  error  Incorrect indentation for `<tbody>` beginning at L12:C0. Expected `<tbody>` to be at an indentation of 2 but was found at 0.  block-indentation\n  13:4  error  Incorrect indentation for `{{#each}}` beginning at L13:C4. Expected `{{#each}}` to be at an indentation of 2 but was found at 4.  block-indentation\n  14:4  error  Incorrect indentation for `<tr>` beginning at L14:C4. Expected `<tr>` to be at an indentation of 6 but was found at 4.  block-indentation\n  20:9  error  Incorrect indentation for `td` beginning at L18:C6. Expected `</td>` ending at L20:C9 to be at an indentation of 6 but was found at 4.  block-indentation\n  18:10  error  Incorrect indentation for `<button>` beginning at L18:C10. Expected `<button>` to be at an indentation of 8 but was found at 10.  block-indentation\n  19:6  error  Incorrect indentation for `<button>` beginning at L19:C6. Expected `<button>` to be at an indentation of 8 but was found at 6.  block-indentation\n  26:0  error  Incorrect indentation for `ajouter un contact\n` beginning at L26:C0. Expected `ajouter un contact\n` to be at an indentation of 2 but was found at 0.  block-indentation\n  25:11  error  you must use double quotes in templates  quotes\n');
  });
  QUnit.test('td4/templates/contacts/add.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'td4/templates/contacts/add.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('td4/templates/contacts/edit.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'td4/templates/contacts/edit.hbs should pass TemplateLint.\n\n');
  });
});
define("td4/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/adapters/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/controllers/contacts/add-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/contacts/add-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/contacts-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/contacts-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/person-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/person-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/contact-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/contact-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/contacts/add-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/contacts/add-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/contacts/edit-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/contacts/edit-test.js should pass ESLint\n\n');
  });
});
define("td4/tests/test-helper", ["td4/app", "td4/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("td4/tests/unit/adapters/application-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Adapter | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let adapter = this.owner.lookup('adapter:application');
      assert.ok(adapter);
    });
  });
});
define("td4/tests/unit/controllers/contacts/add-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | contacts/add', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:contacts/add');
      assert.ok(controller);
    });
  });
});
define("td4/tests/unit/models/contacts-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | contacts', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('contacts', {});
      assert.ok(model);
    });
  });
});
define("td4/tests/unit/models/person-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | person', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('person', {});
      assert.ok(model);
    });
  });
});
define("td4/tests/unit/routes/contact-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | contact', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:contact');
      assert.ok(route);
    });
  });
});
define("td4/tests/unit/routes/contacts/add-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | contacts/add', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:contacts/add');
      assert.ok(route);
    });
  });
});
define("td4/tests/unit/routes/contacts/edit-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | contacts/edit', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:contacts/edit');
      assert.ok(route);
    });
  });
});
define('td4/config/environment', [], function() {
  var prefix = 'td4';
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

require('td4/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
