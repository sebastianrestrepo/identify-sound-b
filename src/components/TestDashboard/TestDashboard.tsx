import * as React from 'react';

import './TestDashboard.scss';
import { IdentifySoundB } from '../../components/IdentifySoundB/IdentifySoundB';


export class TestDashboard extends React.Component {
    render(){
        return <div className="cont">
            <div className="soft-handlers">
                <h1>ATOMO: 1B</h1>
                <button>He terminado</button>
            </div>
            <div className="identifySoundA atom">
            <IdentifySoundB ></IdentifySoundB>
            </div>
        </div>
    }
}