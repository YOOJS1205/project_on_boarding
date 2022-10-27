import { rest } from 'msw';

interface FormValue {
  id: string;
  password: string;
}

export const handlers = [
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
