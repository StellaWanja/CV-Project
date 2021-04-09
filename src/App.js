import React from 'react';
import './App.css';
import Preview from './components/Preview';
import Form from './components/Form';

class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      isPreview: false,
      firstName: "",
      lastName: "",
      professionTitle: "",
      email: "",
      phoneNumber: "",
      uploadFile: null
    }

    this.handleChange = this.handleChange.bind(this);
    this.changePreview = this.changePreview.bind(this);
  }

  // input field handle change
  handleChange(event) {
    const {name, value, type} = event.target;

    // change state for file type and others
    type === 'file' ?
        this.setState({
          uploadFile: URL.createObjectURL(event.target.files[0])
        })
    :
        this.setState(prevState => {
          return {
            ...prevState,
            [name]: value
          }
        });
  }

  // toggle between preview and edit mode
  changePreview() {    
    this.setState(prevClick => {
      return{
        isPreview: !prevClick.isPreview,
      }
    })
  }

  render(){

    let buttonText = this.state.isPreview ? "Edit Mode" : "Preview Mode";
    let content;

    // toggle between preview and edit mode
    if(this.state.isPreview){
      content = <Preview 
                  firstName= {this.state.firstName}
                  lastName={this.state.lastName}
                  professionTitle={this.state.professionTitle}
                  email={this.state.email}
                  phoneNumber={this.state.phoneNumber}
                  uploadFile={this.state.uploadFile}
      />
    } else {
      content = <Form 
                  handleChange={this.handleChange}
                  firstName= {this.state.firstName}
                  lastName={this.state.lastName}
                  professionTitle={this.state.professionTitle}
                  email={this.state.email}
                  phoneNumber={this.state.phoneNumber}
                />
    }

    return (
      <div className="app">
          
          <header className='header'>
            <h1>Resume</h1>
            <button onClick={this.changePreview}>{buttonText}</button>
          </header>

          <main>
            {content}
          </main>

          <footer></footer>
      </div>
    );
  }
}

export default App;
