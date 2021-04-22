import React, { Component } from 'react'
import { Dropdown, Grid, Segment, Form } from 'semantic-ui-react'

const options = [
  { key: 1, text: 'One', value: 1 },
  { key: 2, text: 'Two', value: 2 },
  { key: 3, text: 'Three', value: 3 },
]

export default class DropdownExampleControlled extends Component {
  state = {enteredNumber:null, value:0}

  handleChange = (e, { value }) => this.setState({value})
  
  numberHandler = (e) => {
    let updatedNumber = parseInt(e.target.value);
    this.setState({ enteredNumber: updatedNumber });
  }

  render() {
    const { value } = this.state
    const { enteredNumber } = this.state

    return (
      
      <Grid columns={1}>
        <Form>
        <Form.Input
            placeholder='number'
            name='number'
            value={enteredNumber}
            onChange={this.numberHandler}
            />
          <Dropdown
            onChange={this.handleChange}
            options={options}
            placeholder='multiply by'
            selection
            value={value}
          />
            <Segment><pre>Current value: {value * enteredNumber}</pre></Segment>
        </Form>
      </Grid>
      
    )
  }
}
