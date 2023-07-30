import 'regenerator-runtime/runtime'
import { Fragment, createContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { publicRoutes } from 'src/routes'

const WalletContext = createContext()

function App({ isSignedIn, contractId, wallet }) {
    return (
        <WalletContext.Provider value={{ isSignedIn, contractId, wallet }}>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component

                        let Layout

                        if (route.layout) {
                            Layout = route.layout
                        } else {
                            Layout = Fragment
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        )
                    })}
                </Routes>
            </div>
        </WalletContext.Provider>
    )
}

export default App
export { WalletContext }
