// err.message err.code === 11000

const handleUserError = (err) => {
  let errors = { username: "", email: "", password: "" };
  if (err.code === 11000) {
    errors.email = "Email is already in use";
    return errors;
  }

  if (err.message === "incorrect email") {
    errors.email = "This email has not been registered";
    return errors;
  }
  if (err.message === "bad auth") {
    errors.email = "email or password is incorrect";
    errors.password = "email or password is incorrect";
    return errors;
  }

  if (err.message.includes("User validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};

module.exports = { handleUserError };
