import React, { useState } from 'react';
import { styled, Box, BoxProps, TextField, TextareaAutosize, alpha, FormControl, Button, InputLabel, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
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
    position: "relative"
})
const MainWrapper = styled(Box)<BoxProps>({
    margin: "20px auto",
    maxWidth: "70%",
    textAlign: "center"

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
    position: "absolute",
    right: "4%",
    top: "4%",
    cursor: "pointer"

})
export const Detail = () => {
    const dispatch = useAppDispatch();
    const reset = useAppSelector((state: any) => state.films.reset)
    const detail = useAppSelector((state: any) => state.films.detail)

    const [film, setFilm] = useState({
        id: detail && detail.id,
        name: detail && detail.name,
        filmId: detail && String(detail.filmId),
        domainType: detail && String(detail.domainType),
        description: detail && String(detail.description),
        actor: detail && detail.actors,
        category: detail && detail.categories
    })




    return <Container>
        <MainWrapper>
            <Label>Detail Film</Label>
            <FormControl variant="standard" sx={{ width: "100%", marginTop: "10px" }}>
                <InputLabel shrink htmlFor="bootstrap-input">
                    Name
                </InputLabel>
                <BootstrapInput disabled value={film.name} onChange={(e: any) => setFilm({ ...film, name: e.target.value })} placeholder='Enter Name' id="bootstrap-input" />
            </FormControl>
            <FormControl variant="standard" sx={{ width: "100%", marginTop: "10px" }}>
                <InputLabel shrink htmlFor="bootstrap-input">
                    ID
                </InputLabel>
                <BootstrapInput disabled value={film.filmId} onChange={(e: any) => setFilm({ ...film, filmId: e.target.value })} type='number' placeholder='Enter ID' id="bootstrap-input" />
            </FormControl>
            <FormControl variant="standard" sx={{ width: "100%", marginTop: "10px" }}>
                <InputLabel shrink htmlFor="bootstrap-input">
                    Domain Type
                </InputLabel>
                <BootstrapInput disabled value={film.domainType} onChange={(e: any) => setFilm({ ...film, domainType: e.target.value })} type='number' placeholder='Enter Domain Type' id="bootstrap-input" />
            </FormControl>
            <FormControl variant="standard" sx={{ width: "100%", marginTop: "10px" }}>
                <InputLabel shrink htmlFor="bootstrap-input">
                    Description
                </InputLabel>
                <TextareaAutosize
                    minRows={8}
                    value={film.description}
                    disabled
                    style={{ width: '100%', fontSize: "16px", marginTop: "15px" }}
                />
            </FormControl>
            <FormControl variant="standard" sx={{ width: "100%", marginTop: "10px" }}>
                <InputLabel shrink htmlFor="bootstrap-input">
                    Actors
                </InputLabel>
            </FormControl>
            <nav aria-label="secondary mailbox folders">
                <List>
                    {film.actor.length > 0 && film.actor.map((item: any, index: number) => (
                        <ListItem disabled disablePadding key={index}>
                            <ListItemButton >
                                <ListItemText primary={item.name} />

                            </ListItemButton>
                        </ListItem>
                    ))}

                </List>
            </nav>
            <FormControl variant="standard" sx={{ width: "100%", marginTop: "10px" }}>
                <InputLabel shrink htmlFor="bootstrap-input">
                    Categories
                </InputLabel>

            </FormControl>
            <nav aria-label="secondary mailbox folders">
                <List>
                    {film.category.length > 0 && film.category.map((item: any, index: number) => (
                        <ListItem disablePadding disabled key={item.id}>
                            <ListItemButton>
                                <ListItemText primary={item.name} />

                            </ListItemButton>
                        </ListItem>
                    ))}

                </List>
            </nav>
        </MainWrapper>
        <CloseIcon>
            <HighlightOffOutlinedIcon onClick={() => dispatch(setField(null))} />
        </CloseIcon>
    </Container>

}