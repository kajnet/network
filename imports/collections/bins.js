import { Mongo } from 'meteor/mongo';

Meteor.methods({
  'bins.insert': function() {
    if (!this.userId) {
      throw new Meteor.Error('Not logged in');
    }

    return Bins.insert({
      createdAt: new Date(),
      content: '',
      sharedWith: [],
      ownerId: this.userId
    });
  },

  'bins.remove': function(bin) {
    return Bins.remove(bin);
  },

  'bins.update': function(bin, binContent) {
    return Bins.update(bin._id, { $set: { content: binContent } });
  },

  'bins.share': function(bin, email) {
    return Bins.update(bin._id, { $push: { sharedWith: email } });
  }

  // 'bins.share': function(bin, email) {
  //   return Bins.update(bin._id, { $addToSet: { sharedWith: email } });
  // }
});

export const Bins = new Mongo.Collection('bins');
