
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import './index.css';
import { Home } from './components/Home/Home';
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { LandingPage } from "./components/Landing/LandingPage";
import { MainPage } from "./components/Mainhomepage/MainPage";
import { useState } from "react";

function App() {
	

	

	
  return (
  	<div>
			<BrowserRouter>
				<Routes>
					{/* <Route path='/' element={<Home setResult={setResult} />} /> */}
					<Route path='/Resume-builder' element={ <Home />} />
					<Route path='/home' element={ <MainPage /> } />
					<Route path='/login' element={<Login  />} />
					<Route path='/Register' element={<Register/>} />
					<Route path='/' element={<LandingPage/>} />
          
				</Routes>
			</BrowserRouter>
		</div>

  );
}

export default App;
