import React, { useState } from 'react';
import styled from 'styled-components';

const BoxWrapper = styled.div`
  height: 100px;
  width: 100px;
  border: 1px solid black;
`;

const Box = ({ box, player }) => {
  const placePiece = (event) => {
    console.log(event.target.id);
  }

  return (
    <BoxWrapper id={box.name} onClick={box.status === null ? placePiece : null}>

    </BoxWrapper>
  )
}

export default Box;