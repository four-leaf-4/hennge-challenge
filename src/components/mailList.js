import 'date-fns';
import React from 'react';
import { Typography } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';

export const MailList = () => {
  const columns = [
    { field: 'from', headerName: 'From', width: 300 },
    {
      field: 'to',
      headerName: 'to',
      width: 300,
      renderCell: (params) => {
        if (params.value.length >= 2) {
          return (
            <>
              <Typography>{params.value[0]}</Typography>
              <Typography>...</Typography>
              <Typography>+{params.value.length - 1}</Typography>
            </>
          );
        } else {
          return <Typography>{params.value[0]}</Typography>;
        }
      },
    },
    {
      field: 'subject',
      headerName: 'Subject',
      width: 400,
      renderCell: (params) => {
        console.log(params.value);
        const Icon = () => {
          if (params.value.attachment) {
            return <img src={`images/icon_clip.svg`} width={16} height={16} />;
          } else {
            return <></>;
          }
        };
        return (
          <>
            <Typography>{params.value.headline}</Typography>
            <Icon />
          </>
        );
      },
    },
    {
      field: 'date',
      headerName: 'Date',
      description: 'Date',
      sortable: true,
      width: 160,
      renderCell: (params) => {
        const month_english_list = [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'June',
          'July',
          'Aug.',
          'Sept',
          'Oct',
          'Nov',
          'Dec',
        ];
        const today = new Date();
        const thisYear = today.getFullYear();
        const thisMonth = today.getMonth() + 1;
        const thisDate = today.getDate();

        const mailYear = params.value.getFullYear();
        const mailMonth = params.value.getMonth() + 1;
        const mailDate = params.value.getDate();
        console.log(today);
        if (
          thisYear === mailYear &&
          thisMonth === mailMonth &&
          thisDate === mailDate
        ) {
          return (
            <p>
              {params.value.getHours()}:{params.value.getMinutes()}
            </p>
          );
        } else if (thisYear === mailYear) {
          return (
            <p>
              {month_english_list[params.value.getMonth()]}{' '}
              {params.value.getDate()}
            </p>
          );
        } else {
          return (
            <p>
              {params.value.getFullYear()}/{params.value.getMonth() + 1}/
              {params.value.getDate()}
            </p>
          );
        }
      },
    },
  ];

  const rows = [
    {
      id: 1,
      from: 'aaa@example.com',
      to: ['zzz.zzz@example.com', 'zzz.zzz@example.com'],
      subject: {
        headline: '[ HR-888 ] Notice of official announcement',
        attachment: true,
      },
      date: new Date('2021-04-10T11:34:00'),
    },
  ];

  return (
    <div style={{ height: 800, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={10} />
    </div>
  );
};

export default MailList;
