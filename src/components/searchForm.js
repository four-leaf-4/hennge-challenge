import 'date-fns';
import React, { useContext } from 'react';
import { Grid, IconButton } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { useStyles } from '../styles/useStyles';
import { StartDateContext, EndDateContext, MailsContext } from '../context/';

export const SearchForm = () => {
  const classes = useStyles();
  const { startSelectedDate, setStartSelectedDate } = useContext(
    StartDateContext
  );

  const { endSelectedDate, setEndSelectedDate } = useContext(EndDateContext);

  const handleStartDateChange = (date) => {
    setStartSelectedDate(date);
  };
  const handleEndDateChange = (date) => {
    setEndSelectedDate(date);
  };
  const { hundleFilter } = useContext(MailsContext);
  const clickSearchBtn = () => {
    hundleFilter();
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="flex-start" alignItems="center">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="yyyy/MM/dd"
          margin="normal"
          id="date-picker-start"
          label="start"
          value={startSelectedDate}
          onChange={handleStartDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          keyboardIcon={
            <img src={`images/icon_calender.svg`} width={16} height={16} />
          }
          InputAdornmentProps={{ position: 'start' }}
        />
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="yyyy/MM/dd"
          margin="normal"
          id="date-picker-end"
          label="end"
          value={endSelectedDate}
          onChange={handleEndDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          keyboardIcon={
            <img src={`images/icon_calender.svg`} width={16} height={16} />
          }
          InputAdornmentProps={{ position: 'start' }}
        />
        <IconButton
          variant="contained"
          className={classes.searchButton}
          onClick={clickSearchBtn}
        >
          <img src={`images/icon_search.svg`} width={16} height={16} />
        </IconButton>
      </Grid>
    </MuiPickersUtilsProvider>
  );
};

export default SearchForm;
