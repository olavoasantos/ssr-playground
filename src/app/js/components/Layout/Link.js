import React from 'react';

export const Link = ({children, to}) => (
  <a href={to}>{children}</a>
);
