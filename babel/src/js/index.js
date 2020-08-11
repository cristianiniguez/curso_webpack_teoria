import '../css/index.css'

import search from './search'
import render from './render'

const id = prompt('¿Quién es ese pokemón?')

search(id)
    .then((data) => {
        render(data)
    })
    .catch(() => {
        console.log('No hubo Pokemon')
    })