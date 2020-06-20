import { exportFunction } from '../../utils/deploy'
import functions from '../../utils/base_functions'

const _exportFunction = (name: string, f: () => any) =>
  exportFunction(['v1', 'pubsub', 'task', name], exports, f)

_exportFunction('remind', () => functions()
  .pubsub
  .schedule('0 0 1 1 *')
  .onRun(async (context) => {
    console.log(context)
  }))