// import { useState } from "react"
import { notesSingle } from "../lib/logic"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Fretboard from "../components/Fretboard"
import "../styles/pages/notesquiz.css"

export default function Quiz() {
	// const [highlightedNotes, setHighlightedNotes] = useState([])

	// const highlightNotes = (evt) => {
	// 	const noteName = evt.target.name
	// 	if (evt.target.checked) {
	// 		setHighlightedNotes([...highlightedNotes, noteName])
	// 	} else {
	// 		const filteredNotes = highlightedNotes.filter(note => note !== noteName)
	// 		setHighlightedNotes(filteredNotes)
	// 	}
	// }

    const changeQuizNote = (evt) => {
        console.log(evt.target.value)
    }

	return (
		<div className="page-notesquiz">
			<Header />
			<main>
				<div className="highlight-notes">
					<h3>Select a Note</h3>
					<section className="scale-select">
					<div>
						<select name="notes" onChange={changeQuizNote}>
						{notesSingle.map((note, index) => {
							return <option key={note} value={note}>{note}</option>
						})}
						</select>
					</div>
					</section>
				</div>
				<Fretboard notesToHighlight={[]} />
			</main>
			<Footer />
		</div>
	)
}