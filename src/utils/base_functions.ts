import * as f from 'firebase-functions'
import { SUPPORTED_REGIONS } from 'firebase-functions'
const functions = (
  runtimeOptions: f.RuntimeOptions = { memory: '512MB' },
  region: typeof SUPPORTED_REGIONS[number] = 'asia-northeast1'
) => f.runWith(runtimeOptions).region(region)

export default functions
