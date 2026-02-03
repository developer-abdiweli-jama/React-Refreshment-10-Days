import React from 'react';
import PropTypes from 'prop-types';

/**
 * UserUsername component displays the user's username with labeling.
 * 
 * @param {Object} props - Component properties.
 * @param {string} props.username - The username to display.
 */
function UserUsername({ username }) {
    return (
        <div className="user-name">
            <b>Username: </b>
            <span>{username}</span>
        </div>
    );
}

UserUsername.propTypes = {
    username: PropTypes.string.isRequired,
};

export default UserUsername