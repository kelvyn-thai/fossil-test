import React from "react";
import styled from "styled-components";

interface IProps {}

const Styled = styled.div`
    h4 {
        font-family: "Montserrat-Bold";
    }
`;

const Order = (props: IProps) => {
  return <Styled className="order">
      <h4>This is Fossil</h4>
      <p>Hello World</p>
  </Styled>;
};

export default Order;
