import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({
  fastboot: Ember.inject.service(),

  isPost: Ember.computed.equal('fastboot.request.method', 'POST'),
});
