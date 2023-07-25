import { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'
import { publicRoutes } from '~/routes'

function App() {
    return (
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
    )
}

export default App
