import styled, { css } from 'styled-components'

const InlineButton = styled.button`
color: var(--white);
${props => props.sales_purple && css`
  background-color: indigo;
`};
font-size:1rem;
border-width:0px;
margin:1.4rem 0;
width:100%;
border: 2px solid var(--purple-bg);
border-radius:var(--border-rad_btn);
${props => props.header_purple && css`
    background-color:#fff;
    border: 2px solid #fff;
    color:#4A154B;
    font-weight: 600;
    margin:0 5px;
`};
${props => props.hero_email && css`
    background-color:#fff;
    border: 2px solid #fff;
    color:#4A154B;
    margin: 0 5px;
    font-weight: 600;
    text-transform: uppercase;
    padding:.55rem .25rem;
    transition: transform .088s linear;
    &:hover{
      transform: scale(.9999);
    }
    @media (min-width:575px) and (max-width:768px){
     margin:.5rem 0;
 } 
`};
${props => props.sales_purple && css`
  background-color:#611f69;
  padding:.7rem 1rem;
  margin:1.4rem 4;
  transition: all .057s ease;
  &:hover{
    background-color:  #4A154B;;
  }
`};
${props => props.tryforfree && css`
  background-color:#fff;
  padding:.8rem 1.2rem;
  margin:1.4rem 0;
  color:#4A154B;
  font-weight: 500;
  border:2px solid #FFF;
  border-radius: 3px;
  transition: all .087s ease;
`};
&:hover {
    border:2px solid #4A154B;
    
  }
  
 @media (max-width:575px){
  margin:.5rem 0;
 } 
`
export default InlineButton


