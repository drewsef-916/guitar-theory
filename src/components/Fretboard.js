import { notes } from "../lib/logic"
import '../styles/Fretboard.css'

export default function Fretboard({ tuning = ['E', 'B', 'G', 'D', 'A', 'E'], notesToHighlight = [] }) {

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

	return (
		<section className="fretboard">
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
							return <span className={"note" + (notesToHighlight.indexOf(note) !== -1 ? " highlight" : "")} key={index} data-index={index}>{note}</span>
						})}
					</div>
				)}</div>
			</div>
		</section>
	)
}