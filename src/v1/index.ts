import { exportFunctionsModule } from '../utils/deploy'
import * as P from '../function_path'

const domains = [
  P.firestore,
  P.callable,
  P.pubsub,
]

domains.forEach(d =>
  exportFunctionsModule([P.v1, d], exports)
)