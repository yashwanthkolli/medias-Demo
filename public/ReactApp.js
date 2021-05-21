'use strict';

const e = React.createElement;

class ReactApp extends React.Component {
    render() {
        return e(
            'button',{onClick: () => joinRoom(nameInput.value, roomidInput.value)},'join'
        );
    }
}

const domContainer = document.getElementById('reactApp');
ReactDOM.render(e(ReactApp), domContainer)