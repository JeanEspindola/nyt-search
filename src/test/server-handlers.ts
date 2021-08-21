import { rest } from 'msw'
import { URL } from '../utils/constants'
import { responseList } from './mock/articleMockedData'

const handlers = [
  rest.get(URL, (req, res, ctx) => {
    return res(
      ctx.status(202, 'Mocked status'),
      ctx.json({
        response: {
          docs: [...responseList],
        },
      })
    )
  }),
]
export { handlers }
