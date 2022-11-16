import  React,{useState} from 'react';
import { styled, Box, BoxProps, TextField, InputAdornment,Autocomplete,alpha,FormControl, Button, InputLabel, MenuItem, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import { useAppDispatch, useAppSelector } from 'stores/hook';
import { CreateNewFilm } from 'apis/film';
import { setField, setReset } from 'reducers/Film';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
const Container = styled(Box)<BoxProps>({

    width: "50%",
    height: "80%",
    background: "#fff",
    borderRadius: "20px",
    zIndex: "100",
    overflowY: "auto",
    position:"relative"
})
const MainWrapper = styled(Box)<BoxProps>({
    margin: "20px auto",
    maxWidth: "70%",
    textAlign:"center"

})
const Label = styled(Box)<BoxProps>({
    fontWeight: "700",
    fontSize: "24px",
    color: "#252733",
    lineHeight: "150%",
    textAlign: "center"
})
const BootstrapInput = styled(TextField)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
      border: '1px solid #ced4da',
      fontSize: 16,
      width: '100%',
      padding: '10px 12px',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }));
const CloseIcon = styled(Box)<BoxProps>({
    position:"absolute",
    right: "4%",
    top: "4%",
    cursor:"pointer"

})

export const Pop = ()=>{
    const dispatch = useAppDispatch();
    const reset = useAppSelector((state:any)=>state.films.reset)
    const [film, setFilm] = useState({
        name: "",
        filmId: 0,
        domainType: 0,
        bannerType: "",
        actor: [],
        category: []
    })
    const actors= useAppSelector((state:any)=> state.actor.actors)
    const categories= useAppSelector((state:any)=> state.category.categories)
    const handleChangeActor = (event:any,value:any)=>{
        const check = film.actor.filter((item:any)=>item.id === value.id)
        if(check.length !== 0){
            setFilm({...film, actor: film.actor})
        }
        else {
            const newActors = [...film.actor, value];
            setFilm({...film, actor: newActors as any})
        }
      }

      const handleChangeCategory = (event:any,value:any)=>{
        const check = film.category.filter((item:any)=>item.id === value.id)
        if(check.length !== 0){
            setFilm({...film, category: film.category})
        }
        else {
            const newCategory = [...film.category, value];
            setFilm({...film, category: newCategory as any})   
        }
      }
      const handleCreateFilm = async ()=>{
        const newArrayIdActor = film.actor.map((item:any)=>String(item.id));
        const newArrayIdCategory = film.category.map((item:any)=>String(item.id));
        await CreateNewFilm(film.name, film.filmId,film.domainType,film.bannerType, newArrayIdActor, newArrayIdCategory);
        dispatch(setField(null))
        dispatch(setReset(!reset))
      }
    return <Container>
            <MainWrapper>
                <Label>Create Film</Label>
              <FormControl variant="standard" sx={{width: "100%", marginTop:"10px"}}>
                <InputLabel shrink htmlFor="bootstrap-input">
                Name
                </InputLabel>
                <BootstrapInput onChange={(e:any)=> setFilm({...film, name:e.target.value})} placeholder='Enter Name' id="bootstrap-input" />
            </FormControl>
            <FormControl variant="standard" sx={{width: "100%", marginTop:"10px"}}>
                <InputLabel shrink htmlFor="bootstrap-input">
                ID
                </InputLabel>
                <BootstrapInput onChange={(e:any)=> setFilm({...film, filmId:e.target.value})} type='number' placeholder='Enter ID' id="bootstrap-input"  />
            </FormControl>
            <FormControl variant="standard" sx={{width: "100%", marginTop:"10px"}}>
                <InputLabel shrink htmlFor="bootstrap-input">
                Domain Type
                </InputLabel>
                <BootstrapInput onChange={(e:any)=> setFilm({...film, domainType:e.target.value})} type='number' placeholder='Enter Domain Type' id="bootstrap-input" />
            </FormControl>
            <FormControl variant="standard" sx={{width: "100%", marginTop:"10px"}}>
                <InputLabel shrink htmlFor="bootstrap-input">
                Banner Type
                </InputLabel>
                <BootstrapInput onChange={(e:any)=> setFilm({...film, bannerType:e.target.value})} type='text' placeholder='Enter Banner Type' id="bootstrap-input" />
            </FormControl>
            <FormControl variant="standard" sx={{width: "100%", marginTop:"10px"}}>
        
                <Autocomplete
                disablePortal
                onChange={(event:any, value:any)=>handleChangeActor(event, value)}
                id="combo-box-demo"
                sx={{marginTop:"10px"}}
                options={actors && actors.map((item:any)=>({id: item.id, label: item.name}))}
                renderInput={(params:any) => <TextField {...params} label="Actor" />} />
            </FormControl>
            <nav aria-label="secondary mailbox folders">
                <List>
                    {film.actor.map((item:any, index:number)=>(
                           <ListItem disablePadding key={item.id}>
                           <ListItemButton>
                           <ListItemText primary={item.label} />
                           </ListItemButton>
                       </ListItem>
                    ))}
             
                </List>
            </nav>
            <FormControl variant="standard" sx={{width: "100%", marginTop:"10px"}}>
        
                <Autocomplete
                disablePortal
                sx={{marginTop:"10px"}}
                onChange={(event:any, value:any)=>handleChangeCategory(event, value)}
                id="combo-box-demo"
                options={categories && categories.map((item:any)=>({id: item.id, label: item.name}))}
                renderInput={(params:any) => <TextField {...params} label="Category" />} />
            </FormControl>
            <nav aria-label="secondary mailbox folders">
                <List>
                    {film.category.map((item:any, index:number)=>(
                        <ListItem disablePadding key={item.id}>
                        <ListItemButton>
                        <ListItemText primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                    ))}
            
                </List>
            </nav>  
            <Button variant="contained" onClick={handleCreateFilm}>Create</Button>              
            </MainWrapper>
           <CloseIcon>
            <HighlightOffOutlinedIcon onClick={()=>  dispatch(setField(null))}/>
           </CloseIcon>
    </Container>
    
}