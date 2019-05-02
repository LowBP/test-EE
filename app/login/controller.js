import Controller from '@ember/controller';
import { inject } from '@ember/service';

export default Controller.extend({
    session: inject('session'),
    username: 'admin',
    password: 'abc123',

    actions: {
        authenticate: function () {
            const credentials = this.getProperties('username', 'password');
            const authenticator = 'authenticator:jwt';

            // this.get('session').authenticate(authenticator, credentials);
            this.get('session').authenticate(authenticator, credentials).catch((reason) => {
                this.set('errorMessage', reason.error || reason);
                console.log(this.errorMessage)
            });
        }
    }
});
