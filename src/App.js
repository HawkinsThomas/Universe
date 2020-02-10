import React from 'react';
import { Route, Switch } from 'react-router-dom'

import CanvasPage from './pages/CanvasPage'
import EditorPage from './pages/EditorPage'

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={CanvasPage} />
      <Route exact path="/editor" component={EditorPage} />
    </Switch>
  )
}
