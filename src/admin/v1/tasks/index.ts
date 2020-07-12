import functions from '../../../utils/base_functions'

export const list = functions()
  .https
  .onCall(async (data, context) => {
    await (await import('./list')).default(data, context)
  })

export const update = functions()
  .https
  .onCall(async (data, context) => {
    await (await import('./update')).default(data, context)
  })
