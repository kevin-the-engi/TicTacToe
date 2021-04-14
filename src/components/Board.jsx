import React from 'react';
import styled from 'styled-components';

import Box from './Box.jsx';

const BoardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 100px);
`;

const Board = ({ board, player }) => {
  return (
    <BoardWrapper>
      {board.map((box, i) =>
        <Box
          key={i}
          box={box}
          player={player}
        />
      )}
    </BoardWrapper>
  )
}

export default Board;