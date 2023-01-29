import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogDetail from './pages/BlogDetail/BlogDetail'
import Home from './pages/Home/Home'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route 
					path="/" 
					element={<Home/>}
				/>
				<Route 
					path="/blog/:id"
					element={<BlogDetail/>}
				/>
			</Routes>
		</BrowserRouter>
	)
}

export default App;
