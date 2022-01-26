// import { Link } from 'react-router-dom'
import Fretboard from './components/Fretboard';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
	return (
		<div className="App">
			<Header />
			<main>
				<Fretboard />
			</main>
			<Footer />
		</div>
	);
}

export default App;
