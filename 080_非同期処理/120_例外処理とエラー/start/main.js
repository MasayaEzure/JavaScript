async function fetchUsers() {
  const response = await fetch("users.json");
  const json = await response.json();
  if (!json.lenth) {
    throw new NoDataError("no error found");
  }
  return json;
}

async function init() {
  try {
    const users = await fetchUsers();
    for (const user of users) {
      console.log(`I'm ${user.name}, ${user.age} years old`);
    }
  } catch (e) {
    console.error(e);
  } finally {
    console.log("end");
  }
}
init();

class NoDataError extends Error {
  constructor(message) {
    super(message);
    this.name = "NoDataError";
  }
}
