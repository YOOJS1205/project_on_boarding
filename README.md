# Project onBoarding

## Tech Stack

- React.js
- TypeScript
- Styled-components
- axios
- MSW
- React-query
- Yarn Berry

## 구현 내용

### MSW를 사용하여 가상으로 로그인, 회원가입 API를 생성

```typescript
// src/mock/handlers.ts
import { rest } from 'msw';

interface FormValue {
  id: string;
  password: string;
}

export const handlers = [
  // 로그인
  rest.post<FormValue>('/login', async (req, res, ctx) => {
    if (!req.body.id) {
      return res(
        ctx.status(401),
        ctx.json({
          message: '아이디가 입력되지 않았습니다.',
        }),
      );
    }
    if (!req.body.password) {
      ctx.status(402),
        ctx.json({
          message: '비밀번호가 입력되지 않았습니다.',
        });
    }
    return res(
      ctx.status(200),
      ctx.json({
        id: req.body.id,
        password: req.body.password,
      }),
    );
  }),
  // 회원가입
  rest.post<FormValue>('/join', async (req, res, ctx) => {
    if (!req.body.id) {
      return res(
        ctx.status(401),
        ctx.json({
          message: '아이디가 입력되지 않았습니다.',
        }),
      );
    }
    if (!req.body.password) {
      ctx.status(402),
        ctx.json({
          message: '비밀번호가 입력되지 않았습니다.',
        });
    }
    return res(
      ctx.status(200),
      ctx.json({
        id: req.body.id,
        password: req.body.password,
      }),
    );
  }),
];
```

```typescript
// src/mock/browser.ts
import { setupWorker } from 'msw';
import { handlers } from './handlers';

export const worker = setupWorker(...handlers);
```

### Styled-components + React-hook-form을 활용한 폼 UI 구현

<brr><br>

<div align='center'>
<img src='./src/images/loginUI.png' />
</div>
<br><br>

### 로그인으로 얻은 아이디, 비밀번호 React-query로 관리

- `React-query`로 유저 정보를 가져오는 `Custom-Hook` 생성

```typescript
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getUserAPI } from '../api/authAPI';

interface FormValue {
  id: string;
  password: string;
}

export default function useGetUserInfo(): FormValue | JSX.Element {
  const { isLoading, isError, data, error } = useQuery(
    ['userInfo'],
    getUserAPI,
    {
      refetchOnWindowFocus: false,
      retry: 0,
    },
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error Hanppend!</p>;
  }

  return data;
}
```

## PR Point

1. `useQuery`에 `TypeScript` 적용하는 것이 너무 어렵습니다.

```typescript
// useQuery에 들어가는 비동기 처리 함수
export const getUserAPI = async (): Promise<FormValue> => {
  try {
    const res = await axios.get('/user');
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

// useQuery를 사용하여 유저 아이디, 비밀번호를 가져오는 custom hook
export default function useGetUserInfo(): FormValue | JSX.Element {
  const { isLoading, isError, data, error } = useQuery(
    ['userInfo'],
    getUserAPI,
    {
      refetchOnWindowFocus: false,
      retry: 0,
    },
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error Hanppend!</p>;
  }

  return data;
}

// Todo 페이지에서 유저 정보 가져오는 파트
// any를 참지 못하였습니다...
export default function Todo() {
  const userInfo: any = useGetUserInfo();
  return (
    <div>
      <h1>{userInfo.id}</h1>
      <h1>{userInfo.password}</h1>
    </div>
  );
}
```

- `userInfo`의 `id password` 프로퍼티에 접근하고 싶은데 마음처럼 되지않아 `any` 타입을 사용했습니다.

2. 로그인 시도를 성공했을 때 `todo` 페이지로 넘기고 싶습니다.

```typescript
const onSubmitLoginForm = (): void => {
  loginAPI(getValues('id'), getValues('password'));
  navigate('/todo');
};
```

- `navigate`를 어떻게 처리하는 것이 좋을까요?
