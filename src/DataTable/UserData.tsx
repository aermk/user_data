import { FC } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { RiExternalLinkLine } from "react-icons/ri";
import styles from "./DataTable.module.scss";
import { Address, Company } from "../types";

type userDataPropsType = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};

const UserData: FC<userDataPropsType> = ({
  id,
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  return (
    <tr key={id}>
      <td className={styles.nameColumn}>
        <span className={styles.userName}>{name}</span>
        <span className={styles.userUsername}>/ {username}</span>
      </td>
      <td>{company.name}</td>
      <td className={styles.addressColumn}>
        {/* {!!user.address && ( */}
        <address>
          <span>
            {address.street}, {address.suite}
          </span>
          <span>
            {address.zipcode} {address.city}
          </span>
        </address>
        {/* )} */}
      </td>
      <td className={styles.contactContainer}>
        <address>
          <a href={`tel:${phone}`}>
            <FaPhoneAlt className={styles.icon} />
            {phone}
          </a>
          <a href={`mailto:${email}`}>
            <MdAlternateEmail className={styles.icon} />
            {email}
          </a>
        </address>
      </td>
      <td className={styles.websiteContainer}>
        <a href={`http://${website}`} target="_blank" rel="noopener noreferrer">
          <RiExternalLinkLine className={styles.icon} />
          {website}
        </a>
      </td>
    </tr>
  );
};

export default UserData;
