import * as React from 'react';
import { Box, BoxProps, List, ListProps, styled } from '@mui/material';
import { drawerWidth, headerHeight, transition } from 'consts';

const LogoWrapper = styled(Box)<BoxProps>(()=>({
    height: headerHeight,
    width: `100%`,
    border: 'none',
    display:'flex',
    alignItems: 'center',
    paddingLeft: '20px'

}))
const Name = styled(Box)<BoxProps>(()=>({
    fontSize:`19px`,
    fontWeight:`700`,
    letterSpacing:`0.4px`,
    color:` #A4A6B3`,
    opacity:`0.7`,
    marginLeft:`10px`
}))
export const Logo = () => {
  return <><LogoWrapper >
           <img
                style={{borderRadius: '50px', width: '42px', height:'36px',objectFit:'cover'}}
                src="https://s3-alpha-sig.figma.com/img/d763/299f/7fad248ef89e1e7b8b7ebd654de0b91d?Expires=1664150400&Signature=Penr9TYEO5Gt4Ti31-Thev1cS9tIf7zb8emz11U20Qwtecr6R5wbzOh4pZ8FnEhbQA4q0ttRpNVCTuvnWlIPUN0b4I3OH6nwlZUA9l-JNZiNSycG7Ayobe19UgEBAEKbs728-jHPXA~FZQAXHSM974P6EZnYNmO~gLZ3ZeUvF7jS-ZimRiDWR-VOhRWCAwCXOwTbI4wmTI93s4zeZsCIt1htzMDf7ZiQKOL4WcSjr67ptsIEQRzjjuuAcaHsdJ5mfcV8kmd1FTki4YQGc2PWvIEsfQb1Sgo1uR7QyJOw74EBdweBxozNUaFqRVxisqZ-K~Vjys~7f3MB8lX~NQj~VQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt=""
              />
            <Name >Film Admin</Name>
    </LogoWrapper></>;
};


