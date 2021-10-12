import * as init from './init.js'
import * as auth from './auth.js'
import * as db from './db.js'
import * as storage from './storage.js'

export default Object.assign({}, init, auth, db, storage)