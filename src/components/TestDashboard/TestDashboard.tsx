import * as React from 'react';

import './TestDashboard.scss';
import { IdentifySoundB } from '../../components/IdentifySoundB/IdentifySoundB';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { taggingStore } from '../../store/TaggingStore'

@observer export class TestDashboard extends React.Component {

    @observable x = 0;
    @observable y = 0;

    constructor(props) {
        super(props);
 
      }
    _onMouseMove(e) {
        this.x = e.nativeEvent.offsetX;
        this.y = e.nativeEvent.offsetY;

        console.log(this.x, this.y);
        taggingStore.setMousePos(this.x, this.y);
     }

     
    render(){
        return <div className="cont" onMouseMove={this._onMouseMove.bind(this)}>
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