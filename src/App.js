import React, { Component } from 'react';
import Note from './Note'
import './App.css';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      text: '',
      notes: [],
    }
  }

  updateText(text) {
    this.setState({
      text: text.target.value
    })
  }
  addNote() {

    if (this.state.text === '') { return }
    let notesArr = this.state.notes;
    notesArr.push(this.state.text);
    this.setState({ text: '' });
    this.txtInput.focus();

  }
  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      let notesArr = this.state.notes;
      notesArr.push(this.state.text);
      this.setState({ text: '' });
    }
  }
  deleteNote(index) {
    let notesArr = this.state.notes;
    notesArr.splice(index, 1);
    this.setState({ notes: notesArr })
  }
  render() {
    let notes = this.state.notes.map((val, key) => {
      return <Note key={key} text={val} deleteMethod={() => this.deleteNote(key)}></Note>
    })
    return (
      <div className="container">
        <div className="header"> Todo Application </div>
        <div className="btn" onClick={this.addNote.bind(this)}>+</div>
        <input type="text" ref={(input) => { this.txtInput = input }}
          className="textInput" value={this.state.text} placeholder="Enter the text"
          onChange={text => this.updateText(text)}
          onKeyPress={this.handleKeyPress.bind(this)}>
        </input>
        {notes}

      </div>
    );
  }
}
export default App;
