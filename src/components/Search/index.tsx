import * as React from 'react';
import {styled, Box, BoxProps} from '@mui/material'
import { SearchView } from './SearchView';
import {Table} from '../common/table'
import { useAppSelector } from 'stores/hook';

const Container = styled(Box)<BoxProps>({
    marginTop: "2rem",
    background: "#fff",
    width: "100%",
    height: "100px",
    padding: "1.5rem 2rem",
  
  })
  
export const SearchLayout  = (layout:any) => {
  
  return (
    <Container>
       <SearchView {...layout}/>
 
    </Container>
  );
}
