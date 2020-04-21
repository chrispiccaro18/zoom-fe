import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { initializeAuth } from '../actions/authActions';
import { get } from '../services/request';

const Redirect = ({ addInitialAuth, location, history }) => {
  const code = window.location.search.split('=')[1];
  console.log(code, location);

  get(`/auth/${code}`)
    .then(response => {
      console.log(response);
      addInitialAuth(code);
      history.push({
        pathname: '/'
      });
    })
    .catch(error => {
      console.error(error);
      //TODO: handle auth error
    });
   
  return (
    <h1>Redirect Page</h1>
  );
};

Redirect.propTypes = {
  addInitialAuth: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

const mapDispatchTopProps = (dispatch) => ({
  addInitialAuth(code) {
    dispatch(initializeAuth(code));
  }
});

export default connect(
  null,
  mapDispatchTopProps,
)(withRouter(Redirect));
