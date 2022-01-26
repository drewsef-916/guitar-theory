import { useState } from "react"
import { tunings, notes, notesSingle } from "../lib/logic"
import '../styles/Fretboard.css'

export default function Fretboard({ tuning = ['E', 'B', 'G', 'D', 'A', 'E'] }) {
	const [highlightedNotes, setHighlightedNotes] = useState([])

	const stringNotes = tuning.map((string, index) => {
		const notesArray = []
		let currentNote = tuning[index]
		for (let i = 0; i <= 24; i++) {
			let noteIndex = notes.indexOf(currentNote)
			notesArray.push(notes[noteIndex])
			currentNote = notes[noteIndex + 1]
		}
		return notesArray
	})

	const [firstString] = stringNotes

	const highlightNotes = (evt) => {
		const noteName = evt.target.name
		console.log(evt.target.checked)
		if (evt.target.checked) {
			setHighlightedNotes([...highlightedNotes, noteName])
		} else {
			const filteredNotes = highlightedNotes.filter(note => note !== noteName)
			setHighlightedNotes(filteredNotes)
		}
	}

	return (
		<section className="fretboard">
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
			<div className="neck">
				<div className="fret-numbers">
					<div className="string">
						{firstString.map((note, index) => {
							return <span className={"note"} key={index} data-index={index}>{index}</span>
						})}
					</div>
				</div>
				<div className="fret-notes">{stringNotes.map((string, index) => 
					<div className="string" key={index}>
						{string.map((note, index) => {
							return <span className={"note" + (highlightedNotes.indexOf(note) !== -1 ? " highlight" : "")} key={index} data-index={index}>{note}</span>
						})}
					</div>
				)}</div>
			</div>
		</section>
	)
}