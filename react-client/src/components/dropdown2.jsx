import React from 'react'
import { Dropdown } from 'semantic-ui-react'

import {categoryOptions} from '../'
  categoryOptions = [
    {
      text: 'Business',
      value: 'Business',
    },
    {
      text: 'North America',
      value: 'North America'
    },
    {
      text: 'South America',
      value: 'South America'
    }, 
    {
      text: 'Europe',
      value: 'Europe'
    },
    {
      text: 'Africa',
      value: 'Africa'
    },
    {
      text: 'Middle East',
      value: 'Middle East'
    },
    {
      text: 'Asia',
      value: 'Asia'
    }
]

const DropdownExampleSelection = () => (
  <Dropdown placeholder='Select a category' fluid selection options={categoryOptions} />
)

export default DropdownExampleSelection