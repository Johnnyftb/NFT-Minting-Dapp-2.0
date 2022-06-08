import 'bootstrap/dist/css/bootstrap.min.css'
import './css/utilities.css';
import './css/app.css';

import { Navbar, Body, Footer } from './components/index';

import {DAppProvider, Rinkeby} from '@usedapp/core';

const App = () => {
    return (
        <DAppProvider config={{networks: [Rinkeby]}}>
            <div className="app">
                <Navbar />
                <Body />
                <Footer />
            </div>
        </DAppProvider>
        
    )
    
}

export default App;