let o = [
    { Po: "a", Qo: "b" },
    { Po: "aa", Qo: "bb" },
]



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
        path: '/o',
        handler: (req, res) => {
            return (o);
        }
    },
    {
        method: 'GET',
        path: '/',
        handler: (req, res) => {
            return (getDataFromXtable());
        }
    }
];