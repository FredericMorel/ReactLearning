import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastId: "3",
      inputFields: "",
      users: props.users,
      title: props.title
    };
  }

  addUser(e) {
    e.preventDefault();
    if (this.state.inputFields !== "") {
      const users2 = this.state.users.slice();

      let newId = parseInt(this.state.lastId);
      newId++;

      const user = {
        id: newId,
        name: this.state.inputFields.value
      };
      this.state.lastId = user.id;

      this.state.inputFields.value = "";

      users2.push(user);
      this.setState({ users: users2 });
    } /*  */
  }

  changeGet(event) {
    this.state.inputFields = event.target;
  }

  removeUser(user) {
    /* copy tableau */
    /*  console.log(user.name); */
    const users2 = this.state.users.slice();

    const index = users2.findIndex((us) => {
      return (us.name = user.name);
    });
    users2.splice(index, 1);
    this.setState({ users: users2 });
    /* console.log(this.state.users); */

    /* console.log(users); */
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>{this.state.title}</h1>
        <ul>
          {this.state.users.map((user) => {
            return (
              <li key={user.id.toString()}>
                <h1>{user.name} </h1>
                <button onClick={() => this.removeUser(user)}>Delete </button>
              </li>
            );
          })}
        </ul>
        <form>
          <input type="text" name="sa" onChange={this.changeGet.bind(this)} />
          <button onClick={(e) => this.addUser(e)}>Envoyer </button>
        </form>
      </div>
    );
  }
}
const user = [
  { id: 1, name: "Jonathan" },
  { id: 2, name: "fred" },
  { id: 3, name: "Abdallah" },
  { id: 4, name: "Manu" }
];
const user2 = [
  { id: 1, name: "Joe" },
  { id: 2, name: "Tom" },
  { id: 3, name: "Ted" },
  { id: 4, name: "Pit" }
];

const rootElement = document.getElementById("root");
ReactDOM.render(
  <div>
    <App users={user} title="liste 1" />;
    <App users={user2} title="liste 2" />;
  </div>,
  rootElement
);
