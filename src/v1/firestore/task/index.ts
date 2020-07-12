import functions from '../../../utils/base_functions'

const path = '/v/{version}/users/{userID}/tasks/{taskID}'

export const onCreate = functions().firestore
  .document(path)
  .onCreate(async (snapshot, context) => {
    await (await import('./onCreate')).default(snapshot, context)
  })

export const onUpdate = functions().firestore
  .document(path)
  .onCreate(async (snapshot, context) => {
    await (await import('./onUpdate')).default(snapshot, context)
  })

export const onDelete = functions().firestore
  .document(path)
  .onCreate(async (snapshot, context) => {
    await (await import('./onDelete')).default(snapshot, context)
  })