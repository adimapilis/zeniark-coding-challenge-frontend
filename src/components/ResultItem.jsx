import React from 'react'
import styled from 'styled-components'
import { VectorIcon, ResultItemWrapper, ItemNumber, ItemBody, ItemQuestion, ItemAnswer, TrueStrong, FalseStrong, } from './StyledComponents'

const ResultItem = ({data, index}) => {
  
  const {answer, correct_answer, question} = data
  
  return (
    <ResultItemWrapper>
      <ItemNumber>
        {index+1}.
      </ItemNumber>
      <ItemBody>
        <ItemQuestion>
          {question}
        </ItemQuestion>
        <ItemAnswer>
        The correct answer is {correct_answer =="True" ? <TrueStrong>{correct_answer}</TrueStrong>: <FalseStrong>{correct_answer}</FalseStrong>}. You answered {answer =="True" ? <TrueStrong>{answer}</TrueStrong>: <FalseStrong>{answer}</FalseStrong>}.
        </ItemAnswer>
      </ItemBody>
      <VectorIcon src={answer==correct_answer? "./Check-Colored.png" : "./Cross-Colored.png"}/>

    </ResultItemWrapper>
  )
}

export default ResultItem