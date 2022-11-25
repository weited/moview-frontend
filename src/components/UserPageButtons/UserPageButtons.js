import * as React from 'react';
import styled from 'styled-components';

const ButtonGroup = styled.div`
  display: flex;
  max-width: 1200px;
  justify-content: space-around;
  margin-bottom: 3em;
  padding-left: 8em;
`;

const Button = styled.div(
  ({ theme }) => `
    border-radius: 10px;
    border-style: solid;
    background-color:${theme.colors.background_light_grey};
    :hover { 
        background-color:${theme.colors.background_lighter_grey};
    }
  `
);

export default function UserPageButtons() {
  return (
    <ButtonGroup>
      <Button> We Both Watched </Button>
      <Button> Favourite Folder </Button>
      <Button> Liked Folder </Button>
      <Button> Sort By </Button>
    </ButtonGroup>
  );
}
