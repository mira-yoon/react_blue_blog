import React from "react";
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from './context/UserContext'
import BlogDetail from './pages/BlogDetail/BlogDetail'
import Header from './components/header/Header'
import Home from './pages/Home/Home'
import './app.css'

function App() {
	const [userId] = useState(1);
	const [isLogin] = useState(true);


	return (
		<UserContext.Provider value={{userId, isLogin}}>
			<BrowserRouter>
				<Header/>
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
		</UserContext.Provider>
	)
}

export default App;
