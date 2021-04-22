import React, { Component } from 'react';
import { Button, Input, Form } from 'semantic-ui-react';

class FormExampleSubmitText extends Component {
    state = {
        firstName: '',
        lastName:'',
        showName: false,
        firstNumber:0,
        secondNumber:0,
        showResult: false,
      }
    
      displayNameHandler = (e) => {
        let updatedName = e.target.value;
        this.setState({ firstName: updatedName });
      }
      displayLastNameHandler = (e) => {
        let updatedLastName = e.target.value;
        this.setState({ lastName: updatedLastName }); 
      }

      displayFirstNumber = (e) => {
        let updatedFirstNumber = parseInt(e.target.value);
        this.setState({ firstNumber: updatedFirstNumber });
      }
      
      displaySecondNumber = (e) => {
        let updatedSecondNumber = parseInt(e.target.value);
        this.setState({ secondNumber: updatedSecondNumber });
      }
    
      handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
          showName: true
        });
      }

      handleSubmit2 = (e) => {
        e.preventDefault();
        this.setState({
          showResult: true
        });
      }

      render() {
        return (
          <div>
            <Form onSubmit={this.handleSubmit}>
              <Input type="text" name="firstName" placeholder='first name' onChange={this.displayNameHandler} value={this.state.firstName} />
              <Input type="text" name="lastName" placeholder='last name' onChange={this.displayLastNameHandler} value={this.state.lasttName} />
              <Button type="submit" onClick={this.handleSubmit}>Submit</Button>
              {this.state.showName && <p>"FirstName: " {this.state.firstName} " Last name: "{this.state.lastName}"</p>}
              <br></br>
              <Input type="text" name="firstNumber" placeholder='first number' onChange={this.displayFirstNumber} value={this.state.firstNumber} />
              <Input type="text" name="secondNumber" placeholder='second number' onChange={this.displaySecondNumber} value={this.state.secondNumber} />
              <Button type="submit" onClick={this.handleSubmit2}>Submit</Button>
              {this.state.showResult && <p>"Result: " {this.state.firstNumber + this.state.secondNumber} "</p>}
            </Form>
          </div>
        );
      }
}
export default FormExampleSubmitText;