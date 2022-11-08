import {  GridColDef,GridValueGetterParams,GridRenderCellParams,GridActionsCellItem} from '@mui/x-data-grid';

export const  columns = [
    { field: 'name', headerName: 'Name', width: 300 },
    { field: 'actors', headerName: 'Actor', width: 300,
    valueGetter: (params: GridValueGetterParams) =>
    params.row.actors[0].name
  },
    { field: 'votes', headerName: 'Vote Rate', width: 150 },
    {
      field: 'views',
      headerName: 'Total Views',
      width: 150,
    },
    
  ];

 


