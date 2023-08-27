export const checkValidData = (email, password) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(
      password
    ); //a password must be eight characters including one uppercase letter, one special character and alphanumeric characters

  //const isNameValid = /^[A-Z][a-zA-Z '.-]*[A-Za-z][^-]$/.test(name);
  // “^” represents that starting character of the string.
  // “[A-Za-z]” makes sure that the starting character is in the lowercase or uppercase alphabet.
  // “\\w{5, 29}” represents a check to make sure that the remaining items are word items, which includes the underscore, until it reaches the end and that is represented with $.
  // The “{5, 29}” represents the 6-30 character constraint given to us minus the predefined first character.
  if (!isEmailValid) return "Please enter a valid email address.";
  if (!isPasswordValid)
    return "Your password must be eight characters including one uppercase letter, one special character and alphanumeric characters";
  //if (!isNameValid) return "Please enter valid name.";
  return null;
};
