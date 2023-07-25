import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Title = styled.h2`
  color: #00000085;
  margin-top: 50px;
  font-size: calc(3em + 10vw);
  text-align: center;
`;
export const Title2 = styled.p`
  font-size: calc(1em + 5vw);
  text-align: center;
`;
export const Button = styled(NavLink)`
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  background-color: #fefefe;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.075) inset;
  transition: box-shadow 0.25s linear 0s;
  border-radius: 7px;
  display: block;
  max-width: calc(240px + 10vw);
  font-size: calc(1em + 1vw);
  text-align: center;
  padding: 10px 15px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset,
      0 0 8px rgba(82, 168, 236, 0.6);
    outline: 0 none;
  }
`;
