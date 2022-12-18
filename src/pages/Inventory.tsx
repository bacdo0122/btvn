import React from 'react';
import { useAppDispatch, useAppSelector } from 'stores/hook';
import { HeaderCommon } from '../components/Header/common'
import {Table} from '../components/common/table'
import { SearchLayout } from 'components/Search';
import { Box,Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useDispatch } from 'react-redux';
import {deleteCategory, deleteUser, deleteUserAdmin} from "../components/common/table/action";
import {  GridValueGetterParams,GridActionsCellItem} from '@mui/x-data-grid';
import { setField, setReset, setDetail } from 'reducers/Film';
const Cateogories = () => {
  const users = useAppSelector((state:any)=>state.user.users);
  const dispatch = useAppDispatch();
  const reset = useAppSelector((state:any)=>state.films.reset)
  const  columnsUsers = [
    
  
    {field: 'email', headerName: 'Email', width: 300 },
    {field: 'name', headerName: 'Name', width: 300 },
    {field: 'avatar', headerName: 'Avatar', width: 300,
    renderCell: (params:any) => {
      return (
        <>
          <Avatar src={params.value.avatar} />
        </>
      );
    }
      
   
},
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
        await deleteUserAdmin(params.id);
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
    <HeaderCommon title="Users">
      <SearchLayout layout="users"/>
      <Box sx={{width: "100%", marginTop: "20px", textAlign: "end"}}>
      <Button variant="contained" color="success" onClick={()=> dispatch(setField("create"))} >Create</Button>
      </Box>
      {users && <Table title="Users" data={users}  column = {columnsUsers}/>}
    </HeaderCommon>
  </>;
};

export default Cateogories;
