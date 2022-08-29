import styled, { css } from 'styled-components'

const ArrowButton = styled.button`
position:relative;
color: var(--arrow-btn);
font-size:1.125rem;
margin:1.4rem 0;

${({ teams }) => teams && css`
   &::after {
    content: "";
    position:absolute;
    display: flex;
    top:28px;
    left:0;
    height: 1px;
    width: 0;
    background:var(--arrow-btn);
    width:0;
    transition:all .46s ease-in-out;
    
  }
  &:hover{
    ::after{
      width: 90%;
    }
  }
  @media (max-width:575px) {
    &:hover{
    ::after{
      width:0;
    }
  }
`}

${({ collection }) => collection && css`
  color:blue;
  margin: .10rem 0;
  font-size:.9rem;
  &:hover {
    border-bottom: none;
  };
`}
`
export default ArrowButton