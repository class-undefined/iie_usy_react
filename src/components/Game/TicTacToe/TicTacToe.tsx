import Typography from "@mui/material/Typography/Typography"
import { useState } from "react"
import "./module.scss"
export const TicTacToe = () => {
    const [reset, Reset] = useState(true)
    // 
    return (
        <div>
            <div><Typography align="center" variant="h5"># 棋</Typography></div>
            <div className="tic-tac-toe" key={reset.toString()}>
                <input className="player-1 left first-column top first-row first-diagonal turn-1" id="block1-1-1" type="radio" />
                <label className="turn-1" htmlFor="block1-1-1"></label>
                <input className="player-1 middle second-column top first-row turn-1" id="block1-1-2" type="radio" />
                <label className="turn-1" htmlFor="block1-1-2"></label>
                <input className="player-1 right third-column top first-row second-diagonal turn-1" id="block1-1-3" type="radio" />
                <label className="turn-1" htmlFor="block1-1-3"></label>
                <input className="player-1 left first-column center second-row turn-1" id="block1-2-1" type="radio" />
                <label className="turn-1" htmlFor="block1-2-1"></label>
                <input className="player-1 middle second-column center second-row first-diagonal second-diagonal turn-1" id="block1-2-2" type="radio" />
                <label className="turn-1" htmlFor="block1-2-2"></label>
                <input className="player-1 right third-column center second-row turn-1" id="block1-2-3" type="radio" />
                <label className="turn-1" htmlFor="block1-2-3"></label>
                <input className="player-1 left first-column bottom third-row second-diagonal turn-1" id="block1-3-1" type="radio" />
                <label className="turn-1" htmlFor="block1-3-1"></label>
                <input className="player-1 middle second-column bottom third-row turn-1" id="block1-3-2" type="radio" />
                <label className="turn-1" htmlFor="block1-3-2"></label>
                <input className="player-1 right third-column bottom third-row first-diagonal turn-1" id="block1-3-3" type="radio" />
                <label className="turn-1" htmlFor="block1-3-3"></label>
                <input className="player-2 left first-column top first-row first-diagonal turn-2" id="block2-1-1" type="radio" />
                <label className="turn-2" htmlFor="block2-1-1"></label>
                <input className="player-2 middle second-column top first-row turn-2" id="block2-1-2" type="radio" />
                <label className="turn-2" htmlFor="block2-1-2"></label>
                <input className="player-2 right third-column top first-row second-diagonal turn-2" id="block2-1-3" type="radio" />
                <label className="turn-2" htmlFor="block2-1-3"></label>
                <input className="player-2 left first-column center second-row turn-2" id="block2-2-1" type="radio" />
                <label className="turn-2" htmlFor="block2-2-1"></label>
                <input className="player-2 middle second-column center second-row first-diagonal second-diagonal turn-2" id="block2-2-2" type="radio" />
                <label className="turn-2" htmlFor="block2-2-2"></label>
                <input className="player-2 right third-column center second-row turn-2" id="block2-2-3" type="radio" />
                <label className="turn-2" htmlFor="block2-2-3"></label>
                <input className="player-2 left first-column bottom third-row second-diagonal turn-2" id="block2-3-1" type="radio" />
                <label className="turn-2" htmlFor="block2-3-1"></label>
                <input className="player-2 middle second-column bottom third-row turn-2" id="block2-3-2" type="radio" />
                <label className="turn-2" htmlFor="block2-3-2"></label>
                <input className="player-2 right third-column bottom third-row first-diagonal turn-2" id="block2-3-3" type="radio" />
                <label className="turn-2" htmlFor="block2-3-3"></label>
                <input className="player-1 left first-column top first-row first-diagonal turn-3" id="block3-1-1" type="radio" />
                <label className="turn-3" htmlFor="block3-1-1"></label>
                <input className="player-1 middle second-column top first-row turn-3" id="block3-1-2" type="radio" />
                <label className="turn-3" htmlFor="block3-1-2"></label>
                <input className="player-1 right third-column top first-row second-diagonal turn-3" id="block3-1-3" type="radio" />
                <label className="turn-3" htmlFor="block3-1-3"></label>
                <input className="player-1 left first-column center second-row turn-3" id="block3-2-1" type="radio" />
                <label className="turn-3" htmlFor="block3-2-1"></label>
                <input className="player-1 middle second-column center second-row first-diagonal second-diagonal turn-3" id="block3-2-2" type="radio" />
                <label className="turn-3" htmlFor="block3-2-2"></label>
                <input className="player-1 right third-column center second-row turn-3" id="block3-2-3" type="radio" />
                <label className="turn-3" htmlFor="block3-2-3"></label>
                <input className="player-1 left first-column bottom third-row second-diagonal turn-3" id="block3-3-1" type="radio" />
                <label className="turn-3" htmlFor="block3-3-1"></label>
                <input className="player-1 middle second-column bottom third-row turn-3" id="block3-3-2" type="radio" />
                <label className="turn-3" htmlFor="block3-3-2"></label>
                <input className="player-1 right third-column bottom third-row first-diagonal turn-3" id="block3-3-3" type="radio" />
                <label className="turn-3" htmlFor="block3-3-3"></label>
                <input className="player-2 left first-column top first-row first-diagonal turn-4" id="block4-1-1" type="radio" />
                <label className="turn-4" htmlFor="block4-1-1"></label>
                <input className="player-2 middle second-column top first-row turn-4" id="block4-1-2" type="radio" />
                <label className="turn-4" htmlFor="block4-1-2"></label>
                <input className="player-2 right third-column top first-row second-diagonal turn-4" id="block4-1-3" type="radio" />
                <label className="turn-4" htmlFor="block4-1-3"></label>
                <input className="player-2 left first-column center second-row turn-4" id="block4-2-1" type="radio" />
                <label className="turn-4" htmlFor="block4-2-1"></label>
                <input className="player-2 middle second-column center second-row first-diagonal second-diagonal turn-4" id="block4-2-2" type="radio" />
                <label className="turn-4" htmlFor="block4-2-2"></label>
                <input className="player-2 right third-column center second-row turn-4" id="block4-2-3" type="radio" />
                <label className="turn-4" htmlFor="block4-2-3"></label>
                <input className="player-2 left first-column bottom third-row second-diagonal turn-4" id="block4-3-1" type="radio" />
                <label className="turn-4" htmlFor="block4-3-1"></label>
                <input className="player-2 middle second-column bottom third-row turn-4" id="block4-3-2" type="radio" />
                <label className="turn-4" htmlFor="block4-3-2"></label>
                <input className="player-2 right third-column bottom third-row first-diagonal turn-4" id="block4-3-3" type="radio" />
                <label className="turn-4" htmlFor="block4-3-3"></label>
                <input className="player-1 left first-column top first-row first-diagonal turn-5" id="block5-1-1" type="radio" />
                <label className="turn-5" htmlFor="block5-1-1"></label>
                <input className="player-1 middle second-column top first-row turn-5" id="block5-1-2" type="radio" />
                <label className="turn-5" htmlFor="block5-1-2"></label>
                <input className="player-1 right third-column top first-row second-diagonal turn-5" id="block5-1-3" type="radio" />
                <label className="turn-5" htmlFor="block5-1-3"></label>
                <input className="player-1 left first-column center second-row turn-5" id="block5-2-1" type="radio" />
                <label className="turn-5" htmlFor="block5-2-1"></label>
                <input className="player-1 middle second-column center second-row first-diagonal second-diagonal turn-5" id="block5-2-2" type="radio" />
                <label className="turn-5" htmlFor="block5-2-2"></label>
                <input className="player-1 right third-column center second-row turn-5" id="block5-2-3" type="radio" />
                <label className="turn-5" htmlFor="block5-2-3"></label>
                <input className="player-1 left first-column bottom third-row second-diagonal turn-5" id="block5-3-1" type="radio" />
                <label className="turn-5" htmlFor="block5-3-1"></label>
                <input className="player-1 middle second-column bottom third-row turn-5" id="block5-3-2" type="radio" />
                <label className="turn-5" htmlFor="block5-3-2"></label>
                <input className="player-1 right third-column bottom third-row first-diagonal turn-5" id="block5-3-3" type="radio" />
                <label className="turn-5" htmlFor="block5-3-3"></label>
                <input className="player-2 left first-column top first-row first-diagonal turn-6" id="block6-1-1" type="radio" />
                <label className="turn-6" htmlFor="block6-1-1"></label>
                <input className="player-2 middle second-column top first-row turn-6" id="block6-1-2" type="radio" />
                <label className="turn-6" htmlFor="block6-1-2"></label>
                <input className="player-2 right third-column top first-row second-diagonal turn-6" id="block6-1-3" type="radio" />
                <label className="turn-6" htmlFor="block6-1-3"></label>
                <input className="player-2 left first-column center second-row turn-6" id="block6-2-1" type="radio" />
                <label className="turn-6" htmlFor="block6-2-1"></label>
                <input className="player-2 middle second-column center second-row first-diagonal second-diagonal turn-6" id="block6-2-2" type="radio" />
                <label className="turn-6" htmlFor="block6-2-2"></label>
                <input className="player-2 right third-column center second-row turn-6" id="block6-2-3" type="radio" />
                <label className="turn-6" htmlFor="block6-2-3"></label>
                <input className="player-2 left first-column bottom third-row second-diagonal turn-6" id="block6-3-1" type="radio" />
                <label className="turn-6" htmlFor="block6-3-1"></label>
                <input className="player-2 middle second-column bottom third-row turn-6" id="block6-3-2" type="radio" />
                <label className="turn-6" htmlFor="block6-3-2"></label>
                <input className="player-2 right third-column bottom third-row first-diagonal turn-6" id="block6-3-3" type="radio" />
                <label className="turn-6" htmlFor="block6-3-3"></label>
                <input className="player-1 left first-column top first-row first-diagonal turn-7" id="block7-1-1" type="radio" />
                <label className="turn-7" htmlFor="block7-1-1"></label>
                <input className="player-1 middle second-column top first-row turn-7" id="block7-1-2" type="radio" />
                <label className="turn-7" htmlFor="block7-1-2"></label>
                <input className="player-1 right third-column top first-row second-diagonal turn-7" id="block7-1-3" type="radio" />
                <label className="turn-7" htmlFor="block7-1-3"></label>
                <input className="player-1 left first-column center second-row turn-7" id="block7-2-1" type="radio" />
                <label className="turn-7" htmlFor="block7-2-1"></label>
                <input className="player-1 middle second-column center second-row first-diagonal second-diagonal turn-7" id="block7-2-2" type="radio" />
                <label className="turn-7" htmlFor="block7-2-2"></label>
                <input className="player-1 right third-column center second-row turn-7" id="block7-2-3" type="radio" />
                <label className="turn-7" htmlFor="block7-2-3"></label>
                <input className="player-1 left first-column bottom third-row second-diagonal turn-7" id="block7-3-1" type="radio" />
                <label className="turn-7" htmlFor="block7-3-1"></label>
                <input className="player-1 middle second-column bottom third-row turn-7" id="block7-3-2" type="radio" />
                <label className="turn-7" htmlFor="block7-3-2"></label>
                <input className="player-1 right third-column bottom third-row first-diagonal turn-7" id="block7-3-3" type="radio" />
                <label className="turn-7" htmlFor="block7-3-3"></label>
                <input className="player-2 left first-column top first-row first-diagonal turn-8" id="block8-1-1" type="radio" />
                <label className="turn-8" htmlFor="block8-1-1"></label>
                <input className="player-2 middle second-column top first-row turn-8" id="block8-1-2" type="radio" />
                <label className="turn-8" htmlFor="block8-1-2"></label>
                <input className="player-2 right third-column top first-row second-diagonal turn-8" id="block8-1-3" type="radio" />
                <label className="turn-8" htmlFor="block8-1-3"></label>
                <input className="player-2 left first-column center second-row turn-8" id="block8-2-1" type="radio" />
                <label className="turn-8" htmlFor="block8-2-1"></label>
                <input className="player-2 middle second-column center second-row first-diagonal second-diagonal turn-8" id="block8-2-2" type="radio" />
                <label className="turn-8" htmlFor="block8-2-2"></label>
                <input className="player-2 right third-column center second-row turn-8" id="block8-2-3" type="radio" />
                <label className="turn-8" htmlFor="block8-2-3"></label>
                <input className="player-2 left first-column bottom third-row second-diagonal turn-8" id="block8-3-1" type="radio" />
                <label className="turn-8" htmlFor="block8-3-1"></label>
                <input className="player-2 middle second-column bottom third-row turn-8" id="block8-3-2" type="radio" />
                <label className="turn-8" htmlFor="block8-3-2"></label>
                <input className="player-2 right third-column bottom third-row first-diagonal turn-8" id="block8-3-3" type="radio" />
                <label className="turn-8" htmlFor="block8-3-3"></label>
                <input className="player-1 left first-column top first-row first-diagonal turn-9" id="block9-1-1" type="radio" />
                <label className="turn-9" htmlFor="block9-1-1"></label>
                <input className="player-1 middle second-column top first-row turn-9" id="block9-1-2" type="radio" />
                <label className="turn-9" htmlFor="block9-1-2"></label>
                <input className="player-1 right third-column top first-row second-diagonal turn-9" id="block9-1-3" type="radio" />
                <label className="turn-9" htmlFor="block9-1-3"></label>
                <input className="player-1 left first-column center second-row turn-9" id="block9-2-1" type="radio" />
                <label className="turn-9" htmlFor="block9-2-1"></label>
                <input className="player-1 middle second-column center second-row first-diagonal second-diagonal turn-9" id="block9-2-2" type="radio" />
                <label className="turn-9" htmlFor="block9-2-2"></label>
                <input className="player-1 right third-column center second-row turn-9" id="block9-2-3" type="radio" />
                <label className="turn-9" htmlFor="block9-2-3"></label>
                <input className="player-1 left first-column bottom third-row second-diagonal turn-9" id="block9-3-1" type="radio" />
                <label className="turn-9" htmlFor="block9-3-1"></label>
                <input className="player-1 middle second-column bottom third-row turn-9" id="block9-3-2" type="radio" />
                <label className="turn-9" htmlFor="block9-3-2"></label>
                <input className="player-1 right third-column bottom third-row first-diagonal turn-9" id="block9-3-3" type="radio" />
                <label className="turn-9" htmlFor="block9-3-3"></label>
                <div className="end">
                    <h3></h3><a onClick={() => Reset(reset => !reset)}>重开！</a>
                </div>
            </div>
        </div>
    )
}