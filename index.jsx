var Card = React.createClass({
 getInitialState: function () {
   return{};
 },
 componentDidMount: function () {
   var component = this;
   $.get("https://api.github.com/users/" + this.props.login, function (data) {
     component.setState(data);
   })
 },
 render: function () {
   return (
     <div>
       <img src={this.state.avatar_url} width="80" />
       <h3>{this.state.name}</h3>
       <hr/>
     </div>
     );
 }
});

var Form = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    var loginInput = React.findDOMNode(this.refs.login);
    this.props.addCard(loginInput.value);
    loginInput.value = '';
  },
  render: function () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input placeholder="github login" ref="login" />
        <button>Add</button>
      </form>
    )
  }
});

var Main = React.createClass({
  getInitialState: function () {
    return {logins: []};
  },
  addCard: function (loginToAdd) {
    this.setState({logins: this.state.logins.concat(loginToAdd)});
  },
  render: function () {
    var cards = this.state.logins.map(function (login) {
      return (<Card login={login} />);
    });
    return (
      <div>
        <Form addCard={this.addCard} />
        {cards}
      </div>
     )
  }
});

React.render(<Main />, document.getElementById('root'));

// var Card = React.createClass({
//   getInitialState: function () {
//     return{};
//   },
//   componentDidMount: function () {
//     var component = this;
//     $.get("https://api.github.com/users/richi1717", function (data) {
//       component.setState(data);
//     })
//   },
//   render: function () {
//     return (
//       <div>
//         <img src={this.state.avatar_url} width="80" />
//         <h3>{this.state.name}</h3>
//         <hr/>
//       </div>
//       );
//   }
// })

// var Main = React.createClass({
//   render: function () {
//     return (
//       <div>
//         <Card login="richi1717" />
//         <Card login="petehunt" />
//       </div>
//     )
//   }
// });

// React.render(<Main />, document.getElementById('root'));
// var Card = React.createClass({
//   getInitialState: function () {
//     return{};
//   },
//   componentDidMount: function () {
//     var component = this;
//     $.get("http://localhost:3000/monsters/" + this.props.login, function (data) {
//       component.setState(data);
//     })
//   },
//   render: function () {
//     return (
//       <div>
        
//         <h3>{this.state.name}</h3>
//         <h3>ID: {this.state.id}</h3>
//         <h3>Strength: {this.state.str}</h3>
//         <h3>Defense: {this.state.def}</h3>
//         <h3>Magic Defense: {this.state.magicDef}</h3>
//         <h3>Section(s): {this.state.sections}</h3>
//         <h3>Type: {this.state.type}</h3>
//         <h3>Max HP: {this.state.maxHp}</h3>
//         <h3>Max MP: {this.state.maxMp}</h3>
//         <h3>Magic: {this.state.magic}</h3>
//         <hr/>
//       </div>
//       );
//   }
// })

// var Main = React.createClass({
//   render: function () {
//     return (
//       <div>
//         <Card login="1" />
//         <Card login="2" />
//         <Card login="3" />
//         <Card login="4" />
//         <Card login="5" />
//         <Card login="6" />
     
//       </div>
//     )
//   }
// });

// React.render(<Main />, document.getElementById('root'));