import 'date-fns';
import React, { useContext } from 'react';
import { Grid, IconButton, TextField } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { useStyles } from '../styles/useStyles';
import {
  StartDateContext,
  EndDateContext,
  MailsContext,
  SearchSubjectContext,
} from '../context/';

export const SearchForm = () => {
  const classes = useStyles();
  const { startSelectedDate, setStartSelectedDate } = useContext(
    StartDateContext
  );

  const { endSelectedDate, setEndSelectedDate } = useContext(EndDateContext);
  const { searchText, setSearchText } = useContext(SearchSubjectContext);

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

  const inputSearchText = (e) => {
    const { value } = e.target;
    setSearchText(value);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="search-subject"
          label="search subject"
          onChange={inputSearchText}
        />
      </form>
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
