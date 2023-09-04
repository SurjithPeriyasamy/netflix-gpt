export const checkValidData = (name, email, password) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(
      password
    ); //a password must be eight characters including one uppercase letter, one special character and alphanumeric characters

  const isNameValid = /^[A-Za-z]+$/.test(name);
  //allow entering only letters .

  if (!isNameValid) return "Username must be contains only Letters.";
  if (!isEmailValid) return "Please enter a valid email address.";
  if (!isPasswordValid)
    return "Your password must be eight characters including one uppercase letter, one special character and alphanumeric characters";
  return null;
};
