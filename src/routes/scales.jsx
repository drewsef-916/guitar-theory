import { useState, useEffect } from "react"
import { formulasInt, notes, notesSingle } from "../lib/logic"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Fretboard from "../components/Fretboard"
import "../styles/pages/scales.css"

export default function Scales() {
	const [scaleNotes, setScaleNotes] = useState([])
	const [scaleKey, setScaleKey] = useState('A')
	const [scaleName, setScaleName] = useState('Lydian')

	useEffect(() => {
		const rootNote = notes.indexOf(scaleKey)
		const scalePattern = formulasInt[scaleName]
		const notesArray = [scaleKey]
		scalePattern.reduce((prev, next) => {
			notesArray.push(notes[prev + next])
			return prev + next
		}, rootNote)
		setScaleNotes(notesArray.splice(0,7))
	}, [scaleKey, scaleName])

	const handleScaleKeyChange = (evt) => {
		setScaleKey(evt.target.value)
	}
	const handleScaleNameChange = (evt) => {
		setScaleName(evt.target.value)
	}

	return (
		<div className="page-scales">
			<Header />
			<main>
				<section className="scale-select">
					<div>
						<select name="notes" onChange={handleScaleKeyChange}>
						{notesSingle.map((note, index) => {
							return <option key={note} value={note}>{note}</option>
						})}
						</select>
					</div>
					<div>
						<select name="scales" onChange={handleScaleNameChange}>
							{Object.keys(formulasInt).map((scale, index) => {
								return <option key={scale} value={scale}>{scale}</option>
							})}
						</select>
					</div>
					<div>
						<p>{scaleNotes.join(" - ")}</p>
					</div>
				</section>
				<Fretboard notesToHighlight={scaleNotes} rootNote={scaleNotes[0]} />
			</main>
			<Footer />
		</div>
	)
}