import React, { useState } from 'react';

// Simulated Database
let usersDatabase = [
  { id: 1, username: 'user1@gmail.com', password: 'pass1', college: 'CUNY College A' },
  // ... more predefined users
];

function App() {
  const [users, setUsers] = useState(usersDatabase); // Simulate loading users from a database
  const [currentUser, setCurrentUser] = useState(null); // State to keep track of the current logged in user

  const handleSignUp = (newUser) => {
    const newUserWithId = { ...newUser, id: users.length + 1 }; // Assign a new ID to the new user
    setUsers([...users, newUserWithId]); // Add the new user to the "database"
    usersDatabase = [...users, newUserWithId]; // Update the simulated database
  };

  const handleLogin = (username, password) => {
    const user = users.find((user) => user.username === username && user.password === password);
    if (user) {
      setCurrentUser(user); // Set the current user if credentials match
    } else {
      alert('Invalid credentials');
    }
  };

  const handleLogout = () => {
    setCurrentUser(null); // Clear the current user, simulating a logout
  };

  // Render the signup form, login form, and a logout button
  return (
    <div>
      {/* Sign Up Form */}
      <div>
        <h2>Sign Up</h2>
        <form onSubmit={(event) => {
          event.preventDefault();
          handleSignUp({
            username: event.target.username.value,
            password: event.target.password.value,
            college: event.target.college.value,
          });
        }}>
          <input type="text" name="username" placeholder="Username" required />
          <input type="password" name="password" placeholder="Password" required />
          <input type="text" name="college" placeholder="College" required />
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <div>
        <h2>Login</h2>
        <form onSubmit={(event) => {
          event.preventDefault();
          handleLogin(event.target.username.value, event.target.password.value);
        }}>
          <input type="text" name="username" placeholder="Username" required />
          <input type="password" name="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
      </div>

      {/ Logout Button */}
      {currentUser && (
        <div>
          <p>Welcome, {currentUser.username}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
}

      export default App;