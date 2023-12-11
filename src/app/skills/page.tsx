"use client";

import { GridColDef, GridColumnVisibilityModel } from '@mui/x-data-grid';
import { useState } from 'react';
import { Box, Rating } from '@mui/material';
import StripedDataGrid from '@/components/StripedDataGrid';
import skillData from './skillDataArray'; 

export default function CvPage() {
  const [columnVisibilityModel] = useState<GridColumnVisibilityModel>({
    id: false,
    order: false,
  });

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'Id', width: 50 },
    { field: 'skill', headerName: 'Skill', flex: 4 },
    { field: 'type', headerName: 'Type', flex: 4 },
    {
      field: 'rating', headerName: 'Rating', flex: 4, renderCell: (params) => (
        <Rating value={params.value} readOnly precision={0.5} color={'skyblue'}/>
      )
    },
  ];

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <Box>
        <StripedDataGrid
          rows={skillData}
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