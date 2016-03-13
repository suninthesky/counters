Login = React.createClass({

  onSubmit(e) {
    e.preventDefault();
    var name, password
    email = e.target.email.value;
    password = e.target.password.value;
    Meteor.loginWithPassword(email, password, function(err) {
      if(err) {
        console.log(err.reason);
      } else {
        FlowRouter.go('Counters');
      }
    });
  },

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={ this.onSubmit }>
          <input type="text" name="email" label="Email" placeholder="Email" />
          <input type="password" name="password" label="Password" placeholder="Password" />
          <input type="submit"/>
        </form>
      </div>
    );
  }

});
