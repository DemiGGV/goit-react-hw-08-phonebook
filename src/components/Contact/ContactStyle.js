import styled from '@emotion/styled';

export const LiItem = styled.li`
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  max-width: 450px;
  width: 100%;
  @media screen and (max-width: 650px) {
    max-width: 350px;
    padding: 0 20px;
  }
`;

export const LiSpan = styled.span`
  text-shadow: #fc0 1px 0 10px;
  margin-left: auto;
`;

export const LiButton = styled.button`
  margin: 0;
  height: 38px;
  background-color: #ffffff;
  border: 1px solid #cccccc;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;
  transition: border 0.2s linear 0s, box-shadow 0.2s linear 0s;
  border-radius: 4px;
  font-size: 1rem;
  padding: 8px;
  text-decoration: none;
  cursor: pointer;
  max-width: 85px;
  &:hover {
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset,
      0 0 8px rgba(82, 168, 236, 0.6);
    outline: 0 none;
  }
`;
