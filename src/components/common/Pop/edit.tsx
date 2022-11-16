import  React,{useState} from 'react';
import { styled, Box, BoxProps, TextField, Autocomplete,alpha,FormControl, Button, InputLabel, List, ListItem, ListItemButton, ListItemText, ListItemIcon } from '@mui/material'
import { useAppDispatch, useAppSelector } from 'stores/hook';
import { EditFilm } from 'apis/film';
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
export const Edit = ()=>{
    const dispatch = useAppDispatch();
    const reset = useAppSelector((state:any)=>state.films.reset)
    const detail = useAppSelector((state:any)=>state.films.detail)
    console.log(detail)
    const [film, setFilm] = useState({
        id: detail && detail.id,
        name: detail && detail.name,
        filmId: detail && String(detail.filmId),
        domainType: detail && String(detail.domainType),
        bannerType: detail && detail.bannerType,
        actor: detail && detail.actors,
        category: detail && detail.categories
    })
    const actors= useAppSelector((state:any)=> state.actor.actors)
    const categories= useAppSelector((state:any)=> state.category.categories)
    const handleChangeActor = (event:any,value:any)=>{
        console.log(value)
        const check = film.actor.filter((item:any)=>item.id === value.id)
        if(check.length !== 0){
            setFilm({...film, actor: film.actor})
        }
        else {
            const newActors = [...film.actor, {id:value.id, name: value.label}];
            setFilm({...film, actor: newActors as any})
        }
      }

      const handleChangeCategory = (event:any,value:any)=>{
        const check = film.category.filter((item:any)=>item.id === value.id)
        if(check.length !== 0){
            setFilm({...film, category: film.category})
        }
        else {
            const newCategory = [...film.category, {id:value.id, name: value.label}];
            setFilm({...film, category: newCategory as any})   
        }
      }
      const handleEditFilm = async ()=>{
        const newArrayIdActor = film.actor.map((item:any)=>String(item.id));
        const newArrayIdCategory = film.category.map((item:any)=>String(item.id));
        await EditFilm(film.id, film.name, film.filmId,film.domainType, film.bannerType, newArrayIdActor, newArrayIdCategory);
        dispatch(setField(null))
        dispatch(setReset(!reset))
      }
    return <Container>
            <MainWrapper>
                <Label>Edit Film</Label>
              <FormControl variant="standard" sx={{width: "100%", marginTop:"10px"}}>
                <InputLabel shrink htmlFor="bootstrap-input">
                Name
                </InputLabel>
                <BootstrapInput value={film.name} onChange={(e:any)=> setFilm({...film, name:e.target.value})} placeholder='Enter Name' id="bootstrap-input" />
            </FormControl>
            <FormControl variant="standard" sx={{width: "100%", marginTop:"10px"}}>
                <InputLabel shrink htmlFor="bootstrap-input">
                ID
                </InputLabel>
                <BootstrapInput value={film.filmId} onChange={(e:any)=> setFilm({...film, filmId:e.target.value})} type='number' placeholder='Enter ID' id="bootstrap-input"  />
            </FormControl>
            <FormControl variant="standard" sx={{width: "100%", marginTop:"10px"}}>
                <InputLabel shrink htmlFor="bootstrap-input">
                Domain Type
                </InputLabel>
                <BootstrapInput value={film.domainType} onChange={(e:any)=> setFilm({...film, domainType:e.target.value})} type='number' placeholder='Enter Domain Type' id="bootstrap-input" />
            </FormControl>
            <FormControl variant="standard" sx={{width: "100%", marginTop:"10px"}}>
                <InputLabel shrink htmlFor="bootstrap-input">
                Banner Type
                </InputLabel>

                
                <BootstrapInput value={film.bannerType} onChange={(e:any)=> setFilm({...film, bannerType:e.target.value})} type='text' placeholder='Enter Banner Type' id="bootstrap-input" />
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
                    {film.actor.length > 0 && film.actor.map((item:any, index:number)=>(
                           <ListItem disablePadding key={index}>
                           <ListItemButton >
                            <ListItemText primary={item.name} />
                            <ListItemIcon>
                            <HighlightOffOutlinedIcon onClick={()=>  {
                                const newActor = film.actor.filter((actor:any)=>actor.id !== item.id)
                                setFilm({...film, actor: newActor})
                            }}/>
                            </ListItemIcon>
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
                    {film.category.length > 0 && film.category.map((item:any, index:number)=>(
                        <ListItem disablePadding key={item.id}>
                        <ListItemButton>
                        <ListItemText primary={item.name} />
                        <ListItemIcon>
                        <HighlightOffOutlinedIcon onClick={()=>  {
                                const newCategory = film.category.filter((category:any)=>category.id !== item.id)
                                setFilm({...film, category: newCategory})
                            }}/>
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                    ))}
            
                </List>
            </nav>  
            <Button variant="contained" onClick={handleEditFilm}>EDIT</Button>              
            </MainWrapper>
            <CloseIcon>
            <HighlightOffOutlinedIcon onClick={()=>  dispatch(setField(null))}/>
           </CloseIcon>
    </Container>
    
}