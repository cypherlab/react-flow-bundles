import React from 'react'
import Bundles from './bundles'

export default (props = {}) => {
  return Bundles[props.bundle].default(props)
}

export const BundleList = (overide) => {
  return overide || Object.keys(Bundles)
}
