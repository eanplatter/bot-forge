import React, { Component } from 'react'
import { render } from 'react-dom'
import * as S from 'stardust'

class App extends Component {
  render() {
    return (
      <S.Container>
        <S.Divider className='hidden' />
        <S.Header.H1>
          Bot Forge
        </S.Header.H1>
      </S.Container>
    )
  }
}

render(<App />, document.getElementById('root'))
