import React from "react";

function History() {
  return (
    <div style={styles.container}>
      <h2>Check History</h2>
      <p>History will go here.</p>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh'
  }
};

export default History;
