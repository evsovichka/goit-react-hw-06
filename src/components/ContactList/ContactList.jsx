import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import style from "./ContactList.module.css";
import { selectContacts } from "../../redux/contactsSlice";

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  return (
    <ul className={style.contactList}>
      {contacts.map((contact) => {
        return (
          <li className={style.contactItem} key={contact.id}>
            {<Contact contact={contact} />}
          </li>
        );
      })}
    </ul>
  );
}
