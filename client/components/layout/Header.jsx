Header = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      currentUser: Meteor.user()
    }
  },

  handleLogout() {
    Meteor.logout();
  },

  render() {
    let loginButton;
    let { currentUser } = this.data;

    if(currentUser) {
      loginButton = (
        <li><a href="/" onClick={ this.handleLogout }>Logout</a></li>
      )
    } else {
      loginButton = (
        <li><a className="login" href="/login">Login</a></li>
      )
    }

    return (
      <div>
        <li><a href="/">Home</a></li>
        { loginButton }
      </div>
    );
  }

});
