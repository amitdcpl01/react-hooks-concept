import React, { useState, useEffect } from 'react'
import HookMouse from './HookMouse';

function MouseContainer() {
    const [display, setDisplay] = useState(true);



    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Toggle display</button>
            {display && <HookMouse></HookMouse>}
        </div>
    )
}

export default MouseContainer


// class MouseTracker extends React.Component {
//     constructor(props) {
//       super(props);
//       this.handleMouseMove = this.handleMouseMove.bind(this);
//       this.state = { x: 0, y: 0 };
//     }

//     handleMouseMove(event) {
//       this.setState({
//         x: event.clientX,
//         y: event.clientY
//       });
//     }

//     render() {
//       return (
//         <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
//           <h1>Move the mouse around!</h1>
//           <p>The current mouse position is ({this.state.x}, {this.state.y})</p>
//         </div>
//       );
//     }
//   }
