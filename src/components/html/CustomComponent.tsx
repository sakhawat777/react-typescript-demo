import React from 'react'
import Greet from '../Greet'

// Extracting a Components Prop Types From Greet Component
export const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
  return (
    <div>{props.name}</div>
  )
}
