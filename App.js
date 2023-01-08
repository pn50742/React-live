const heading1 = React.createElement('h1', {className:'myhead'}, "namaste React!");
const heading2 = React.createElement('h2', {className:'head2'}, "Learning React....");
const div = React.createElement('div', {className:'mydiv'}, [heading1, heading2]);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(div);