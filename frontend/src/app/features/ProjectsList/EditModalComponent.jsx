import {Backdrop} from "@material-ui/core";
import Fade from "@material-ui/core/Fade";
import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { MuiPickersUtilsProvider, DateTimePicker } from "@material-ui/pickers";
import MomentUtils from '@date-io/moment';
const moment = require('moment');

const EditModalComponent = ({ project, open, onClose, onSave }) => {
  const [title, setTitle] = useState(undefined);
  const [startDate, setStartDate] = useState(undefined);
  const [endDate, setEndDate] = useState(undefined);

  useEffect(() => {
    setTitle(project.title);
    setStartDate(moment(project.start_date));
    setEndDate(moment(project.end_date));
  }, [project]);

  const save = (e) => {
    e.preventDefault();
    const data = { title, start_date: startDate.format(), end_date: endDate.format() };
    onSave(data);
  }

  return (
    <EditModal open={open} onClose={onClose} closeAfterTransition BackdropComponent={Backdrop} BackdropProps={{ timeout: 500 }}>
      <Fade in={open}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <ModalContent>
            <TextField id={'title'} error={!title} required label={'Title'} value={title} onChange={(e) => setTitle(e.target.value)} />
            <DateTimePicker id={'start_date'} error={!startDate} required label={'Start Date'} value={startDate} onChange={setStartDate} ampm={false} />
            <DateTimePicker id={'end_date'} error={!endDate} required label={'End Date'} value={endDate} onChange={setEndDate} ampm={false} />
            <Button disabled={!title} onClick={save}>Save</Button>
          </ModalContent>
        </MuiPickersUtilsProvider>
      </Fade>
    </EditModal>
  )
}

const EditModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`

const ModalContent = styled.div`
  display: flex;
  flex-flow: column;
  background-color: rgb(255,255,255,0.8);
  padding: 5px;
  & > *:not(:last-child) {
    margin-bottom: 15px;
  }
`

export default EditModalComponent