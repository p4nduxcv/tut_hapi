module.exports = [
    {
        method: 'GET',
        path: '/home',
        handler: (req, res) => {
            return ('Hello World! from Home');
        }
    },

    {
        method: 'GET',
        path: '/NoHome',
        handler: (req, res) => {
            return ('Hello World! from NoHome');
        }
    }
];