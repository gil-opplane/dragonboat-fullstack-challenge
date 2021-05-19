import React, {useState} from "react";
import styled from "styled-components";

import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import EditModalComponent from "./EditModalComponent";

const Component = ({ projects, deleteProject, addProject }) => {
  const [hovering, setHovering] = useState(undefined);
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(undefined);
  const dateOptions = {weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' };


  const format = (d) =>  new Date(d).toLocaleDateString('en-UK', dateOptions)

  const handleOpen = (p) => {
    setOpen(true);
    setCurrent(p);
  }

  const handleClose = () => {
    setOpen(false);
    setCurrent(undefined);
  }

  return (
    <>
      <Title variant="h4">Projects List</Title>
      <Listing>
        {projects.map((p) => (
          <Item key={p.id} onMouseEnter={() => setHovering(p.id)} onMouseLeave={() => setHovering(undefined)}>
            <div>
              <Typography variant={'body1'} display={'block'}>{p.title}</Typography>
              <Author variant={'caption'} display={'block'} gutterBottom>{p.author}</Author>
              <Chip color={"primary"} size={'small'} label={format(p.start_date)} variant={'outlined'} />
              <Chip color={"secondary"}  size={'small'} label={format(p.start_date)} variant={'outlined'} />
            </div>
            {hovering === p.id && (
              <Actions>
                <Button onClick={() => handleOpen(p)}>Edit</Button>
                <Button onClick={() => deleteProject(p.id)}>Delete</Button>
              </Actions>
            )}
          </Item>
        ))}
      </Listing>
      <ButtonAdd onClick={() => addProject({author: 'aaa', title: 'aaa', start_date: new Date().toISOString(), end_date: new Date().toISOString() })}>Add</ButtonAdd>
      {current && <EditModalComponent project={current} open={open} onClose={handleClose} onSave={console.log}/>}
    </>
  );
};

const Title = styled(Typography)`
  padding: 20px 0 20px 13px;
`;

const Author = styled(Typography)`
  font-size: 10px !important;
`

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
  margin-bottom: 15px;
`

const Actions = styled.div`
  margin-left: auto;
`

const ButtonAdd = styled(Button)`
  margin-top: 15px !important;
`

export default Component;
