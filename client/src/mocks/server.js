import { setupServer } from 'msw/node'
// import { handlers } from './handlers'
import { rest } from 'msw'

export const server = setupServer(
  rest.get('http://localhost:3005', (req, res, ctx) => {
    return res(ctx.json(['a', 'b', 'c']))
  }),
)