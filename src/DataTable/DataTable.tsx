import { User } from "../types";
import { FC } from "react";
import styles from "./DataTable.module.scss";
import UserData from "./UserData";

type userListPropsType = {
  users: User[];
};

const DataTable: FC<userListPropsType> = ({ users }) => {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.dataTable}>
        <thead>
          <tr>
            <th>Name / User name</th>
            <th>Company</th>
            <th>Address</th>
            <th>Contact details</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {users.length ? (
            users.map((user, index) => (
              <UserData key={index} {...user}></UserData>
            ))
          ) : (
            <tr>
              <td colSpan={5} className={styles.noData}>
                No results found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
