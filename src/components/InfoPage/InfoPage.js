import React from 'react';
import AddItemForm from '../AddItemForm/AddItemForm';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const InfoPage = () => (
  <div>
    <p>
      Info Page
      <AddItemForm />
    </p>
  </div>
);

export default InfoPage;
