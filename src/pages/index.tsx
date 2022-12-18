import { Dashboard } from 'components/Dashboard';
import React from 'react';
import { useAppSelector } from 'stores/hook';
import { HeaderCommon } from '../components/Header/common'
import {Table} from '../components/common/table'
import {columns} from "../consts/table"
const Home = () => {
  const films = useAppSelector((state:any)=>state.films.allFilm);
  return <>
    <HeaderCommon title="Dashboard" >
      <Dashboard />
      {films && <Table title="Most view films" data={films} column={columns}/>}
    </HeaderCommon>
  </>;
};

export default Home;
