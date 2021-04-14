import React, { useState } from 'react';
import styled from 'styled-components';

import Board from './Board.jsx';

const AppWrapper = styled.div`
  display: flex;
`;

const App = () => {
  const [board, setBoard] = useState([
    { name: "box1", status: null }, { name: "box2", status: null }, { name: "box3", status: null },
    { name: "box4", status: null }, { name: "box5", status: null }, { name: "box6", status: null },
    { name: "box7", status: null }, { name: "box8", status: null }, { name: "box9", status: null },
  ]);

  const [player, setPlayer] = useState(false);

  const togglePlayer = () => {
    setPlayer(!player);
  }

  return (
    <AppWrapper>
      <Board
        board={board}
        player={player}
      />
    </AppWrapper>
  )
}

export default App;