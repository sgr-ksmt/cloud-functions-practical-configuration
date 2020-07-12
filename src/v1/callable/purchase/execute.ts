import * as functions from 'firebase-functions'

export default async (
  data: any,
  context: functions.https.CallableContext
) => {
  console.log('v1/callable/purchase/execute')
  return undefined
}