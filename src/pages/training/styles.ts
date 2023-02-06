import styled from 'styled-components'
import Checkbox from '@mui/material/Checkbox'


interface TrainingProps {
  variant: boolean;
}

export const WorkoutContainer = styled.button<TrainingProps>`
 display: flex;
 align-items: flex-start;
 flex-direction: column;
 margin-top: 0.5rem;
 padding:  1, 2rem;
 gap: 2rem;

 background: #ffff;
 color: #999;

 width: 100vw;
 border-radius: 8px;

 background-color: ${(props) => props.variant === true ? '#00FF00' : '#fff'};

 &[data-state='unchecked']:hover {
    background: #ED008B; 
 }

 &[data-state='checked'] {
    background: #D60002};
`;


export const Profile = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: row;
  justify-content: space-between;
  padding: 1rem;
  gap: 1rem;
  margin-bottom: 0;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ED008B;
`;

export const Training = styled.div`
display: flex;
align-items: flex-start;
flex-direction: column;
margin-bottom: 2rem;
padding: 1rem;

h2 {
  color: #9704FA;
  
  font-weight: 700;
}

span {
  color: #8A99A6;
  text-align: justify;
}
`;

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;