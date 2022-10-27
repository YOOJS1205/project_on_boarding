import styled from 'styled-components';

export const Title = styled.h2`
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 60px;
`;

export const FormContainer = styled.form`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  width: 500px;
  height: 400px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 20px 60px;
  box-sizing: border-box;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
`;

export const Input = styled.input`
  display: block;
  border: none;
  outline: none;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  width: calc(100% - 5px);
  margin-bottom: 30px;
  height: 30px;
  &:focus {
    border-color: black;
  }
`;

export const Button = styled.button`
  display: block;
  width: 100%;
  padding: 15px 0;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
`;

export const ErrMsg = styled.p`
  color: red;
  font-size: 12px;
  margin-top: -20px;
`;
