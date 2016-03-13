FlowRouter.route("/", {
  name: "Home",
  action(params) {
    renderLayoutWith(<Home />);
  }
});

FlowRouter.route("/login", {
  name: "Login",
  action(params) {
    renderLayoutWith(<Login />);
  }
});

FlowRouter.route("/counters", {
  name: "Counters",
  action(params) {
    renderLayoutWith(<Counters />);
  }
});

function renderLayoutWith(component) {
  ReactLayout.render(Layout, {
    header: <Header />,
    content: component,
    footer: <Footer />
  });
};
