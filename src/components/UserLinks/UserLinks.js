import React, { Component } from 'react';
import './UserLinks.scss';

class UserLinks extends Component {
  getLinkElements() {
    const { config, labeled } = this.props;
    const { userLinks } = config;
    return userLinks.map(link => (
      <button key={link.label} href={link.url}>
        {labeled ? link.label : ''}
      </button>
    ));
  }

  render() {
    const { config } = this.props;
    const { userLinks } = config;
    if (!userLinks) {
      return null;
    }
    return <div className="user-links">{this.getLinkElements()}</div>;
  }
}

export default UserLinks;
