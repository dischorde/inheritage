import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div>
        <div id="header">
          <h1>inheritage</h1>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default Header;
