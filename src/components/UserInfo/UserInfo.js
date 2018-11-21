import React, { Component } from 'react';
import { Follow } from 'react-twitter-widgets';

class UserInfo extends Component {
  render() {
    const { config, expanded } = this.props;
    const { userTwitter } = config;
    return <Follow username={userTwitter} options={{ count: expanded ? true : 'none' }} />;
  }
}

export default UserInfo;
