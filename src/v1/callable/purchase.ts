import { exportFunction } from '../../utils/deploy'
import functions from '../../utils/base_functions'
import * as P from '../../function_path'

exportFunction(
  [P.v1, P.callable, P.purchase, 'execute'],
  exports,
  () => functions()
    .https
    .onCall((data, context) => {
      console.log(data, context);
    })
)
