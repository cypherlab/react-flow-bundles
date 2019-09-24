import React from 'react'

// const btnClass = `text-light`
const btnClass = `btn btn-light`

export default ({ flow }) => {

  const { current, next, prev } = flow.get()

  return (<div className="d-flex justify-content-between bg-dark p-2">
    { prev.index>=0
      ? <a href="javascript:" className={`${btnClass}`} onClick={()=>flow.set(-1)}>
          {'< '}{prev.id}
        </a>
      : <span></span>
    }
    { next.index>=0
      ? <a href="javascript:" className={`${btnClass}`} onClick={()=>flow.set()}>
          {next.id} {' >'}
        </a>
      : <span></span>
    }
  </div>)
}