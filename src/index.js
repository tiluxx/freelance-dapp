import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router } from 'react-router-dom'
import GlobalStyles from 'src/components/GlobalStyles/GlobalStyles'
// import { Wallet } from 'src/utils/near-wallet'

const CONTRACT_ADDRESS = process.env.CONTRACT_NAME
// const wallet = new Wallet({ createAccessKeyFor: CONTRACT_ADDRESS })

window.onload = async () => {
    // const isSignedIn = await wallet.startUp()
    const root = ReactDOM.createRoot(document.getElementById('root'))
    root.render(
        <React.StrictMode>
            <GlobalStyles>
                <Router>
                {/* <App isSignedIn={isSignedIn} contractId={CONTRACT_ADDRESS} wallet={wallet} /> */}
                    <App />
                </Router>
            </GlobalStyles>
        </React.StrictMode>,
    )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
