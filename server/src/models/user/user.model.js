const userDatabase = require("./user.mongo");
const bcrypt = require("bcryptjs");
const { getLatestId } = require("../../services/query");

const DEFAULT_USER_ID = 0;

async function createNewUser(user) {
  const newUserId = (await getLatestId(userDatabase, DEFAULT_USER_ID)) + 1;

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(user.password, salt);

  const newUser = Object.assign(user, {
    id: newUserId,
    password: hashedPassword,
  });

  // Save User in database
  await userDatabase.findOneAndUpdate({ id: newUserId }, newUser, {
    upsert: true,
  });
}

async function getUserByEmail(userEmail) {
  return await userDatabase.findOne({ email: userEmail });
}

module.exports = {
  createNewUser,
  getUserByEmail,
};
