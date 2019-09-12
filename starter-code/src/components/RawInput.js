import React from 'react'


class RawInput extends React.Component {
   
    render() {
        return( 
        <form>
            <h3>Raw Input</h3>
            <textarea 
            onChange={this.props.textInput} 
            name="value"
            />
            
        </form>
        )
    }
}

export default RawInput;