import Component from '@ember/component';
import { computed } from '@ember/object';
import RSVP from 'rsvp';
import { inject } from '@ember/service';
export default Component.extend({
    store: Ember.inject.service(),
    session: inject('session'),
    testEPromise: computed('simple', function () {
        let deferred1 = RSVP.defer();
        this.set('deferred1', deferred1);
        this.set('promise', deferred1.promise);
        return this.promise;
    }),
    actions: {
        authenticate: function () {
            const credentials = this.getProperties('username', 'password');
            const authenticator = 'authenticator:token'; // or 'authenticator:jwt'

            this.get('session').authenticate(authenticator, credentials);
        }
    }

});
