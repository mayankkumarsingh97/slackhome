import EastIcon from '@mui/icons-material/East';

export const EastIconCust = styled(EastIcon)`
      ${({props})=> props.arrowno && css`
      display: none!important;
      visibility: hidden;
      `
  
  }
`