"use client";

import { GridColDef, GridColumnVisibilityModel } from '@mui/x-data-grid';
import { useState } from 'react';
import { Box, Rating } from '@mui/material';
import {skillDataArray} from '../../services/skill/skillDataArray';
import StripedDataGrid from '@/components/StripedDataGrid';

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
        <Rating value={params.value} readOnly precision={0.5}/>
      )
    },
  ];

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <Box sx={{ mt: '0', pt: '0' }}>
        <h2 style={{ marginTop: '0', paddingTop: '0' }}>Skills</h2>
        <StripedDataGrid
          rows={skillDataArray}
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