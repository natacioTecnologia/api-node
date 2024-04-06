import * as create from './Create'
import * as list  from './List'
import * as update from './Update'

export const CidadesController = {
  ...create,
  ...update,
  ...list
}