import  React,{useRef, useState} from 'react';
import { styled, Box, BoxProps, TextField,alpha,FormControl, Button, InputLabel } from '@mui/material'
import { useAppDispatch, useAppSelector } from 'stores/hook';
import { EditExisUser } from 'apis/user';
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
interface User{
  id:string,
  name:string ,
  email: string,
  password:string 
}
export const EditUser = ()=>{
    const dispatch = useAppDispatch();
    const reset = useAppSelector((state:any)=>state.films.reset)
    const detail = useAppSelector((state:any)=>state.films.detail)
    const [value, setValue] = React.useState<User>(
      {
        id: detail && detail.id,
       name:detail && detail.name,
       email:detail && detail.email,
       password:detail && detail.password,
      }
     )
    

   const handleEditActor = async ()=>{
    await EditExisUser(value.id, value.name,value.email,value.password)
    dispatch(setField(null))
    dispatch(setReset(!reset))
   }
    return <Container>
            <MainWrapper>
                <Label>Edit User</Label>
                <FormControl variant="standard" sx={{width: "100%", marginTop:"10px"}}>
                <InputLabel shrink htmlFor="bootstrap-input">
                Name
                </InputLabel>
                <BootstrapInput value={value.name} onChange={(e:any)=> setValue({...value,name:e.target.value})} placeholder='Enter Name' id="bootstrap-input" />
            </FormControl>
            <FormControl variant="standard" sx={{width: "100%", marginTop:"10px"}}>
                <InputLabel shrink htmlFor="bootstrap-input">
                Email
                </InputLabel>
                <BootstrapInput value={value.email} onChange={(e:any)=> setValue({...value,email:e.target.value})} placeholder='Enter Email' id="bootstrap-input" />
            </FormControl>
            <FormControl variant="standard" sx={{width: "100%", marginTop:"10px"}}>
                <InputLabel shrink htmlFor="bootstrap-input">
                Password
                </InputLabel>
                <BootstrapInput value={value.password} onChange={(e:any)=> setValue({...value,password:e.target.value})} placeholder='Enter Password' id="bootstrap-input" />
            </FormControl>
            
            <Button variant="contained" onClick={handleEditActor} sx={{marginTop: "10px"}}>Edit</Button>              
            </MainWrapper>
           <CloseIcon>
            <HighlightOffOutlinedIcon onClick={()=>  dispatch(setField(null))}/>
           </CloseIcon>
    </Container>
    
}