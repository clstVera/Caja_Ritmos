import React, { Component } from 'react'
import { PadStyled } from '../styles/Styled.jsx'

export default class pad extends Component {
    constructor(props) {
        super(props)

        // Crea una referencia para guardar el elemento audio del DOM
        this.audio = React.createRef();
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
    }

    handleKeyPress = (e) => {
        if (e.keyCode === this.props.keyCode) {
            this.audio.current.play();
            this.props.changeSound(this.props.sound);
        }
    }

    handleClick = () => {
        this.audio.current.play();
        this.props.changeSound(this.props.sound);
    }

    render() {
        return (
            <PadStyled className="drum-pad" id={this.props.sound} onClick={this.handleClick} >
                <p>{this.props.name}</p>
                <audio className="clip" id={this.props.name} ref={this.audio} src={this.props.source}> </audio>
            </PadStyled>
        )
    }
}
