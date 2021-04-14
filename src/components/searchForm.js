import 'date-fns';
import React from 'react';
import { Grid, Button } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export const SearchForm = () => {
  const [startSelectedDate, setStartSelectedDate] = React.useState(
    new Date('2020-01-01T00:00:00')
  );

  const [endSelectedDate, setEndSelectedDate] = React.useState(
    new Date('2020-01-01T00:00:00')
  );

  const handleStartDateChange = (date) => {
    setStartSelectedDate(date);
  };
  const handleEndDateChange = (date) => {
    setEndSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around" alignItems="center">
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
        <Button variant="contained">
          <img src={`images/icon_search.svg`} width={16} height={16} />
        </Button>
      </Grid>
    </MuiPickersUtilsProvider>
  );
};

export default SearchForm;
