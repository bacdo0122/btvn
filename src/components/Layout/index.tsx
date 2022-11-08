import { Box, BoxProps, styled } from '@mui/material';
import { Header } from 'components/Header';
import { Logo } from 'components/Header/logo';
import { SlideMenus } from 'components/SlideMenu';
import { drawerWidth, headerHeight } from 'consts';
import { publicRouters } from 'consts/auth';
import { addSlashPrefixToString } from 'helpers';
import { useActor } from 'hooks/useActor';
import { useUser } from 'hooks/useUser';
import { useAuthenticated } from 'hooks/useAuthenticated';
import  useFetchMostViewFilm  from 'hooks/useData';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { setFilmMostView } from "../../reducers/Film";
import { useAppDispatch, useAppSelector } from 'stores/hook';
import { Pop } from 'components/common/Pop';
import { useCategory } from 'hooks/useCategory';
import { Edit } from 'components/common/Pop/edit';
import { Detail } from 'components/common/Pop/detail';
import { CreateActor } from 'components/common/actor/create';
import { EditActor } from '../common/actor/edit';
import { DetailActor } from 'components/common/actor/detail';
import { CreateCategory } from 'components/common/category/create';
import { EditCategory } from 'components/common/category/edit';
import { DetaiCategory } from 'components/common/category/detail';
import { CreateUser } from 'components/common/user/create';
import { EditUser } from 'components/common/user/edit';
import { DetailUser } from 'components/common/user/detail';


interface Props {
  name?: string;
  children: React.ReactChild;
}

const MainLayout = styled(Box)<BoxProps>(() => ({
  // width: '100%',
  minHeight: '100vh',
  boxSizing: 'border-box',
  width: `calc(100% - ${drawerWidth}px)`,
  height: '100vh',
  overflow:"hidden"
}));

const Divider = styled(Box)<BoxProps>(() => ({
  height: headerHeight,
}));

const Wrapper = styled(Box)<BoxProps>({
  display: 'flex',
  width: '100%',
  background: `#F7F8FC`,
  position:"relative"
});
const LeftWrapper = styled(Box)<BoxProps>(()=>({
  width: drawerWidth,
  height: `100vh`,
  boxShadow: '0px 0px 48px rgba(0, 0, 0, 0.06)',
  background: '#363740',
}));
const PopUpLayout = styled(Box)<BoxProps>(()=>({
  width: "100%",
  height:"100%",
  position: "absolute",
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  background: "rgba(217, 217, 217, 0.33)"
}));
const Layout: React.FC<Props> = ({ children }) => {
  
  const location = useLocation();
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector((state:any) => state.auth.isAuthenticated); 
  const field = useAppSelector((state:any)=>state.films.field)
  useAuthenticated();
  useFetchMostViewFilm(location, dispatch); 
  useActor(location, dispatch);
  useCategory(location, dispatch);
  useUser(location, dispatch);
 const renderLayout = () => {
    if (publicRouters.includes(location.pathname)) {
      return isAuthenticated !== null && !isAuthenticated ? (
        <>{children}</>
      ) : (
        <div>Loading...</div>
      );
    } else {
      return isAuthenticated !== null  && isAuthenticated ? (
        <>
          <Wrapper>
            <LeftWrapper>
                <Logo />
               <SlideMenus />
            </LeftWrapper>

          <MainLayout>
            {children}
          </MainLayout>
          {field === "create" && 
          <PopUpLayout>
            {location.pathname === "/films" && <Pop />}
            {location.pathname === "/actors" && <CreateActor />}
            {location.pathname === "/categories" && <CreateCategory />}
            {location.pathname === "/users" && <CreateUser />}
          </PopUpLayout>
          }
          {field === "edit" && 
          <PopUpLayout>
             {location.pathname === "/films" && <Edit />}
            {location.pathname === "/actors" && <EditActor />}
            {location.pathname === "/categories" && <EditCategory />}
            {location.pathname === "/users" && <EditUser />}
            
          </PopUpLayout>
          }
          {field === "detail" && 
          <PopUpLayout>
              {location.pathname === "/films" &&  <Detail />}
            {location.pathname === "/actors" && <DetailActor />}
            {location.pathname === "/categories" && <DetaiCategory />}
            {location.pathname === "/users" && <DetailUser />}
          </PopUpLayout>
          }
          
        </Wrapper>
        </>
      ) : (
        <div>Loading...</div>
      );
    }
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItem: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#363740',
      }}
    >
      
      {renderLayout()}
    </Box>
  );
};

export default Layout;
