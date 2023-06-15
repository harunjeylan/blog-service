import React from 'react'
import ButtonToggleTheme from './index'

describe('<ButtonToggleTheme />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ButtonToggleTheme />)
  })
})