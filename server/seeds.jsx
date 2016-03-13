Meteor.startup(() => {
  if (Meteor.users.find().count() === 0) {
    Accounts.createUser({
      email: "123@123.com",
      password: "123123"
    });
  }
});
