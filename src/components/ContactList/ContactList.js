import { useDispatch, useSelector } from 'react-redux';
import { DeleteButton, Text, NumberText } from './ContactCard.styled';
import { deleteContact } from '../../redux/operations';
import { List, ListItem } from './ContactList.styled';
import { visibleContatcs } from '../../redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(visibleContatcs);
  const dispatch = useDispatch();
  return (
    <List>
      {contacts.map(item => (
        <ListItem key={item.id}>
          <Text>
            {item.name}
            <NumberText>{item.number}</NumberText>
          </Text>
          <DeleteButton onClick={() => dispatch(deleteContact(item.id))}>
            Delete
          </DeleteButton>
        </ListItem>
      ))}
    </List>
  );
};
