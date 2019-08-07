import React, { useRef } from 'react'

export default function MyVisComponent() {
  const refElement = useRef(null)

  return <div id="vis-container" ref={refElement} />
}
