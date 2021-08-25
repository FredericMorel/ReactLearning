import "./styles.css";

/* export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
} */

const name = " Frédéric";
const state = {
  users: [
    { id: 1, name: "Frederic" },
    { id: 2, name: "Franck" },
    { id: 3, name: "John" }
  ]
};

function removeUser(user) {
  /* copy tabkleau */
  console.log(user.name);
  const users = state.users.slice();

  const index = users.findIndex((us) => {
    return (us.name = user.name);
  });
  users.splice(index, 1);
  console.log(users);
}

let UserList = state.users.map((user) => {
  return (
    <div>
      <h1>{user.name} </h1>
      <button onClick={() => removeUser(user)}>Delete </button>
    </div>
  );
});
export default function App() {
  return <div>{UserList}</div>;
}
