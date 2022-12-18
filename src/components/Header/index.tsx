import { Box, BoxProps, styled, Avatar} from '@mui/material';
import Logo from 'assets/images/logo-example.svg';
import { headerHeight } from 'consts';
import React from 'react';

const Container = styled(Box)<BoxProps>(() => ({
  height: headerHeight,
  width: '100%',
  display: 'flex',
  padding: '14px 0 14px 0',
  boxSizing: 'border-box',
  justifyContent: 'space-between',
  alignItems: 'center',
 
  background: "transparent"
}));

const Title = styled(Box)<BoxProps>(()=>({
  color: '#252733',
  fontWeight: '700',
  fontSize: '24px',
  lineHeight: '30px', 
  letterSpacing: '0.3px',
}))

const NameImageWrapper = styled(Box)<BoxProps>(()=>({
  height: '100%',
  display:"flex",
  alignItems:"center"
}))

const Name = styled(Box)<BoxProps>(()=>({
  color: '#252733',
  fontWeight: '600',
  fontSize: '14px',
  lineHeight: '20px',
  letterSpacing: '0.2px',
  marginRight: "20px"
}))
// const LogoWrapper = styled(Box)<BoxProps>({
//   display: 'flex',
// });

// const ImageBox = styled(Box)<BoxProps>({
//   display: 'flex',
//   alignItems: 'center',
//   marginRight: '3.125rem',
// });

// const HeaderTitle = styled(Typography)<TypographyProps>({
//   margin: '0',
//   color: '#121212',
//   fontSize: '1.5rem',
//   fontWeight: '700',
//   display: 'flex',
//   alignItems: 'center',
// });

// const LogoutBnt = styled(Button)<ButtonProps>({
//   marginLeft: '4.625rem',
// });

// const EmailWrapper = styled(Box)<BoxProps>({
//   display: 'flex',
// });

// const Email = styled(Typography)<TypographyProps>({
//   margin: '0',
//   display: 'flex',
//   alignItems: 'center',
// });

// const Divider = styled(Box)<BoxProps>({
//   flexGrow: 1,
// });
interface Props{
  title:string,
  avatar:string,
  name:string
}
export const Header = ({title, avatar, name}:Props) => {
  
  return (
   <Container>
    <Title>{title}</Title>
    <NameImageWrapper>
      <Name >{name}</Name>
      <Box sx={{
         height: '45px',
         width: '45px',
         alignItems: 'center',
         display: 'flex',
         borderRadius: '50%',
         justifyContent: 'center',
         background: '#fff',
      }}>
      <Box
        component="img"
        sx={{
          height: 40,
          width: 40,
          objectFit: 'cover',
          borderRadius: "50%"
        }}
        alt="The house from the offer."
        src={avatar}
      />
      </Box>
    </NameImageWrapper>
   </Container>
  );
};
