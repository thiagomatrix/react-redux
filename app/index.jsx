import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family lastName='Braga'>
        <Member name='Thiago'  />
        <Member name='Clara'  />
        <Member name='Bela'  />
    </Family>
, document.getElementById('app'))

