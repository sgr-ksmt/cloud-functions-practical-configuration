import { exportFunctionsModule } from '../../utils/deploy'
import * as P from '../../function_path'

const domains = [
  P.user,
  P.task,
]

domains.forEach(d =>
  exportFunctionsModule([P.v1, P.firestore, d], exports)
)