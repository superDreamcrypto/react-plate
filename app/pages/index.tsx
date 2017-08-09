import * as React from 'react';
import styled from 'styled-components';
import Layout from 'components/Layout';

const Image = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  & img {
    max-height: 200px;
  }
`;

export default (): JSX.Element => (
  <Layout>
    <h1>Hello!</h1>
    <Image>
      <img src="/static/img/hipsta.png" alt="hipsta" />
    </Image>
  </Layout>
);
