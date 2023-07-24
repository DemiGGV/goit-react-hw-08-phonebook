import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavMenu = styled.nav`
  display: flex;
  gap: 20px;
`;

export const MenuItem = styled(NavLink)`
  text-decoration: none;
  display: block;
  padding: 0 20px;
  line-height: 50px;
  color: black;
  transition: 0.3s linear;
  &:hover {
    background: rgba(0, 0, 0, 0.3);
    color: white;
  }
`;
