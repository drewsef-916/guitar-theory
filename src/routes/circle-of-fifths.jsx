import { useEffect, useState } from 'react';
import { VictoryPie, VictoryLabel } from 'victory';

import Header from "../components/Header"
import Footer from "../components/Footer"
import "../App.css"
import { formulasInt, notes, notesSingle } from "../lib/logic"

const dataOuter = [{x: "C", y: 1}, {x: "G", y: 1}, {x: "D", y: 1}, {x: "A", y: 1}, {x: "E", y: 1}, {x: "B", y: 1}, {x: "Gb/F#", y: 1}, {x: "Db", y: 1}, {x: "Ab", y: 1}, {x: "Eb", y: 1}, {x: "Bb", y: 1}, {x: "F", y: 1}]
const dataInner = [{x: "a", y: 1}, {x: "e", y: 1}, {x: "b", y: 1}, {x: "f#", y: 1}, {x: "c#", y: 1}, {x: "g#", y: 1}, {x: "d#", y: 1}, {x: "bb", y: 1}, {x: "f", y: 1}, {x: "c", y: 1}, {x: "g", y: 1}, {x: "d", y: 1}]

export default function CircleOfFifths() {
    const [currentNote, setCurrentNote] = useState("");
    const [chordType, setChordType] = useState("");
    const [chordNotes, setChordNotes] = useState([]);

    useEffect(() => {
        const transformedNote = currentNote.replace(currentNote.charAt(0), currentNote.charAt(0).toUpperCase())
        
        if (currentNote.charAt(0).toLowerCase() === currentNote.charAt(0)) {
            // minor
            const rootNote = notes.find(n => currentNote.length === 1 ? n === transformedNote : n.includes(transformedNote))
            const scalePattern = formulasInt["Aeolian/Minor"]
            const notesArray = [rootNote]
            scalePattern.reduce((prev, next) => {
                notesArray.push(notes[prev + next])
                return prev + next
            }, notes.indexOf(rootNote))
            setChordNotes([notesArray[0], notesArray[2], notesArray[4]])
        } else {
            // major
            const rootNote = notes.find(n => currentNote.length === 1 ? n === transformedNote : n.includes(transformedNote))
            const scalePattern = formulasInt["Ionian/Major"]
            const notesArray = [rootNote]
            scalePattern.reduce((prev, next) => {
                notesArray.push(notes[prev + next])
                return prev + next
            }, notes.indexOf(rootNote))
            setChordNotes([notesArray[0], notesArray[2], notesArray[4]])
        }
    }, [currentNote])

    return (
        <div className='page-circle'>
            <Header />
            <main>
            <div className='flex'>
                <svg width={500} height={500}>
                    <VictoryPie 
                        width={500} 
                        height={500} 
                        data={dataOuter} 
                        labels={({ datum }) => datum.x} 
                        labelRadius={({ innerRadius }) => innerRadius + 20 }
                        labelComponent={<VictoryLabel style={[{ fill: "#ff40b9", fontSize: 20 }]} />}
                        innerRadius={145} 
                        standalone={false}
                        events={[
                            {
                                target: "data",
                                eventHandlers: {
                                    onMouseOver: () => {
                                        return [{
                                            target: "labels",
                                            mutation: ({text}) => {
                                                setCurrentNote(text);
                                                setChordType("major");
                                            }
                                        }
                                        ]
                                    }
                                }
                            }
                        ]}
                         />
                    <VictoryPie 
                        origin={{x: 250, y: 250}} 
                        width={370} 
                        height={370} 
                        data={dataInner} 
                        labels={({ datum }) => datum.x} 
                        labelRadius={({ innerRadius }) => innerRadius + 20 }
                        labelComponent={<VictoryLabel style={[{ fill: "#ff40b9", fontSize: 20 }]} />}
                        innerRadius={75} 
                        standalone={false}
                        events={[
                            {
                                target: "data",
                                eventHandlers: {
                                    onMouseOver: () => {
                                        return [{
                                            target: "labels",
                                            mutation: ({text}) => {
                                                setCurrentNote(text);
                                                setChordType("minor");
                                            }
                                        }]
                                    }
                                }
                            }
                        ]}
                         />
                </svg>
                <div>
                    <h3>Notes in {currentNote} {chordType} chord:<br />{ chordNotes.join(" - ") }</h3>
                </div>
            </div>
            </main>
            <Footer />
        </div>
    )
}