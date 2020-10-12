import React from 'react'
import ReactDOM from 'react-dom'

const root = document.getElementById('root')

import App from './App'

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
)

// ReactDom.render(<App />, root)