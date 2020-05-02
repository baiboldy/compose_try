import React from 'react'
import withConsole from '../hocs/withConsole'
import {compose} from 'redux';

const Disa = (props) => {
    props.consoling()
    debugger;
    return(
        <div>My friends</div>
    )
}

export default compose(
    withConsole
)(Disa);