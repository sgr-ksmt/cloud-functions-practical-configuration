import { exportFunctionsModule } from '../../utils/deploy'
import * as P from '../../function_path'

const domains = [
  P.users,
  P.tasks,
]

domains.forEach(d =>
  exportFunctionsModule([P.admin, P.v1, d], exports)
)