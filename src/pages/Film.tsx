import React from 'react';
import { useAppDispatch, useAppSelector } from 'stores/hook';
import { HeaderCommon } from '../components/Header/common'
import {Table} from '../components/common/table'
import { SearchLayout } from 'components/Search';
import { Box,Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import {deleteUser} from "../components/common/table/action";
import {  GridValueGetterParams,GridActionsCellItem} from '@mui/x-data-grid';
import { setField, setReset, setDetail } from 'reducers/Film';
const Film = () => {
  const films = useAppSelector((state:any)=>state.films.films);
  const dispatch = useAppDispatch();
  const reset = useAppSelector((state:any)=>state.films.reset)
  const  columnsFilm = [
    {field: 'name', headerName: 'Name', width: 300 },
    { field: 'actors', headerName: 'Actor', width: 200,
    valueGetter: (params: GridValueGetterParams) =>
    {
      const covert = params.row.actors.map((actor:any)=>actor.name)

      return covert.join(",")
    }
  },
  { field: 'categories', headerName: 'Category', width: 200,
  valueGetter: (params: GridValueGetterParams) =>
  {
    const covert = params.row.categories.map((category:any)=>category.name)

    return covert.join(",")
  }
},
{ field: 'areas', headerName: 'Region', width: 150,
valueGetter: (params: GridValueGetterParams) =>
{
  const covert = JSON.parse(params.row.areas).map((area:any)=>area.name)

    return covert.join(",")
  
}
},
    { field: 'score', headerName: 'Score Rate', width: 150 },
    { field: 'year', headerName: 'Year', width: 100 },
    {
    field: 'actions',
    type: 'actions',
    headerName: 'Action',
    width: 400,
    getActions: (params:any) => [
     
      <GridActionsCellItem
      key={1}
      icon={ <Button variant="contained" color="success">Delete</Button>}
      label="Delete"
      onClick={async()=> {
        await deleteUser(params.id);
        dispatch(setReset(!reset))
      }}
    />,
    <GridActionsCellItem
    key={2}
    icon={ <Button variant="contained" color="secondary">Edit</Button>}
    label="Edit"
    onClick={async()=> {

      dispatch(setDetail(params.row));
      dispatch(setField("edit"))
    }}
  />,
   <GridActionsCellItem
   key={3}
   icon={ <Button variant="contained" >Detail</Button>}
   label="Detail"
   onClick={async()=> {

    dispatch(setDetail(params.row));
    dispatch(setField("detail"))
  }}
  />
    ] 
  },
  ]
  return <>
    <HeaderCommon title="Films">
      <SearchLayout layout="films"/>
      <Box sx={{width: "100%", marginTop: "20px", textAlign: "end"}}>
      <Button variant="contained" color="success" onClick={()=> dispatch(setField("create"))} >Create</Button>
      </Box>
      {films && <Table title="Films" data={films}  column = {columnsFilm}/>}
    </HeaderCommon>
  </>;
};

export default Film;
