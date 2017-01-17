import React from 'react';

const UserAddress = ({ defaultAddress }) => {
  return (
    <div>
      <h4>Default Address:</h4>
      <p>{defaultAddress.street}</p>
      <p>{defaultAddress.city}</p>
      <p>{`${defaultAddress.state}, ${defaultAddress.zipcode}`}</p>
    </div>
  );
};

export default UserAddress;
