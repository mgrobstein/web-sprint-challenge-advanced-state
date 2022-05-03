import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'

export function Form(props) {


  const onChange = (evt) => {
    evt.preventDefault();
    const { value, id } = evt.target;
    props.inputChange({ [id]: value })
  };

  const onSubmit = (evt) => {
    evt.preventDefault()
    props.postQuiz({
      question_text: props.form.newQuestion,
      true_answer_text: props.form.newTrueAnswer,
      false_answer_text: props.form.newFalseAnswer
    })
  }

  const enableSubmitBtn = () => {return ( props.form.newQuestion.trim('').length < 2 || props.form.newTrueAnswer.trim("").length < 2 || props.form.newFalseAnswer.trim("").length < 2)
}

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="newQuestion" value={props.form.newQuestion} placeholder="Enter question" />
      <input maxLength={50} onChange={onChange} id="newTrueAnswer" value={props.form.newTrueAnswer} placeholder="Enter true answer" />
      <input maxLength={50} onChange={onChange} id="newFalseAnswer" value={props.form.newFalseAnswer} placeholder="Enter false answer" />
      <button id="submitNewQuizBtn" disabled = {enableSubmitBtn()}>Submit new quiz {enableSubmitBtn()}</button>
    </form>
  )
}

export default connect(s => s, actionCreators)(Form)