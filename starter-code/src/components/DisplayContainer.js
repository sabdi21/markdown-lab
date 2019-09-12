import React from 'react'
import RawInput from './RawInput';
import marked from 'marked';


class DisplayContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
          }
    }

    textInput = (e) => {
        e.preventDefault()
        console.log(e.target.name, e.target.value)
        this.setState({ value: e.target.value})  
    }

    //add the marked module 
 

    render() {
        // var result = marked(this.state.value);
        var obj = {
            __html: marked(this.state.value)
        }
        return( 
            <div>
                <h2>Display Text Input</h2>
                {/* {result} */}
                {/* <p>{this.state.value}</p> */}
            <RawInput textInput={this.textInput}/>
            <div id="preview" dangerouslySetInnerHTML={obj}></div>
            </div>
        )
    }
}

export default DisplayContainer;