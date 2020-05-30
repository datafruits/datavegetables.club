import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | vol01', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:vol01');
    assert.ok(route);
  });
});
