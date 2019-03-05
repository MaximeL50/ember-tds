'use strict';

define("td3/tests/lint/app.lint-test", [], function () {
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
  QUnit.test('controllers/contacts.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/contacts.js should pass ESLint\n\n2:9 - \'set\' is defined but never used. (no-unused-vars)\n2:14 - \'get\' is defined but never used. (no-unused-vars)\n8:12 - \'contact\' is defined but never used. (no-unused-vars)\n11:20 - \'deleteds\' is defined but never used. (no-unused-vars)');
  });
  QUnit.test('controllers/contacts/add.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/contacts/add.js should pass ESLint\n\n');
  });
  QUnit.test('models/contact.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/contact.js should pass ESLint\n\n');
  });
  QUnit.test('models/contacts.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/contacts.js should pass ESLint\n\n');
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
    assert.ok(true, 'routes/contacts.js should pass ESLint\n\n');
  });
  QUnit.test('routes/contacts/add.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/contacts/add.js should pass ESLint\n\n');
  });
  QUnit.test('routes/contacts/edit.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/contacts/edit.js should pass ESLint\n\n');
  });
  QUnit.test('serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application.js should pass ESLint\n\n');
  });
});
define("td3/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('td3/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'td3/templates/application.hbs should pass TemplateLint.\n\ntd3/templates/application.hbs\n  3:0  error  Incorrect indentation for `{{outlet}}` beginning at L3:C0. Expected `{{outlet}}` to be at an indentation of 2 but was found at 0.  block-indentation\n');
  });
  QUnit.test('td3/templates/contacts.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'td3/templates/contacts.hbs should pass TemplateLint.\n\ntd3/templates/contacts.hbs\n  6:4  error  Incorrect indentation for `<tr>` beginning at L6:C4. Expected `<tr>` to be at an indentation of 6 but was found at 4.  block-indentation\n  14:4  error  Incorrect indentation for `{{#each}}` beginning at L14:C4. Expected `{{#each}}` to be at an indentation of 6 but was found at 4.  block-indentation\n  15:4  error  Incorrect indentation for `<tr>` beginning at L15:C4. Expected `<tr>` to be at an indentation of 6 but was found at 4.  block-indentation\n');
  });
  QUnit.test('td3/templates/contacts/add.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'td3/templates/contacts/add.hbs should pass TemplateLint.\n\ntd3/templates/contacts/add.hbs\n  4:42  error  you must use double quotes in templates  quotes\n');
  });
  QUnit.test('td3/templates/contacts/edit.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'td3/templates/contacts/edit.hbs should pass TemplateLint.\n\n');
  });
});
define("td3/tests/lint/tests.lint-test", [], function () {
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
  QUnit.test('unit/controllers/contacts-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/contacts-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/controllers/contacts/add-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/contacts/add-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/controllers/contcats/add-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/contcats/add-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/contact-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/contact-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/contacts-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/contacts-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/contacts-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/contacts-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/contacts/add-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/contacts/add-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/contacts/edit-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/contacts/edit-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/serializers/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/application-test.js should pass ESLint\n\n');
  });
});
define("td3/tests/test-helper", ["td3/app", "td3/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("td3/tests/unit/adapters/application-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Adapter | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let adapter = this.owner.lookup('adapter:application');
      assert.ok(adapter);
    });
  });
});
define("td3/tests/unit/controllers/contacts-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | contacts', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:contacts');
      assert.ok(controller);
    });
  });
});
define("td3/tests/unit/controllers/contacts/add-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | contacts/add', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:contacts/add');
      assert.ok(controller);
    });
  });
});
define("td3/tests/unit/controllers/contcats/add-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | contcats/add', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:contcats/add');
      assert.ok(controller);
    });
  });
});
define("td3/tests/unit/models/contact-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | contact', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('contact', {});
      assert.ok(model);
    });
  });
});
define("td3/tests/unit/models/contacts-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
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
define("td3/tests/unit/routes/contacts-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | contacts', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:contacts');
      assert.ok(route);
    });
  });
});
define("td3/tests/unit/routes/contacts/add-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | contacts/add', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:contacts/add');
      assert.ok(route);
    });
  });
});
define("td3/tests/unit/routes/contacts/edit-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | contacts/edit', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:contacts/edit');
      assert.ok(route);
    });
  });
});
define("td3/tests/unit/serializers/application-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Serializer | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let serializer = store.serializerFor('application');
      assert.ok(serializer);
    });
    (0, _qunit.test)('it serializes records', function (assert) {
      let store = this.owner.lookup('service:store');
      let record = store.createRecord('application', {});
      let serializedRecord = record.serialize();
      assert.ok(serializedRecord);
    });
  });
});
define('td3/config/environment', [], function() {
  var prefix = 'td3';
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

require('td3/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
