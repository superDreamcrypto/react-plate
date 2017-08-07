import * as React from 'react';
import styled from 'styled-components';

const Foot = styled.footer`
  position: absolute;
  bottom: 0;
  padding: 10px 0;
  text-align: center;
  width: 100%;
`;

const Footer: React.StatelessComponent<{}> = (): JSX.Element => (
  <Foot>
    <p>&copy; 2017 DashBouquet.com</p>
  </Foot>
);

export { Footer };
