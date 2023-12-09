"use client";

import { DataGrid, GridColDef, GridColumnVisibilityModel, GridToolbar, gridClasses, useGridApiRef } from '@mui/x-data-grid';
import { alpha, styled } from '@mui/material/styles';
import { useRef, useState } from 'react';
import { Typography } from '@mui/material';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 50 },
  { field: 'date', headerName: 'Date', width: 150 },
  { field: 'position', headerName: 'Position', flex: 4 },
  { field: 'company', headerName: 'Company', flex: 4 },
  { field: 'activities', headerName: 'Activities', flex: 4, renderCell: (params) => (
    <div>
      <Typography>sss</Typography>
      <Typography color="textSecondary">{params?.value}</Typography>
    </div>
  )
},
];

const rows = [
  { id: 1, date: '2021/05 - 2023/04', position: 'Senior Softwareentwickler', company: 'Vattenfall Energy Trading GmbH', activities: '212' },
  { id: 2, date: '2021/01 - 2021/04', position: 'Senior Softwareentwickler', company: 'Hellmann Worldwide Logistics SE & Co. KG', activities: 42 },
  { id: 3, date: '2019/09 - 2020/09', position: 'Senior Associate', company: 'PricewaterhouseCoopers GmbH Wirtschaftsprüfungsgesellschaft', activities: 45 },
  { id: 4, date: '2019/03 - 2019/08', position: 'Senior Softwareentwickler', company: 'KPMG IT Service GmbH', activities: 16 },
  { id: 5, date: '2017/12 - 2019/01', position: 'Softwarearchitekt', company: 'Dataport AöR', activities: null },
  { id: 6, date: '2011/01 - 2017/08', position: 'Software Engineer', company: 'Crane Payment Innovations GmbH', activities: 150 },
];

const ODD_OPACITY = 0.1;

const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
  [`& .${gridClasses.row}.even`]: {
    backgroundColor: theme.palette.grey[50],
    '&:hover, &.Mui-hovered': {
      backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY),
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
    '&.Mui-selected': {
      backgroundColor: alpha(
        theme.palette.primary.main,
        ODD_OPACITY + theme.palette.action.selectedOpacity,
      ),
      '&:hover, &.Mui-hovered': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          ODD_OPACITY +
            theme.palette.action.selectedOpacity +
            theme.palette.action.hoverOpacity,
        ),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            ODD_OPACITY + theme.palette.action.selectedOpacity,
          ),
        },
      },
    },
  },
}));
const columnVisibilityModel = {
  id: false, // Permanently hide the "id" column
  otherColumns: true, // Allow users to hide or show other columns
};

export default function CvPage() {
  const [columnVisibilityModel, setColumnVisibilityModel] = useState<GridColumnVisibilityModel>({
    id: false,
    order: false,
  });
  const apiRef = useGridApiRef(); // Create the apiRef

  return (
    <div style={{ height: '100%', width: '100%' }}>
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
    </div>
  );
}