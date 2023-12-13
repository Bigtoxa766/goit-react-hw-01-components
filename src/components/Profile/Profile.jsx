import PropTypes from 'prop-types';
import { ProfileImg, ProfileContainer, StatContainer, StatItem } from './Profile.styled';

export const Profile = (props) => {
  const { username, tag, location, avatar,
    stats: { followers, likes, views } } = props;
  
  return (
    <ProfileContainer className="profile">
      <div className="description">
        <ProfileImg
          src={avatar}
          alt="User avatar"
          className="avatar"
        />
        <p className="name">{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <StatContainer className="stats">
        <StatItem>
          <span className="label">Followers: </span>
          <span className="quantity">{followers}</span>
        </StatItem>
        <StatItem>
          <span className="label">Views: </span>
          <span className="quantity">{views}</span>
        </StatItem>
        <StatItem>
          <span className="label">Likes: </span>
          <span className="quantity">{likes}</span>
        </StatItem>
      </StatContainer>
    </ProfileContainer>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};