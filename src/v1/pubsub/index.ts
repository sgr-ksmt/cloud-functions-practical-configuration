import { exportFunctionsModule } from '../../utils/deploy'

const domains = [
  'task',
]

domains.forEach(d =>
  exportFunctionsModule(['v1', 'pubsub', d], exports)
)