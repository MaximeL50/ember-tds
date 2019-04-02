'use strict';

define('prjt4/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('models/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/application.js should pass ESLint\n\n');
  });

  QUnit.test('models/developer.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/developer.js should pass ESLint\n\n');
  });

  QUnit.test('models/developers.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/developers.js should pass ESLint\n\n');
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

  QUnit.test('models/story.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/story.js should pass ESLint\n\n');
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
    assert.ok(false, 'routes/developers/new.js should pass ESLint\n\n2:8 - \'EmberObject\' is defined but never used. (no-unused-vars)\n2:21 - \'get\' is defined but never used. (no-unused-vars)\n2:25 - \'set\' is defined but never used. (no-unused-vars)\n13:13 - Unexpected console statement. (no-console)\n18:61 - Use import EmberObject from \'@ember/object\'; instead of using Ember.Object (ember/new-module-imports)\n18:61 - \'Ember\' is not defined. (no-undef)');
  });

  QUnit.test('routes/developers/remove.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/developers/remove.js should pass ESLint\n\n2:21 - \'get\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('routes/project.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/project.js should pass ESLint\n\n');
  });

  QUnit.test('routes/projects.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/projects.js should pass ESLint\n\n');
  });

  QUnit.test('routes/projects/edit.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/projects/edit.js should pass ESLint\n\n');
  });

  QUnit.test('routes/projects/new.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/projects/new.js should pass ESLint\n\n2:21 - \'get\' is defined but never used. (no-unused-vars)\n2:25 - \'set\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('routes/projects/remove.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/projects/remove.js should pass ESLint\n\n2:21 - \'get\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application.js should pass ESLint\n\n');
  });

  QUnit.test('transforms/utc.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'transforms/utc.js should pass ESLint\n\n');
  });
});
define('prjt4/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    Ember.run(application, 'destroy');
  }
});
define('prjt4/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'prjt4/tests/helpers/start-app', 'prjt4/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Ember.RSVP.resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };
});
define('prjt4/tests/helpers/start-app', ['exports', 'prjt4/app', 'prjt4/config/environment'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = Ember.merge({}, _environment.default.APP);
    attributes.autoboot = true;
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('prjt4/tests/test-helper', ['prjt4/app', 'prjt4/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('prjt4/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
});
require('prjt4/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
