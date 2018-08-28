// Go and find the library call React installed in my app as a dependencie y asignale la variable React
import React from 'react';
import ReactDOM from 'react-dom';

import SearchaBar from './components/search_bar';

const API_KEY = 'AIzaSyB4fVnYZhscPgfG_8dp0k6wvSLcbtBgwH8';

// Create a new component. This component should produce some HTML
// ES6 function
const App = () => {
    return (
        <div>
            <SearchaBar />
        </div>
     );

 }



// We need to insert it on our html file to be showed into the DOM
// Take this component's generated HTML and put it on the page (in the DOM)

//We need to create an instance of the componet, and pass it to the DOM
ReactDOM.render(<App />, document.querySelector('.container'));