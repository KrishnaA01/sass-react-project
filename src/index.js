
import React from "react"
import App from "./App.js"
import Women from "./components/WomenPage"
import reactDOM from "react-dom"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

reactDOM.render(
    <Router>
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/women' element={<Women/>} />
        </Routes>
    </Router>,

document.getElementById("root")
)