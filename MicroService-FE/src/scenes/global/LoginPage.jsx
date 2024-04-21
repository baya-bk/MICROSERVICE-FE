import React from 'react';

class LogoutButton extends React.Component {
  handleLogout = () => {
    // Perform logout actions here, such as clearing user session, removing tokens, etc.
    // For demonstration purposes, let's assume we are clearing a user session stored in localStorage.
    localStorage.removeItem('userToken');
    // Redirect the user to the login page or any other desired page after logout.
    window.location.href = '/login'; // Redirect to the login page
  }

  render() {
    return (
      <button onClick={this.handleLogout} style={{
        position: 'absolute',
        top: '50px', /* Adjust the top position based on your layout */
        right: '20px', /* Adjust the right position based on your layout */
        backgroundColor: '#0b969b',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        zIndex: '999',
        
      }}>
        Logout
      </button>
      
    );
  }
}

export default LogoutButton;
