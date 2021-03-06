import { useState } from "react"
import { notesSingle } from "../lib/logic"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Fretboard from "../components/Fretboard"
import "../styles/pages/notes.css"

export default function Notes() {
	const [highlightedNotes, setHighlightedNotes] = useState([])

	const highlightNotes = (evt) => {
		const noteName = evt.target.name
		if (evt.target.checked) {
			setHighlightedNotes([...highlightedNotes, noteName])
		} else {
			const filteredNotes = highlightedNotes.filter(note => note !== noteName)
			setHighlightedNotes(filteredNotes)
		}
	}

	return (
		<div className="page-notes">
			<Header />
			<main>
				<div className="highlight-notes">
					<h3>Highlight Notes</h3>
					<section>
						{notesSingle.map((note, index) => {
							return (
								<span key={index}>
									<label htmlFor={note}>{note}</label>
									<input type="checkbox" name={note} onClick={highlightNotes}/>
								</span>
							)
						})}
					</section>
				</div>
				<Fretboard notesToHighlight={highlightedNotes} />
			</main>
			<Footer />
		</div>
	)
}