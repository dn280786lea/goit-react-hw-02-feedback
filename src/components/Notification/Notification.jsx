import React from 'react';
import PropTypes from 'prop-types';

export const Notification = ({ notification }) => {
  return (
    <div>
      <h3>{notification}</h3>
    </div>
  );
};
Notification.propTypes = {
  notification: PropTypes.string.isRequired,
};
