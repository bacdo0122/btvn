import * as React from 'react';
import {styled, Box, BoxProps} from '@mui/material'
import {cards} from '../../consts/cards'
import { CardItem } from './cardItem';
import { useAppSelector } from 'stores/hook';
 
const Container = styled(Box)<BoxProps>({
    marginTop: "30px",
    display: "flex",
    justifyContent: "space-between",
    alignItem: "flex-start",
    width: "100%",
    height: "134px"
})
export const Dashboard  = () => {
  const films = useAppSelector((state:any)=>state.films.films)
  console.log(films)
  return (
    <Container>
      {cards.map((item, index) =>{
         return <CardItem key={index} title ={item.title} number={item.number} />
      })}
    </Container>
  );
}
