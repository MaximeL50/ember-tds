'use strict';

define("prjt4/tests/lint/app.lint-test", [], function () {
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
  QUnit.test('models/developer.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/developer.js should pass ESLint\n\n');
  });
  QUnit.test('models/project.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/project.js should pass ESLint\n\n');
  });
  QUnit.test('models/step.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/step.js should pass ESLint\n\n');
  });
  QUnit.test('models/storie.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/storie.js should pass ESLint\n\n');
  });
  QUnit.test('models/tag.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/tag.js should pass ESLint\n\n');
  });
  QUnit.test('models/task.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/task.js should pass ESLint\n\n');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/developers.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/developers.js should pass ESLint\n\n');
  });
  QUnit.test('routes/developers/edit.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/developers/edit.js should pass ESLint\n\n');
  });
  QUnit.test('routes/developers/new.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/developers/new.js should pass ESLint\n\n2:8 - \'EmbetObject\' is defined but never used. (no-unused-vars)\n2:21 - \'get\' is defined but never used. (no-unused-vars)\n2:25 - \'set\' is defined but never used. (no-unused-vars)\n12:58 - Use import EmberObject from \'@ember/object\'; instead of using Ember.Object (ember/new-module-imports)\n12:58 - \'Ember\' is not defined. (no-undef)');
  });
  QUnit.test('serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application.js should pass ESLint\n\n');
  });
});
define("prjt4/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('prjt4/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'prjt4/templates/application.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('prjt4/templates/developers.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'prjt4/templates/developers.hbs should pass TemplateLint.\n\nprjt4/templates/developers.hbs\n  6:2  error  Incorrect indentation for `<tr>` beginning at L6:C2. Expected `<tr>` to be at an indentation of 4 but was found at 2.  block-indentation\n  12:2  error  Incorrect indentation for `{{#each}}` beginning at L12:C2. Expected `{{#each}}` to be at an indentation of 4 but was found at 2.  block-indentation\n  18:12  error  Incorrect indentation for `{{! <i class="ui icon edit"></i> }}` beginning at L18:C12. Expected `{{! <i class="ui icon edit"></i> }}` to be at an indentation of 10 but was found at 12.  block-indentation\n  19:12  error  Incorrect indentation for `<i>` beginning at L19:C12. Expected `<i>` to be at an indentation of 10 but was found at 12.  block-indentation\n');
  });
  QUnit.test('prjt4/templates/developers/edit.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'prjt4/templates/developers/edit.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('prjt4/templates/developers/new.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'prjt4/templates/developers/new.hbs should pass TemplateLint.\n\nprjt4/templates/developers/new.hbs\n  2:14  error  you must use double quotes in templates  quotes\n');
  });
});
define("prjt4/tests/lint/tests.lint-test", [], function () {
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
  QUnit.test('unit/models/developer-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/developer-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/project-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/project-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/step-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/step-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/storie-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/storie-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/tag-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/tag-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/task-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/task-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/developers-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/developers-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/developers/edit-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/developers/edit-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/developers/new-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/developers/new-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/serializers/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/application-test.js should pass ESLint\n\n');
  });
});
define("prjt4/tests/test-helper", ["prjt4/app", "prjt4/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("prjt4/tests/unit/adapters/application-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Adapter | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let adapter = this.owner.lookup('adapter:application');
      assert.ok(adapter);
    });
  });
});
define("prjt4/tests/unit/models/developer-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | developer', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('developer', {});
      assert.ok(model);
    });
  });
});
define("prjt4/tests/unit/models/project-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | project', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('project', {});
      assert.ok(model);
    });
  });
});
define("prjt4/tests/unit/models/step-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | step', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('step', {});
      assert.ok(model);
    });
  });
});
define("prjt4/tests/unit/models/storie-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | storie', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('storie', {});
      assert.ok(model);
    });
  });
});
define("prjt4/tests/unit/models/tag-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | tag', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('tag', {});
      assert.ok(model);
    });
  });
});
define("prjt4/tests/unit/models/task-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | task', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('task', {});
      assert.ok(model);
    });
  });
});
define("prjt4/tests/unit/routes/developers-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | developers', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:developers');
      assert.ok(route);
    });
  });
});
define("prjt4/tests/unit/routes/developers/edit-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | developers/edit', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:developers/edit');
      assert.ok(route);
    });
  });
});
define("prjt4/tests/unit/routes/developers/new-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | developers/new', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:developers/new');
      assert.ok(route);
    });
  });
});
define("prjt4/tests/unit/serializers/application-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
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

require('prjt4/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
