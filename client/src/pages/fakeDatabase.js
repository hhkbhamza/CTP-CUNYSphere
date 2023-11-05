import fakeDatabase from './fakeDatabase.json';

function login(username, password) {
  const user = fakeDatabase.users.find(user => user.username === username && user.password === password);
  if (user) {
    console.log('Login successful!');
    // Handle successful login, e.g., set user session, redirect to dashboard, etc.
  } else {
    console.log('Login failed: Incorrect username or password');
    // Handle failed login
  }
}