import { demoUsers } from "../Demodata/demoUsersData";

export const getUserDataByUid = (uid) => {
  return demoUsers.find((user) => user.uid === uid);
};

export const calculateExperience=(joining)=>
{
    let join_arr=joining.split("/");
    let join_date=parseInt(join_arr[0]);
    let join_month=(join_date>=20?parseInt(join_arr[1])+1:parseInt(join_arr[1]));
    let join_year=parseInt(join_arr[2]);
    join_month+=(join_date>=20)?1:0;
    let exp=(new Date().getMonth()-join_month)+((new Date().getFullYear()-join_year)*12);
    return (exp>=0?exp:0)+" months";
}
