// export enum UserRole {
//   admin = "admin",
//   editor = "editor",
//   guest = "guest",
// }

// // Замініть наступний код на версію за допомогою Record
// const RoleDescription = {
//   admin: "Admin User",
//   editor: "Editor User",
//   guest: "Guest User",
// };

export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

type RoleDescriptionType = Record<UserRole, string>;

const RoleDescription: RoleDescriptionType = {
  [UserRole.admin]: "Admin User",
  [UserRole.editor]: "Editor User",
  [UserRole.guest]: "Guest User",
};
