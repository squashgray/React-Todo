import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <span className="title">My Todo's</span>
        <input type="text" className="searchInput" placeholder="Search ..." />
      </div>
    );
  }
}

export default Header;
