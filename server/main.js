import _ from 'lodash';
import { Meteor } from 'meteor/meteor';
import { Docs } from '../imports/collections/docs';
import { Employees } from '../imports/collections/employees';
import { Tasks } from '../imports/collections/todos';
import { image, helpers } from 'faker';

Meteor.startup(() => {
  const numberRecords = Employees.find({}).count();
  // console.log(numberRecords);
  if (!numberRecords) {
    _.times(24, () => {
      const { name, email, phone } = helpers.createCard();

      Employees.insert({
        name: name,
        email: email,
        phone: phone,
        avatar: image.avatar()
      });
    });
  }

  Meteor.publish('todos', function() {
    return Todos.find({ ownerId: this.userId });
  });

  Meteor.publish('employees', function(per_page) {
    return Employees.find({}, { limit: per_page });
  });

  Meteor.publish('docs', function() {
    return Docs.find({ ownerId: this.userId });
  });

  Meteor.publish('sharedDocs', function() {
    const user = Meteor.users.findOne(this.userId);

    if (!user) { return; }

    const emails = user.emails.map(email => email.address);

    return Docs.find({
      sharedWith: { $in: emails }
    });
  });
});
