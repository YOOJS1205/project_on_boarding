import { rest } from 'msw';

export const handlers = [
  rest.get(
    'https://jsonplaceholder.typicode.com/todos/1',
    async (req, res, ctx) => {
      return res(
        ctx.json({
          id: 1,
        }),
      );
    },
  ),
];
