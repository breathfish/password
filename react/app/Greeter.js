//Greeter,js
import React, {Component} from 'react'
import PropTypes from 'prop-types';
class Greeter extends Component{
    constructor(props){
      super(props);
      this.state = {
        text: props.initialVal || 'hello world33'
      }
    }
    handleAction(event){
        this.setState({text: event.target.value})
    }
    render(){
      return (
        <div>
          
          <div>
            <input onChange = {this.handleAction.bind(this)}  value={this.state.text}/>
          </div>
        </div>
      )
    }
}
Greeter.propTypes = {
    initialVal: PropTypes.string
}
Greeter.defaultProps = {
  initialVal: 'zhangsan'
  
}
export default Greeter