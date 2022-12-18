import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface banner{
    name:string, 

}
interface Totalbanner{
    banner: banner[],
    allBanner: banner[]
}

interface States {
    banner: banner | null,
    allBanner:banner | null,
}
const initialState: States = {
    banner: null,
    allBanner: null
  };
  
export const bannerSlice: any = createSlice({
    name: 'banner',
    initialState,
    reducers: {
      setBanner: (state, action: PayloadAction<Totalbanner>) => {
        state.banner = action.payload as any;
      },
      setAllBanner: (state, action: PayloadAction<Totalbanner>) => {
        state.allBanner = action.payload as any;
      },
    },
  });

export const { setBanner,setAllBanner } = bannerSlice.actions;

const { reducer: bannerReducer } = bannerSlice;

export default bannerReducer;
