import React from 'react'
import { render } from '@testing-library/react'
import GridItem from '../components/Product'

test('renders products', () => {
  const component = render(<GridItem name='product 1' price='$20' />)

  component.getByText('product 1')
})
