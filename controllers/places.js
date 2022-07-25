const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        name: 'Din Tai Fung',
        city: 'Las Vegas',
        state: 'NV',
        cuisines: 'Chinese, Dim-Sum',
        pic: '/images/dintaifung.jpg'
      }, {
        name: 'Carbone',
        city: 'Las Vegas',
        state: 'NV',
        cuisines: 'Italian',
        pic: '/images/pasta.jpg'
      }]   
    res.render('places/index', { places })
})

module.exports = router