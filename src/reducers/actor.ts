import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Actor{
    name:string, 
    descriptions:string
}
interface TotalActor{
    actors: Actor[],
    allActor: Actor[]
}

interface States {
    actors: TotalActor | null,
    allActor: TotalActor | null
}
const initialState: States = {
    actors: null,
    allActor:null
  };
  
export const actorSlice: any = createSlice({
    name: 'actor',
    initialState,
    reducers: {
      setActors: (state, action: PayloadAction<TotalActor>) => {
        state.actors = action.payload;
      },
      setAllActor: (state, action: PayloadAction<TotalActor>) => {
        state.allActor = action.payload;
      },
     
    },
  });

export const { setActors, setAllActor } = actorSlice.actions;

const { reducer: actorReducer } = actorSlice;

export default actorReducer;
