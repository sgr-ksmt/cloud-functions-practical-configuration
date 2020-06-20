import { exportFunctionsModule } from '../../utils/deploy'
import * as P from '../../function_path'

const domains = [
  P.purchase,
]

domains.forEach(d =>
  exportFunctionsModule([P.v1, P.callable, d], exports)
)