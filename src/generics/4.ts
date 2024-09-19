// type User = {
//   name: string;
//   surname: string;
//   email: string;
//   password: string;
// };

// function createOrUpdateUser(initialValues: User) {
//   // Оновлення користувача
// }

// createOrUpdateUser({
//   email: "user@mail.com",
//   password: "password123",
// });

type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>) {
  // Оновлення користувача
  console.log(initialValues);
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
