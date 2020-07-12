import * as functions from 'firebase-functions'

export default async (
  snapshot: functions.firestore.DocumentSnapshot,
  context: functions.EventContext
) => {
  console.log('v1/firestore/task/onCreate')
  return undefined
}