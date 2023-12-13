import PropTypes from 'prop-types';
import { ItemFriend, Status } from "./FriendList.styled";

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <ItemFriend key={id}>
      <Status style={{ backgroundColor: isOnline ? 'green' : 'red' }}></Status>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </ItemFriend>
  )
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number,
}

