import * as Firestore from './firestore'
import * as Callable from './callable'
import * as Pubsub from './pubsub'

export const firestore = { ...Firestore }
export const callable = { ...Callable }
export const pubsub = { ...Pubsub }
