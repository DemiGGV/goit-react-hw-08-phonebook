import styled from '@emotion/styled';

export const FormContainerCSS = styled.form`
  min-width: 150px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const TextFieldsCSS = styled.div`
  display: flex;
  gap: 5px;
  border: 1px solid #bdbdbd50;
  border-radius: 0.25rem;
  @media screen and (max-width: 650px) {
    flex-direction: column;
  }
`;

export const FieldInputCSS = styled.input`
  display: block;
  width: 100%;
  height: calc(2.25rem + 2px);
  padding: 0.375rem 0.75rem;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #e7ecf2;
  background-clip: padding-box;
  border: 0px;
  outline: 0;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &::placeholder {
    color: #212529;
    opacity: 0.4;
  }
  &:focus {
    color: #212529;
    background-color: #fff;
    border-color: #bdbdbd;
    outline: 0;
    box-shadow: 0 0 2px 2px rgba(158, 158, 158, 0.25);
  }
  &:disabled {
    background-color: #f5f5f5;
    opacity: 1;
  }
`;

export const FormEditBtnCSS = styled.button`
  margin: 0;
  height: 38px;
  background-color: #ffffff;
  border: 1px solid #cccccc;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;
  transition: border 0.2s linear 0s, box-shadow 0.2s linear 0s;
  border-radius: 4px;
  display: block;
  font-size: 14px;
  text-align: center;
  padding: 8px;
  text-decoration: none;
  cursor: pointer;
  max-width: 45px;
  &:hover {
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset,
      0 0 8px rgba(82, 168, 236, 0.6);
    outline: 0 none;
  }
`;
