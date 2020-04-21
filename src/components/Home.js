import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectAuthCode } from '../selectors/auth';
import { post } from '../services/request';

const Home = ({ authCode }) => {
  console.log(authCode);
  if(authCode) {
    post('/users/me', { code: authCode })
      .then(userResponse => {
        console.log(userResponse);
      });
  }

  return <h1>Home Page</h1>;
};

Home.propTypes = {
  authCode: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  authCode: selectAuthCode(state),
});

export default connect(
  mapStateToProps,
)(Home);
