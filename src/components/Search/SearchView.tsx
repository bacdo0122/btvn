import * as React from 'react';
import { styled, Box, BoxProps, TextField, InputAdornment,Autocomplete } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { useAppSelector, useAppDispatch} from 'stores/hook';
import useFetchMostViewFilm  from 'hooks/useData';
import { useLocation } from 'react-router-dom';
import { useActor } from 'hooks/useActor';
import { useCategory } from 'hooks/useCategory';
import { useUser } from 'hooks/useUser';


const Wrapper = styled(Box)<BoxProps>({
  display: "flex",
  alignItems: "center"
})

export const SearchView = (layout:any) => {
  const [search, setSearch] = React.useState({
    type: "search",
    value: null
  })
  const [option, setOption] = React.useState([])
  const actors= useAppSelector((state:any)=> state.actor.actors)
  const allActor= useAppSelector((state:any)=> state.actor.allActor)
  const allCategory = useAppSelector((state:any)=> state.category.allCategory)
  const allUser = useAppSelector((state:any)=>state.user.allUser)
  const location = useLocation();
  const dispatch = useAppDispatch();
  React.useEffect(()=>{

    if(layout.layout === "films" || layout.layout === "actors"){
      setOption(allActor)
    }
    else if(layout.layout === "categories"){
      setOption(allCategory)
    }
    else setOption(allUser)
  },[layout])
  if(layout.layout === "films"){
  
    useFetchMostViewFilm(location, dispatch, search.type, search.value) 
  }
  else if(layout.layout === "actors"){
 
    useActor(location, dispatch, search.type, search.value) 
  }
  else if(layout.layout === "categories"){

    useCategory(location, dispatch, search.type, search.value) 
  }
  else{

    useUser(location, dispatch, search.type, search.value) 
  }
  const handleKeyPress = (e:any)=>{
      if(e.key === "Enter"){
       
        setSearch({
          type:"search",
          value: e.target.value
        })
      }
    }
   
  const handleChangeActor = (event:any, value:any)=>{
    if(event.target.value !== undefined){
     if(layout.layout === "films"){
      setSearch({
        type:"actors",
        value: value.id
      })
     }
     else if(layout.layout === "actors"){
      setSearch({
        type:"search",
        value: value.id
      })
     }
     else{
       setSearch({
        type:"search",
        value: value.id
      })
     }
    }
    else {
      setSearch({
        type:"actors",
        value: null
      })
    }
  }


 return (
    <Wrapper>
      <TextField
        label="Search"
        onKeyPress={handleKeyPress}
        sx={{ width: "350px", marginRight: "20px" }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          )
        }}
      />
       <Autocomplete
      disablePortal
      onChange={(event, value)=>handleChangeActor(event,value)}
      id="combo-box-demo"
      options={option && option.map((item:any)=>({id: item.id, label: item.name}))}
      sx={{ width: 300 }}
      renderInput={(params:any) => <TextField {...params} label={layout.layout === "films" || layout.layout === "actors"  ? "Actor" : layout.layout} />}
    />
    </Wrapper>
  );
}
