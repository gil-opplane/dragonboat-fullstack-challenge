import React, {useState} from "react";
import styled from "styled-components";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";

const Component = ({ projects }) => {
  const [hovering, setHovering] = useState(undefined);
  return (
    <>
      <Title variant="h4">Projects List</Title>
      <Listing>
        {projects.map((p) => (
          <ListItem key={p.id} onMouseEnter={() => setHovering(p.id)} onMouseLeave={() => setHovering(undefined)}>
            {p.title}
            {hovering === p.id && <div>aaa</div>}</ListItem>
        ))}
      </Listing>
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

export default Component;
