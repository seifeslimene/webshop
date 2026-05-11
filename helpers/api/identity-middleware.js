import { usersRepo } from '../db-repo'

async function identityMiddleware(req, identity = 'user', isJwt = false) {
  if (identity === 'user' && isJwt === false) return

  const userId = req.headers.get('userId')
  const user = await usersRepo.getOne({ _id: userId })
  req.headers.set('userRole', user.role)
  req.headers.set('userRoot', user.root)

  if (identity === 'admin' && user.role !== 'admin') {
    throw 'No permission to operate'
  }

  if (identity === 'root' && !user.root) {
    throw 'No permission to operate, only super management can operate'
  }
}

export { identityMiddleware }
