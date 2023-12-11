"use client";

import { GridColDef, GridColumnVisibilityModel } from '@mui/x-data-grid';
import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import StripedDataGrid from '@/components/StripedDataGrid';
import Grid from '@mui/material/Unstable_Grid2';
import cvEducationDataArray from './cvEducationDataArray';
import cvWorkDataArray from './cvWorkDataArray';

export default function CvPage() {
  const [columnVisibilityModel] = useState<GridColumnVisibilityModel>({
    id: false,
    order: false,
  });

  const workColumns: GridColDef[] = [
    { field: 'id', headerName: 'Id', width: 20 },
    { field: 'date', headerName: 'Date', width: 100, sortComparator: (v1: any, v2: any) => {
      const firstDate1: string = v1[0].split('-')[0];
      const firstDate2: string = v2[0].split('-')[0];
      return firstDate1.localeCompare(firstDate2);
    }, renderCell: (params) => (
      <div>
        {params?.value.map((date, index) => (
          <p key={index} color="textSecondary">
            {date}
          </p>
        ))}
      </div>
    ) },
    { field: 'position', headerName: 'Position', width: 250 },
    { field: 'company', headerName: 'Company', flex: 2, sortComparator: (v1: any, v2: any) => {
      return v1[0].localeCompare(v2[0]);
    }, renderCell: (params) => (
      <div>
        {params?.value.map((company, index) => (
          <p key={index} color="textSecondary">
            {company}
          </p>
        ))}
      </div>
    ) },
    { field: 'location', headerName: 'Location', width: 200 },
    {
      field: 'details', headerName: 'Details', flex: 5, sortComparator: (v1: any, v2: any) => {
        return v1[0].localeCompare(v2[0]);
      }, renderCell: (params) => (
        <div>
          {params?.value.map((detail, index) => (
            <p key={index} color="textSecondary">
              * {detail}
            </p>
          ))}
        </div>
      )
    },
  ];
  
  
  
  const educationColumns: GridColDef[] = [
    { field: 'id', headerName: 'Id', width: 20 },
    { field: 'date', headerName: 'Date', width: 100, sortComparator: (v1: any, v2: any) => {
      const firstDate1: string = v1[0].split('-')[0];
      const firstDate2: string = v2[0].split('-')[0];
      return firstDate1.localeCompare(firstDate2);
    }, renderCell: (params) => (
      <div>
        {params?.value.map((date, index) => (
          <p key={index} color="textSecondary">
            {date}
          </p>
        ))}
      </div>
    ) },
    { field: 'education', headerName: 'Education', width: 250, sortComparator: (v1: any, v2: any) => {
      return v1[0].localeCompare(v2[0]);
    }, renderCell: (params) => (
      <div>
        {params?.value.map((education, index) => (
          <p key={index} color="textSecondary">
            {education}
          </p>
        ))}
      </div>
    )},
    { field: 'institution', headerName: 'Institution', flex: 2  },
    { field: 'location', headerName: 'Location', width: 200 },
    {
      field: 'details', headerName: 'Details', flex: 5, sortComparator: (v1: any, v2: any) => {
        return v1[0].localeCompare(v2[0]);
      }, renderCell: (params) => (
        <div>
          {params?.value.map((detail, index) => (
            <p key={index} color="textSecondary">
              * {detail}
            </p>
          ))}
        </div>
      )
    },
  ]; 

  const getRowHeight = (params) => {
    let maxHeight = 50 * 2;
    if (params && params.model && params.model.details) {
      // Adjust the base row height here
      let baseHeight = 50 * 2;

      // Calculate height based on details content
      const detailsRowCount = params.model.details.length;
      const detailsHeight = detailsRowCount * 20;

      maxHeight =  baseHeight + detailsHeight;
    }
    if (params && params.model && params.model.education) {
      // Adjust the base row height here
      let baseHeight = 50 * 2;

      // Calculate height based on details content
      const eductionRowCount = params.model.education.length;
      const eductionHeight = eductionRowCount * 20;

      let maxHeightEducation =  baseHeight + eductionHeight;
      if(maxHeightEducation > maxHeight)  {
        maxHeight = maxHeightEducation;
      }
    }
    if (params && params.model && params.model.company) {
      // Adjust the base row height here
      let baseHeight = 50 * 2;

      // Calculate height based on details content
      const companyRowCount = params.model.company.length;
      const companyHeight = companyRowCount * 8;

      let maxHeightCompany =  baseHeight + companyHeight;
      if(maxHeightCompany > maxHeight)  {
        maxHeight = maxHeightCompany;
      }
    }
    return maxHeight; // Default height
  };

  return (
    <div style={{ height: '100%', width: '100%' }}>

      <Grid container spacing={3} sx={{ flexGrow: 1, mb: '0', pb: '0' }} >
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
          <img src="/homepage/TAlpers.png" alt="photo" width="180" style={{ marginBottom: '0', paddingBottom: '0' }} />  </Grid>
      </Grid>

      <Box sx={{ mt: '0', pt: '0' }}>
        <h2 style={{ marginTop: '0', paddingTop: '0' }}>Professional Experience</h2>
        <StripedDataGrid
          rows={cvWorkDataArray}
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
          getRowHeight={getRowHeight}
          />
      </Box>
      <Box pt={2}>
        <h2 >Education</h2>
        <StripedDataGrid
          rows={cvEducationDataArray}
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
          getRowHeight={getRowHeight}
        />
      </Box>
    </div>
  );
}