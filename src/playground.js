import React from 'react'
import Flow from '@cypherlab/react-flow'
import FlowBundle from './index'

const bundles = [
    'debugbar'
  , 'microdot'
  , 'dotbar'
  , 'navmenu'
]

export default (props) => {

  const themes = ['light', 'dark']
  const [theme, setTheme] = React.useState('light')
  const themeDark = theme == 'dark'

  return (<div className="col-12 p-5 text-center">
    <div className="m-auto col-2 text-center">
      <select className="custom-select custom-select-sm mb-2" onChange={e=>setTheme(e.target.value)} value={theme}>
        { themes.map((t, i) => (
          <option key={i} value={t}>theme: {t}</option>
        )) }
      </select>
    </div>
    <div className="m-auto col-8 row text-center">
      <Flow flows='one,two,three'>
        { flow => { 
          return bundles.map((bundle, i) => (<div className="col-6" key={i}>
            <div className="pt-4"><u>{bundle}</u></div>
            <div className={`bundle ${themeDark?'bg-dark':''} my-4 p-4`}>
              <FlowBundle bundle={bundle} flow={flow} theme={theme} />
            </div>
          </div>))
        }}
      </Flow>
    </div>

    <style jsx="true">{`
      .bundle {
        border-radius: 4px;
        border: 2px solid #eaeaea;
      }
    `}</style>
  </div>)
}






