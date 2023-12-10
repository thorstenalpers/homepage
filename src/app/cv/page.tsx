"use client";

import { GridColDef, GridColumnVisibilityModel } from '@mui/x-data-grid';
import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import StripedDataGrid from '@/components/StripedDataGrid';
import Grid from '@mui/material/Unstable_Grid2';

const workColumns: GridColDef[] = [
  { field: 'id', headerName: 'Id', width: 50 },
  { field: 'date', headerName: 'Date', width: 150 },
  { field: 'position', headerName: 'Position', flex: 1.5 },
  { field: 'company', headerName: 'Company', flex: 2 },
  { field: 'location', headerName: 'Location', flex: 1.5 },
  {
    field: 'activities', headerName: 'Activities', flex: 5, renderCell: (params) => (
      <div>
        <Typography>sss</Typography>
        <Typography color="textSecondary">{params?.value}</Typography>
      </div>
    )
  },
];

const workRows = [
  { id: 1, date: '2021/05 - 2023/04', position: 'Senior Softwareentwickler', company: 'Vattenfall Energy Trading GmbH', location: 'Hamburg', activities: '212' },
  { id: 2, date: '2021/01 - 2021/04', position: 'Senior Softwareentwickler', company: 'Hellmann Worldwide Logistics SE & Co. KG', location: 'Osnabrück', activities: 42 },
  { id: 3, date: '2019/09 - 2020/09', position: 'Senior Associate', company: 'PricewaterhouseCoopers GmbH Wirtschaftsprüfungsgesellschaft', location: 'Hamburg and Hannover', activities: 45 },
  { id: 4, date: '2019/03 - 2019/08', position: 'Senior Softwareentwickler', company: 'KPMG IT Service GmbH', location: 'Hamburg and Berlin', activities: 16 },
  { id: 5, date: '2017/12 - 2019/01', position: 'Softwarearchitekt', company: 'Dataport AöR', location: 'Hamburg', activities: null },
  { id: 6, date: '2011/01 - 2017/08', position: 'Software Engineer', company: 'Crane Payment Innovations GmbH', location: 'Buxtehude', activities: 150 },
  { id: 7, date: '2010/04 - 2010/08', position: 'Internship in the R&D department', company: 'Dräger Medical AG & Co. KG', location: 'Lübeck', activities: 150 },
  { id: 8, date: '2008/03 - 2010/03', position: 'Student employee', company: 'University of Applied Sciences Hamburg', location: 'Hamburg', activities: 150 },
];

const educationColumns: GridColDef[] = [
  { field: 'id', headerName: 'Id', width: 50 },
  { field: 'date', headerName: 'Date', width: 150 },
  { field: 'education', headerName: 'Education', flex: 2.8 },
  { field: 'institution', headerName: 'Institution', flex: 2.2 },
  { field: 'location', headerName: 'Location', flex: 1 },
  {
    field: 'details', headerName: 'Details', flex: 5, renderCell: (params) => (
      <div>
        <Typography>sss</Typography>
        <Typography color="textSecondary">{params?.value}</Typography>
      </div>
    )
  },
];

const educationRows = [
  { id: 1, date: '2006/09 - 2010/08', education: 'Bachelor of Computer Sciences', institution: 'University of Applied Sciences Hamburg', location: 'Hamburg', details: '212' },
  { id: 2, date: '2005/08 - 2006/07', education: 'University entrance qualification electrical engineering', institution: 'Vocational school Winsen', location: 'Winsen (Luhe)', details: 42 },
  { id: 3, date: '2003/08 - 2005/07', education: 'Apprenticeship as a technical drawer', institution: 'Vocational school for metal technology G17', location: 'Hamburg', details: 45 },
];
export default function CvPage() {
  const [columnVisibilityModel] = useState<GridColumnVisibilityModel>({
    id: false,
    order: false,
  });

  return (
    <div style={{ height: '100%', width: '100%' }}>

      <Grid container spacing={3} sx={{ flexGrow: 1,  mb: '0', pb: '0' }} >
        <Grid xs={8} md={8} lg={8} xl={8}>
          <h2>About me</h2>
          <Typography whiteSpace="pre-line">
            As a software developer who is passionate about new technologies,
            I am always looking for ways to learn and grow.
            I am constantly reading about the latest trends and developments,
            and I am always eager to try new things.
            I am also often very creative and innovative,
            and I am always looking for ways to improve the way software is developed.
          </Typography>
        </Grid>
        <Grid xs md lg sm xl />
        <Grid>
          <img src="/TAlpers.png" alt="Logo" width="180" style={{ marginBottom: '0', paddingBottom: '0' }} />  </Grid>
      </Grid>

      <Box sx={{ mt: '0', pt: '0' }}>
        <h2 style={{ marginTop: '0', paddingTop: '0' }}>Professional Experience</h2>
        <StripedDataGrid
          rows={workRows}
          columns={workColumns}
          initialState={{
            columns: {
              columnVisibilityModel,
            },
          }}
          pageSizeOptions={[5, 10]}
          hideFooter={true}
          getRowClassName={(params) =>
            params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
          }
        />
      </Box>
      <Box pt={2}>
        <h2 >Education</h2>
        <StripedDataGrid
          rows={educationRows}
          columns={educationColumns}
          initialState={{
            columns: {
              columnVisibilityModel,
            },
          }}
          pageSizeOptions={[5, 10]}
          hideFooter={true}
          getRowClassName={(params) =>
            params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
          }
        />
      </Box>
    </div>
  );
}