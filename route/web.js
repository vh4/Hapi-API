const {index} = require('../controller/web')

const router = [
    {
        method:'GET',
        path:'/',
        handler:index
    },

    {
        method:'GET',
        path:'/about',
        handler: (req, res) => {
            return "About"
        }
    },

    {
        method:'GET',
        path:'/contact',
        handler: (req, res) => {
            return "contact"
        }
    },
    
    {
        method:'GET',
        path: '/{any*}',
        handler: (req, res) => {
            return "Halaman tidak ditemukan"
        }
    },
    {
        method: 'GET',
        path: '/users/{username?}',
        handler: (req, res) => {
            const { username = 'stranger' } = req.params;    
            return `Hello, ${username}!`;
        },
    
    },
    {
        method: 'POST',
        path: '/login',
        handler: (request, h) => {
            const { username, password } = request.payload; //paylaod or express using body
            return `Welcome ${username}!`;
        },
    }
]

module.exports = router