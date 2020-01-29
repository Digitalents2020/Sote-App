import React, { useState } from 'react';

function NewsComponent(props) {

    const [ input, setInput ] = useState(0)

    function renderCells() {
        function calculateActiveState(cell, idx) {
            if ((input === 0) || (cell === null)) {
                return ''
            }
            if (Array.isArray(cell)) {
                if ((input >= cell[0]) && (input <= cell[1])) {
                    return 'active'
                } else {
                    return ''
                }
            } else {
                if (((idx < 3) && (input <= cell)) || ((idx >= 3) && (input >= cell))) {
                    return 'active'
                } else {
                    return ''
                }
            }
        }

        return props.cells.map((cell, idx) => {
            if (cell === null) {
                return (
                    <div className={`news-meter-cell n${idx + 1} ${calculateActiveState(cell, idx)}`} key={idx}></div>
                )
            } else if (Array.isArray(cell)) {
                return (
                    <div className={`news-meter-cell n${idx + 1} ${calculateActiveState(cell, idx)}`} key={idx}>{`${cell[0]}-${cell[1]}`}</div>
                )
            } else {
                return (
                    <div className={`news-meter-cell n${idx + 1} ${calculateActiveState(cell, idx)}`} key={idx}>{`${idx < 3 ? '≤ ' : '≥ '}${cell}`}</div>
                )
            }
        })
    }

 /*   useEffect(() => {
        const domCells = [...document.getElementsByClassName('news-meter-cell')]
        const addStyleBasedOnIndex = index => {
            const domCellIndex = domCells.findIndex(node => node.classList.contains(`n${index + 1}`))
            domCells[domCellIndex].classList.add('active')
            domCells.splice(domCellIndex, 1)
        }
        if (input || input === 0) {
            props.cells.forEach((cell, idx) => {
                if (Array.isArray(cell)) {
                    if (input >= cell[0] && input <= cell[1]) {
                        addStyleBasedOnIndex(idx)
                    } else {
                        domCells.forEach(cell => cell.classList.remove('active'))
                    }
                } else if (cell !== null) {
                    if ((input <= cell) ||( input >= cell)) {
                        addStyleBasedOnIndex(idx)
                    } else {
                        domCells.forEach(cell => cell.classList.remove('active'))
                    }
                }
            });
        } else {
            domCells.forEach(cell => cell.classList.remove('active'))
        }
    }, [input, props.cells])*/

    return(
        <div className="news-container">
            <input className="news-input" type="number" onChange={(e) => setInput(Number(e.target.value))}/>
            <div className="news-meter">
                {renderCells()}
            </div>
        </div>
    )
}

export default NewsComponent
