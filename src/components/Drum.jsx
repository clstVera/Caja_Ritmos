import React, { Component } from 'react'
import { MainContainer, MachineContainer, PadContainer, PowerContainer, Power } from '../styles/Styled.jsx'
import Pad from './Pad.jsx'
import { sounds } from '../Sounds.jsx'


export default class Drum extends Component {
    constructor(props) {
        super(props)

        this.state = {
            sound: undefined
        }
    }

    changeSound(i) {
        //const sound = sounds[i];
        //this.setState({ sound: sounds[i].sound });
        this.setState({ sound: i });
    }

    render() {
        return (
            <div>
                <MainContainer >
                    <MachineContainer id="drum-machine">
                        <PadContainer id="display">
                            <Pad {...sounds[0]} changeSound={(e) => this.changeSound(e)}></Pad>
                            <Pad {...sounds[1]} changeSound={(e) => this.changeSound(e)}></Pad>
                            <Pad {...sounds[2]} changeSound={(e) => this.changeSound(e)}></Pad>
                            <Pad {...sounds[3]} changeSound={(e) => this.changeSound(e)}></Pad>
                            <Pad {...sounds[4]} changeSound={(e) => this.changeSound(e)}></Pad>
                            <Pad {...sounds[5]} changeSound={(e) => this.changeSound(e)}></Pad>
                            <Pad {...sounds[6]} changeSound={(e) => this.changeSound(e)}></Pad>
                            <Pad {...sounds[7]} changeSound={(e) => this.changeSound(e)}></Pad>
                            <Pad {...sounds[8]} changeSound={(e) => this.changeSound(e)}></Pad>
                        </PadContainer>
                        <Power> {this.state.sound} </Power>

                    </MachineContainer>
                </MainContainer>

            </div>
        )
    }
}
