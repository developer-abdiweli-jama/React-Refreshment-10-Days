import PropTypes from 'prop-types';

function UserUsername({ username }) {
    return (
        <>
            <b>Username: </b>
            <span>{username}</span>
        </>
    );
}

UserUsername.propTypes = {
    username: PropTypes.string.isRequired,
};

export default UserUsername