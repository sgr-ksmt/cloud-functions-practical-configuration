import { exportFunction } from '../../utils/deploy'
import functions from '../../utils/base_functions'
import * as P from '../../function_path'

const _exportFunction = (name: string, f: () => any) =>
  exportFunction([P.admin, P.v1, P.users, name], exports, f)

_exportFunction('list', () => functions()
  .https
  .onCall((data, context) => {
    console.log(data, context);
  }))

_exportFunction('update', () => functions()
  .https
  .onCall((data, context) => {
    console.log(data, context);
  }))
