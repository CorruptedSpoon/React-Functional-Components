const HelloUser = (props) => {
    const handleNameChange = (e) => {
        ReactDOM.render(
            <HelloUser username={e.target.value} />,
            document.getElementById('app')
        );
    };

    return (
        <div>
            <h1>Hello {props.username}!</h1>
            <label>Change Name:</label>
            <input type="text" value={props.username}
                onChange={handleNameChange} />
        </div>
    );
};

const init = () => {
    ReactDOM.render(
        <HelloUser username="World" />, 
        document.getElementById('app')
    );
};

window.onload = init;