import functions from '../../../utils/base_functions'

export const execute = functions()
  .https
  .onCall(async (data, context) => {
    await (await import('./execute')).default(data, context)
  })
