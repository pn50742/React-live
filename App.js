import React from 'react';
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
const Heading1 =()=> (<h1>hello react element</h1>);

const HeadingComponent=()=>{
return (
    <div>
        {Heading1()}
        <h2>hello react compont</h2>
        <p>react paragraph</p>
    </div>
);
}

root.render(<HeadingComponent />);  
