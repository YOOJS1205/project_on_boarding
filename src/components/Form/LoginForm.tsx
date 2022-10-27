import React from 'react';
import { useForm } from 'react-hook-form';
import { loginAPI } from '../../api/authAPI';

import {
  FormContainer,
  Title,
  Label,
  Input,
  Button,
  ErrMsg,
} from './FormStyle';

interface FormValue {
  id: string;
  password: string;
}

export default function LoginForm() {
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>();

  const onSubmitLoginForm = (): void => {
    loginAPI(getValues('id'), getValues('password'));
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmitLoginForm)}>
      <Title>로그인</Title>
      <Label htmlFor="id">아이디</Label>
      <Input
        id="id"
        type="email"
        {...register('id', { required: '아이디는 필수 입력사항입니다.' })}
      />
      {errors.id && <ErrMsg>{errors.id.message}</ErrMsg>}
      <Label htmlFor="password">비밀번호</Label>
      <Input
        id="password"
        type="password"
        {...register('password', {
          required: true,
          minLength: { value: 8, message: '비밀번호는 8자리 이상입니다.' },
        })}
      />
      {errors.password && <ErrMsg>{errors.password.message}</ErrMsg>}
      <Button type="submit">로그인하기</Button>
    </FormContainer>
  );
}
