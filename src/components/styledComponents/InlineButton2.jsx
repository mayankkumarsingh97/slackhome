import styled, { css } from 'styled-components'

const InlineButton2 = styled.button`
color: var(--purple-bg);
font-weight:var(--fw-500);
font-size:1rem;
width: 100%;
/* border: 2px solid var(--purple-bg); */
border-radius:var(--border-rad_btn);

${props => props.header_white && css`
    background-color:var(--purple-bg);
    border: 1px solid #fff;
    color:#fff;
    padding:.4rem 0rem;
    margin:0 5px;
    &:hover{
        transform: scale(.977);
        border:2px solid #fff;
    }
`};

${props => props.hero_google && css`
    background-color:#008cff;
    margin: 0 5px;
    border: 1px solid #008cff;
    text-transform: uppercase;
    padding:.55rem .25rem;
    color:#fff;
    &:hover{
        
    }
`};

${props => props.sales_white  && css`
  background-color: #fff;
  padding:.7rem 1rem;
  margin:1.4rem 4px;
  border:1px solid #4A154B;
`};

${props => props.talktosales_footer  && css`
  background-color: #4A154B;
  padding:.8rem 1.2rem;
  margin:1.4rem 0;
  color:#FFF;
  transform: all .122 ease;
  border: 2px solid #fff;
  width:100%;
  &:hover{
    /* border:2px solid #4A154B; */
  }
`};

@media (max-width:575px){
    margin:.5rem 0;
   } 
`
export default InlineButton2


