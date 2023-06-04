import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {changeFeedback: true}

  showResult = () => {
    this.setState({
      changeFeedback: false,
    })
  }

  render() {
    const {changeFeedback} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    return (
      <div className="bgContainer">
        {changeFeedback ? (
          <div className="card">
            <h1 className="heading">
              How Satisfied are you with our customer support performance?
            </h1>
            <ul>
              {emojis.map(eachItem => (
                <li key={eachItem.id} className="cardList">
                  <button
                    type="button"
                    className="btn"
                    onClick={this.showResult}
                  >
                    <img
                      src={eachItem.imageUrl}
                      alt={eachItem.name}
                      className="emojisImage"
                    />
                  </button>
                  <p>{eachItem.name}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="cardContainer">
            <img src={loveEmojiUrl} className="imageCard" alt=" love emoji" />
            <h1 className="cardHeading">Thank You!</h1>
            <p className="cardText">
              We will use your feedback to improve our customer support
              performance
            </p>
          </div>
        )}
      </div>
    )
  }
}
export default Feedback
