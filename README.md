# An example of practical Cloud Functions' configuration

- Blog (Japanese): TBD

## How to use

- Install `node v10.17.0`
- Install `yarn`
- Open `.firebaserc` and replace `<your-project-id>` to your Firebase project id.

```bash
$ yarn
$ yarn build
$ yarn deploy
```

## Example Functions

- admin-v1-tasks-list(asia-northeast1)
- admin-v1-tasks-update(asia-northeast1)
- admin-v1-users-list(asia-northeast1)
- admin-v1-users-update(asia-northeast1)
- v1-callable-purchase-execute(asia-northeast1)
- v1-firestore-user-onUpdate(asia-northeast1)
- v1-firestore-user-onDelete(asia-northeast1)
- v1-firestore-user-onCreate(asia-northeast1)
- v1-firestore-task-onCreate(asia-northeast1)
- v1-firestore-task-onDelete(asia-northeast1)
- v1-firestore-task-onUpdate(asia-northeast1)
- v1-pubsub-task-remind(asia-northeast1)
