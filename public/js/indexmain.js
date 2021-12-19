function printName()  {
  const name = document.getElementById('username').value;
  if (name == "System")
  {
    print("System is blocked username.")
    document.getElementById("username").value = '';
  }
}
