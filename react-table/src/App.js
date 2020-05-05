import React, { Component } from 'react'
import './App.css'
import Table from './Table'
import styles from './Table.module.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],         // setting the state using state property

    }
  }
    // defining the submit Hanlder that is being called at submit button
  submitHandler = () => {
    let text = this.refs.textBox.value;

    let count = 0;
    for (let element of text) {
      if (element === "-") {
        count += 1;
        console.log(count)
      }
    }
    if (text === '' || count > 1) {
      alert('enter valid string')   // generating alert if something goes wrong
    }

    else{

    //console.log(text);
    let fullData = text.split("-");  // splitting the string according to the question
    let fruitname = fullData[0];
    let quantity = fullData[1];

    if (isNaN(quantity)) {
      alert('enter a number after -');
    }

    else {

      const fruits = {
        fruitname: fruitname,
        quantity: quantity
      }
      const data = [...this.state.data];
      data.push(fruits);
      this.setState({ data: data });        // setting the state after changes on the page
      document.getElementById('id1').value='';
      
    }
    }
    
  }

  enterHandler = (target) => {    // function for handling the enter button as per requirements
    if (target.key == "Enter") {
      this.submitHandler()
    }
  }

  deleteHandler = (index) => {

    const data = [...this.state.data];
    data.splice(index, 1);
    this.setState({ data: data });
  }
  render() {
    return (
      <div className="App">
        <input className={styles.input} ref="textBox" id ="id1" type="text" onKeyPress={this.enterHandler} placeholder="fruit-quantity"/><br/>
        <button className={styles.submit} onClick={this.submitHandler}>Submit</button><br></br><br></br>

        {this.state.data.map((fruit, index) => {
          return <Table 
            name={fruit.fruitname}
            quantity={fruit.quantity}
            delete={this.deleteHandler}
          ></Table>
        })}
      </div>
    )
  }
}

export default App