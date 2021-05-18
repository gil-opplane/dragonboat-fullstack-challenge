import React, {useState} from "react";
import styled from "styled-components";

import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";

const Component = ({ projects }) => {
  const [hovering, setHovering] = useState(undefined);
  return (
    <>
      <Title variant="h4">Projects List</Title>
      <Listing>
        {projects.map((p) => (
          <Item key={p.id} onMouseEnter={() => setHovering(p.id)} onMouseLeave={() => setHovering(undefined)}>
            {p.title}
            {hovering === p.id && (
              <Actions>
                <Button>Edit</Button>
                <Button>Delete</Button>
              </Actions>
            )}
          </Item>
        ))}
      </Listing>
      <ButtonAdd>Add</ButtonAdd>
    </>
  );
};

const Title = styled(Typography)`
  padding: 20px 0 20px 13px;
`;

const Listing = styled(List)`
  overflow-x: hidden;
  overflow-y: auto;
  max-height: 768px;
`

const Item = styled(ListItem)`
  min-height: 55px;
  &:hover {
    background-color: rgb(0,0,0,0.05);
  }
`

const Actions = styled.div`
  margin-left: auto;
`

const ButtonAdd = styled(Button)`
  margin-top: 15px !important;
`

export default Component;
