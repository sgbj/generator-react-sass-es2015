import React from 'react';

export default class Home extends React.Component {
  
  render() {
    return (
      <div>
        <h2>Home</h2>
        <p>
          Have fun working on <%= appName %>! &lt;3
        </p>
      </div>
    );
  }
}
