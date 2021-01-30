import { render } from '@redwoodjs/testing'

import IdeasLayout from './AppLayout'

describe('IdeasLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<IdeasLayout />)
    }).not.toThrow()
  })
})
