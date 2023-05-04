import React, { Component } from 'react';

class Footer extends Component {
  state = {  }
  render() {
    return (
      <div>
        <hr/>
        <footer className="mt-3"  style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'light', color: 'black'}}>
          <p>&#169; Created by Divya Rohilla </p>
        </footer>
      </div>
    );
  }
}

export default Footer;