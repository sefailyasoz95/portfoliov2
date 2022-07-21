import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import NotFoundPage from "./Pages/NotFoundPage";
import RouteProtecter from "./Pages/RouteProtecter";
import store from "./Redux/store/store";

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				{/* <Navbar /> */}
				<Routes>
					{/* AUTH PAGES */}
					<Route path='/' element={<HomePage />} />
					<Route path='/admin-cms-login' element={<LoginPage />} />
					{/* ADMIN PAGES */}
					<Route path='/admin-cms' element={<RouteProtecter />}>
						{/* <Route path='dashboard' element={<Dashboard />} /> */}
					</Route>
					<Route path='*' element={<NotFoundPage />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
