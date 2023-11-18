const { User } = require('../models');

// Your controller logic goes here
// Example:
const createUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.create({ email, password });

    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  createUser,
  // Add other controller methods as needed
};
