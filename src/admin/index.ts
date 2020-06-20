import { exportFunctionsModule } from '../utils/deploy'
import * as P from '../function_path'

const domains = [
  P.v1,
]

domains.forEach(d =>
  exportFunctionsModule([P.admin, d], exports)
)