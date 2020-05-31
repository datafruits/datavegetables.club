import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | world-wide-wow', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:world-wide-wow');
    assert.ok(route);
  });
});
