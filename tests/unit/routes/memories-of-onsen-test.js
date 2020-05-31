import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | memories_of_onsen', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:memories-of-onsen');
    assert.ok(route);
  });
});
