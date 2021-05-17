import mock from '../utils/mock'

mock.onPost('/api/home/login').reply((config) => {
    const { email, password } = JSON.parse(config.data)
    if(email != 'migueldossantos@hotmail.com' || password != 'admin') {
        return [400, { message: 'Seu email ou senha estão incorretos' }]
    }

    const user = {
        id: 1,
        name: 'Miguel S Ribeiro',
        username: 'MDMago',
        email: 'migueldossantos@hotmail.com',
        avatar: '/images/avatars/miguel.png'
    }
    return [200, { user }]
})