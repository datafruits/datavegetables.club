import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | manga-relay', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:manga-relay');
    assert.ok(route);
  });
});
