import React from 'react';
import PropTypes from 'prop-types';
import Container from './MovieAndAuthorContainer';

const AuthorContainer = Container;

function AuthorCard({ userId }) {
  return <AuthorContainer>{userId} This is AuthorCard</AuthorContainer>;
}
AuthorCard.propTypes = {
  userId: PropTypes.number.isRequired,
};
export default AuthorCard;
