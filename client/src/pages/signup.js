function signup(username, password, college) {
    const exists = fakeDatabase.users.some(user => user.username === username);
    if (exists) {
      console.log('Signup failed: Username already exists');
      // Handle signup failure due to existing username
    } else {
      const newUser = {
        id: String(fakeDatabase.users.length + 1),
        username,
        password,
        college
      };
      fakeDatabase.users.push(newUser);
      console.log('Signup successful!');
      // Handle successful signup
    }
  }