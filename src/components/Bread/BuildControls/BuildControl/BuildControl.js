import React from 'react'
import classes from './BuildControl.module.css'

const BuildControl = (props) => {
  return (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.Label}</div>
        <button onClick={props.added} className={classes.More}>Add</button>
        <button onClick={props.deleted} className={classes.Less}>Del</button>
    </div>
  )
}

export default BuildControl