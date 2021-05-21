'use strict';


const e = React.createElement;

class ReactApp extends React.Component {
    render() {
        return (
            // 'button',{onClick: () => joinRoom(nameInput.value, roomidInput.value)},'join'
            <button onClick = {() => joinRoom(nameInput.value, roomidInput.value)}>join</button>
        );
    }
}

const domContainer = document.getElementById('reactApp');
ReactDOM.render(<ReactApp />, domContainer)