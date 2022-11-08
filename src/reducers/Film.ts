import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NullLiteral } from 'typescript';

interface filmsMostView{
  name: string,
  actor: string,
  vote: number,
  totalViews: number
}
interface TotalFilm{
    films: filmsMostView[]
}

interface States {
    films: TotalFilm | null,
    search: string | null,
    field: string | null,
    reset:boolean,
    detail: any | null
}

const initialState: States = {
  films: null,
  search: null,
  field: null,
  reset: false,
  detail: null
};

export const filmSlice: any = createSlice({
  name: 'film',
  initialState,
  reducers: {
    setFilmMostView: (state, action: PayloadAction<TotalFilm>) => {
      state.films = action.payload;
    },
    setSearch: (state, action: PayloadAction<States>) => {
      state.search = action.payload as any;
    },
    setField: (state, action: PayloadAction<States>) => {
      state.field = action.payload as any;
    },
    setReset: (state, action: PayloadAction<States>) => {
      state.reset = action.payload as any;
    },
    setDetail: (state, action: PayloadAction<States>) => {
      state.detail = action.payload as any;
    },
  },
});

export const { setFilmMostView, setSearch,setField,setReset,setDetail } = filmSlice.actions;

const { reducer: filmReducer } = filmSlice;

export default filmReducer;
