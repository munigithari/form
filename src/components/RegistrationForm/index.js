// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstname: '',
    secondname: '',
    isFromSubmitted: false,
    showFirstNameError: false,
    showSecondNameError: false,
  }

  onBlurLastName = () => {
    const isValidLastName = this.validLastName()

    this.setState({showSecondNameError: !isValidLastName})
  }

  validLastName = () => {
    const {secondname} = this.state

    return secondname !== ''
  }

  validFirstName = () => {
    const {firstname} = this.state

    return firstname !== ''
  }

  onBlurFirstName = () => {
    const isValidFirstName = this.validFirstName()

    this.setState({showFirstNameError: !isValidFirstName})
  }

  onClickFirstName = event => {
    this.setState({firstname: event.target.value})
  }

  onClickSecondName = event => {
    this.setState({secondname: event.target.value})
  }

  onSubmittingBtn = event => {
    event.preventDefault()

    const isValidFirstName = this.validFirstName()
    const isValidLastName = this.validLastName()

    if (isValidFirstName && isValidLastName) {
      this.setState({isFromSubmitted: true})
    } else {
      this.setState({
        showFirstNameError: !isValidFirstName,
        showSecondNameError: !isValidLastName,
        isFromSubmitted: false,
      })
    }
  }

  onClickAnotherResponse = () => {
    this.setState(prevState => ({
      isFromSubmitted: !prevState.isFromSubmitted,
      firstname: '',
      secondname: '',
    }))
  }

  renderFirstNameField = () => {
    const {firstname} = this.state

    return (
      <div>
          <label htmlFor="firstname" className="label">
            First Name
          </label>
          <input
            type="text"
            id="firstname"
            className="text"
            placeholder="First Name"
            value={firstname}
            onChange={this.onClickFirstName}
            onBlur={this.onBlurLastName}
          />
      </div>
    )
  }

  renderSecondNameField = () => {
    const {secondname} = this.state

    return (
      <div>
        <label htmlFor="secondname" className="label">
          Last Name
        </label>
        <input
          type="text"
          id="secondname"
          className="text"
          placeholder="Second Name"
          value={secondname}
          onChange={this.onClickSecondName}
          onBlur={this.onBlurFirstName}
        />
        </div>
    )
  }

  renderingRegistrationForm = () => {
    const {showFirstNameError, showSecondNameError} = this.state

    return (
      <form className="form" onSubmit={this.onSubmittingBtn}>
        {this.renderFirstNameField()}
        {showFirstNameError && <p className="paragraph4">Required</p>}
        {this.renderSecondNameField()}
        {showSecondNameError && <p className="paragraph4">Required</p>}
        <button type="submit" className="button1">
          Submit
        </button>
      </form>
    )
  }

   renderSucess = () => {
      <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        className="image8"
        alt="success"
      />
      <p className="paragraph123">Submitted Successfully</p>
      <button
        type="button"
        className="button1"
        onClick={this.onClickAnotherResponse}
      >
        Submit Another Response
      </button>
      </>
    
  }

  render() {
    const {isFromSubmitted} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Registration</h1>
        <div className = "form">
        {isFromSubmitted
          ? this.renderSucess()
          : this.renderingRegistrationForm()}
      </div>
      </div>
    )
  }
}

export default RegistrationForm
