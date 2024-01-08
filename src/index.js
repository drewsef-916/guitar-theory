import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Notes from './routes/notes'
import Scales from './routes/scales'
import Info from './routes/info'
import Quiz from './routes/quiz'

render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="notes" element={<Notes />} />
				<Route path="scales" element={<Scales />} />
				<Route path="info" element={<Info />} />
				<Route path="quiz" element={<Quiz />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
