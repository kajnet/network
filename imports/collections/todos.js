import { Mongo } from 'meteor/mongo';


Meteor.methods({
  'tasks.insert': function() {
    // if (!this.userId) {
    //   throw new Meteor.Error('Not logged in');
    // }

    return Tasks.insert({
      id: _id,
      text: text,
      createdAt: new Date(),
      ownerId: this.userId
    });
  },

  // 'docs.remove': function(doc) {
  //   return Docs.remove(doc);
  // },
  //
  // 'docs.update': function(doc, docContent) {
  //   return Docs.update(doc._id, { $set: { content: docContent } });
  // },
  //
  // 'docs.share': function(doc, email) {
  //   return Docs.update(doc._id, { $addToSet: { sharedWith: email } });
  // }
});

export const Todos = new Mongo.Collection('todos');
