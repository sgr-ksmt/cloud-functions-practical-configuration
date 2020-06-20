import { exportFunctionsModule } from './utils/deploy'
import * as admin from 'firebase-admin'
import * as P from './function_path'

admin.initializeApp()

const domains = [
  P.v1,
  P.admin
]

domains.forEach(d => exportFunctionsModule([d], exports))
