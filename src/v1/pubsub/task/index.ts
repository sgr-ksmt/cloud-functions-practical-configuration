import functions from '../../../utils/base_functions'

export const remind = functions()
  .pubsub
  .schedule('0 0 1 1 *')
  .onRun(async (context) => {
    await (await import('./remind')).default(context)
  })
