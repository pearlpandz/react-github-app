import React, { Fragment } from 'react'
import spinner from './spinner.gif'

const Spinner = () => <Fragment>
    <img src={spinner} alt="loading..." style={{width: '100px', margin: '0 auto'}} />
</Fragment>


export default Spinner;