import s from './ContactList.module.css';
import PropTypes from 'prop-types';

export default function ContactList({ contacts = [], removeContact }) {
  return (
    <ul className={s.wrapper}>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <span>
            {name}: {number}
          </span>
          <button
            className={s.button}
            type="button"
            onClick={() => removeContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  removeContact: PropTypes.func,
};
