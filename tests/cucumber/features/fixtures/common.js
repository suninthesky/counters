fixtures.common = {

  reset: function () {
    server.execute(function() {
      Meteor.users.remove({});
    });
  }

};
