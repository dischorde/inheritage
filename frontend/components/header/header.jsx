import React from 'react';
import { withRouter } from 'react-router';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleHome = this.handleHome.bind(this);
  }

  handleClick() {
    this.props.router.push('/');
    setTimeout(() => {
      $('html, body').animate({
        scrollTop: parseInt($("#more-info").offset().top)
      }, 1000);
    }, 1000);
  }

  handleHome() {
    this.props.router.push('/');
  }

  render() {
    return (
      <div>
        <div id="header">
          <h1 onClick={this.handleHome}><img src="http://res.cloudinary.com/dtwr3pge0/image/upload/co_rgb:3ccd70/v1485834881/inheritage-logo_welajm.svg"/></h1>
          <i
            onClick={this.handleClick}
            className="fa fa-question-circle"
            aria-hidden="true">
          </i>
        </div>
        <div id="separator"></div>
        {this.props.children}
      </div>
    );
  }
}

export default withRouter(Header);
