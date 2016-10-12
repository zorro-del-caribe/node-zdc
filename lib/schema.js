module.exports = {
  version: '1.0.0',
  api: {
    classifieds: {
      list: {
        method: 'get',
        path: '/'
      },
      self: {
        method: 'get',
        path: '/:classifiedId'
      },
      create: {
        method: 'post',
        path: '/',
        body: ['title', 'content', 'price']
      }
    },
    // ,
    // tags:{
    //
    // },
    users: {
      me: {
        method: 'put',
        path: '/me',
        body: ['email', 'name']
      },
      self: {
        method: 'get',
        path: '/:userId'
      }
    }
  }
};