const HelloWorld = () => <div><h1>Hello World!</h1></div>;

const init = () => ReactDOM.render(<HelloWorld />, document.getElementById('app'));

window.onload = init;