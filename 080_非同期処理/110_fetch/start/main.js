// fetch("users.json")
//   .then(function (response) {
//     return response.json(); // 戻り値はPromise
//   })
//   .then(function (json) {
//     for (const user of json) {
//       console.log(`${user.name}, ${user.age}`);
//     }
//   });

async function fetchUsers() {
  const response = await fetch("users.json");
  const json = await response.json();
  for (const user of json) {
    console.log(`${user.name}, ${user.age}`);
  }
}

fetchUsers();