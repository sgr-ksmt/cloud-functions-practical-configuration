import * as functions from 'firebase-functions'

export default async (
  data: any,
  context: functions.https.CallableContext
) => {
  console.log('admin/v1/users/update')
  return undefined
}