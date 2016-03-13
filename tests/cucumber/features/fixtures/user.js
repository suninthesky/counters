fixtures.user = {

  create: function () {
    server.execute(function() {
      Accounts.createUser({
        email: "123@123.com",
        password: "123123"
      });
    });
  },

  logout: function () {
    client.execute(function() {
      if (Meteor.user()) {
        Meteor.logout();
      }
    });
  }

};
