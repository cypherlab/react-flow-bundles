# `@cypherlab/react-flow-bundles`

<!--- Hero Image
<p align="center">
  <img width="300" alt="hero" src="">
</p>
-->
<p align="center">
  Bundles kit for <code>@cypherlab/react-flow</code>  
  <br />
  <a href="https://raw.githack.com/cypherlab/react-flow-bundles/master/index.html">[demo]</a>
</p>
<!--- NPM badges
-->
<p align="center">
  <a href="https://www.npmjs.com/package/@cypherlab/@cypherlab/react-flow-bundles">
    <img alt="npm version" src="https://img.shields.io/npm/v/@cypherlab/react-flow-bundles">
  </a>
  <img alt="lisence" src="https://img.shields.io/npm/l/@cypherlab/react-flow-bundles">
</p>


## Install
```
yarn add @cypherlab/react-flow-bundles
```


## Usage 

```js
import Flow from '@cypherlab/react-flow'
import FlowBundle from '@cypherlab/react-flow-bundles'

<Flow flows='one,two,three'>
  { flow => (<FlowBundle bundle="microdot" flow={flow} />) }
</Flow>
```

See [Live demo](https://raw.githack.com/cypherlab/react-flow-bundles/master/index.html)  



## FlowBundle options

| option        | info                                                            |
|---------------|-----------------------------------------------------------------|
| bundle        | bundle to use                                                   |



## Dev / Playground 

Source files located in `src` directory.   
Edit `src/playground.js` to build your playground.

```js
yarn run dev
```