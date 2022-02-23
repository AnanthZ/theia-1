import { demoUsers } from "../Demodata/demoUsersData";

export const getUserDataByUid = (uid) => {
  return demoUsers.find((user) => user.uid === uid);
};
