"use client";

import { GridColDef, GridColumnVisibilityModel } from '@mui/x-data-grid';
import { useState } from 'react';
import { Box, Rating, Typography, styled } from '@mui/material';
import StripedDataGrid from '@/components/StripedDataGrid';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#003380',
  },
});

const columns: GridColDef[] = [
  { field: 'id', headerName: 'Id', width: 50 },
  { field: 'skill', headerName: 'Skill', flex: 4 },
  { field: 'type', headerName: 'Type', flex: 4 },
  {
    field: 'rating', headerName: 'Rating', flex: 4, renderCell: (params) => (
      <StyledRating value={params.value} readOnly precision={0.5} color={'skyblue'}/>
    )
  },
];

const rows = [
  { id: 1, skill: 'Layered Architecture', type: 'Architecture', rating: 5 },
  { id: 2, skill: 'Clean Architecture', type: 'Architecture', rating: 4 },
  { id: 3, skill: 'Event Driven Architecture', type: 'Architecture', rating: 4 },
  { id: 4, skill: 'REST', type: 'Architecture', rating: 4 },
  { id: 5, skill: 'DDD', type: 'Architecture', rating: 3 },
  { id: 6, skill: 'Event Sourcing', type: 'Architecture', rating: 1 },
  { id: 7, skill: 'Helm', type: 'Infrastructure', rating: 5 },
  { id: 8, skill: 'Kubernetes', type: 'Infrastructure', rating: 4 },
  { id: 9, skill: 'RabbitMQ', type: 'Infrastructure', rating: 4 },
  { id: 10, skill: 'Docker', type: 'Infrastructure', rating: 4 },
  { id: 11, skill: 'Azure CI / CD', type: 'Infrastructure', rating: 4 },
  { id: 12, skill: 'Azure Services', type: 'Infrastructure', rating: 4 },
  { id: 13, skill: 'Jenkins', type: 'Infrastructure', rating: 2 },
  { id: 14, skill: 'Google Cloud Services', type: 'Infrastructure', rating: 1 },
  { id: 15, skill: 'AWS', type: 'Infrastructure', rating: 1 },
  { id: 16, skill: 'Azure SQL Server', type: 'Database', rating: 4 },
  { id: 17, skill: 'MySQL', type: 'Database', rating: 3 },
  { id: 18, skill: 'PostgresSQL', type: 'Database', rating: 3 },
  { id: 19, skill: 'TimeScaleDB', type: 'Database', rating: 3 },
  { id: 20, skill: 'Typescript', type: 'Frontend', rating: 3.5 },
  { id: 21, skill: 'React', type: 'Frontend', rating: 3 },
  { id: 22, skill: 'Angular', type: 'Frontend', rating: 3 },
  { id: 23, skill: 'MVC', type: 'Frontend', rating: 1 },
  { id: 24, skill: 'Selenium', type: 'Testing', rating: 4 },
  { id: 25, skill: 'NUnit', type: 'Testing', rating: 4.5 },
  { id: 26, skill: 'XUnit', type: 'Testing', rating: 3.5 },
  { id: 27, skill: 'C#', type: 'Backend', rating: 5 },
  { id: 28, skill: '.Net8', type: 'Backend', rating: 5 },
  { id: 29, skill: 'WebAPI', type: 'Backend', rating: 5 },
  { id: 30, skill: 'Azure Functions', type: 'Backend', rating: 4 },
  { id: 31, skill: 'Batch Script', type: 'Backend', rating: 3.5 },
  { id: 32, skill: 'Powershell', type: 'Backend', rating: 3 },
  { id: 33, skill: 'CQRS', type: 'Backend', rating: 2.5 },
  { id: 34, skill: 'Java', type: 'Backend', rating: 1 },
  { id: 35, skill: 'C++', type: 'Backend', rating: 1 },
  { id: 36, skill: 'C', type: 'Backend', rating: 1 },
  { id: 37, skill: 'ML.NET', type: 'Machine Learning', rating: 3 },
  { id: 38, skill: 'Python', type: 'Machine Learning', rating: 2 },
  { id: 39, skill: 'Matlab', type: 'Machine Learning', rating: 1 },

  { id: 37, skill: 'Teamplay', type: 'Soft', rating: 5 },
  { id: 38, skill: 'Teaching', type: 'Soft', rating: 4.5 },
  { id: 39, skill: 'Presentation', type: 'Soft', rating: 4 },
  { id: 40, skill: 'German', type: 'Language', rating: 5 },
  { id: 41, skill: 'English', type: 'Language', rating: 4 },
  { id: 42, skill: 'French', type: 'Language', rating: 1 },

];

export default function CvPage() {
  const [columnVisibilityModel] = useState<GridColumnVisibilityModel>({
    id: false,
    order: false,
  });

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <Box>
        <StripedDataGrid
          rows={rows}
          columns={columns}
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