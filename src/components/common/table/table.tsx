import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
 interface Film{
    name:string,
    id:number,
    actor:string,
    votes:number,
    totalViews:number
 }
interface Grid {
    data: Film[],
    column:any
}

export function TableData ({data, column}:Grid) {
  
  return (
   
    <DataGrid
    rows={data}
    columns={column}
    pageSize={5}
    
    rowsPerPageOptions={[5]}
    checkboxSelection
  />
  );
}
