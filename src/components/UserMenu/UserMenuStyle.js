import styled from '@emotion/styled';

export const Span = styled.span`
  text-shadow: #fc0 1px 0 10px;
  margin-left: auto;
`;

export const Button = styled.button`
  position: relative;
  background-color: #ffffff;
  border: 1px solid #cccccc;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;
  transition: border 0.2s linear 0s, box-shadow 0.2s linear 0s;
  border-radius: 4px;
  display: block;
  width: 120px;
  font-size: 14px;
  text-align: center;
  padding: 4px 6px;
  text-decoration: none;
  cursor: pointer;
  &::after {
    pointer-events: none;
    position: absolute;
    left: 0;
    top: 20px;
    transform: translateX(calc(-50% + 60px));
    transition: all 0.2s ease-out;
    content: '${props => props.email}';
    opacity: 0;
    text-shadow: #fc0 1px 0 10px;
    scale: 0.75;
  }
  &:hover {
    ::after {
      opacity: 1;
      scale: 1;
      transform: translate(calc(-50% + 60px), 20px);
    }
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset,
      0 0 8px rgba(82, 168, 236, 0.6);
    outline: 0 none;
  }
`;
