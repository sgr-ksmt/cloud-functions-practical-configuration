import { exportFunction } from '../../utils/deploy'
import functions from '../../utils/base_functions'
import * as P from '../../function_path'

const _exportFunction = (name: string, f: () => any) =>
  exportFunction(
    [P.v1, P.firestore, P.user, name],
    exports,
    f
  )

const path = '/v/{version}/users/{userID}'

_exportFunction('onCreate', () => functions().firestore
  .document(path)
  .onCreate(async (snapshot, context) => {
    console.log(snapshot, context);
  }))

_exportFunction('onUpdate', () => functions().firestore
  .document(path)
  .onUpdate(async (snapshot, context) => {
    console.log(snapshot, context);
  }))

_exportFunction('onDelete', () => functions().firestore
  .document(path)
  .onDelete(async (snapshot, context) => {
    console.log(snapshot, context);
  }))