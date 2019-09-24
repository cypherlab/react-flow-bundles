import React from 'react'
import Microdot from './microdot'


export default ({ flow, className }) => {
  const { current, flows } = flow.get()
  return (<div className={className||"m-auto"}>
    <a href="javascript:" onClick={()=>flow.set('initial')} className="btn btn-sm btn-outline-dark mx-1" style={{minWidth: 'auto'}}>x</a>
    <a href="javascript:" onClick={()=>flow.set(-1)} className="btn btn-sm btn-outline-dark mx-1" style={{minWidth: 'auto'}}>{`<`}</a>
    <Microdot flow={flow} />
    <a href="javascript:" onClick={()=>flow.set()} className="btn btn-sm btn-outline-dark mx-1" style={{minWidth: 'auto'}}>{`>`}</a>
  </div>)
}