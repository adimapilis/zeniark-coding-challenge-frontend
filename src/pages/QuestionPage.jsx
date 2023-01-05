import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router'
import { Wrapper, UpperSectionWrapper, PageNum, Logo, Category, Question, QuestionWrapper, ButtonWrapper, TrueButton, FalseButton, VectorIcon, ButtonText } from '../components/StyledComponents'
import { MainContext } from '../contexts/MainContext'


const QuestionPage = () => {
  const [ itemNum, setItemNum ] = useState(0)
  const { questions, setQuestions } = useContext(MainContext)
  
  const navigate = useNavigate()

  const handleClick = (bool) => {
    let answer = bool ? "True" : "False"
    const answerAdded = questions?.map((each,index) => {
      if (index==itemNum) {
        return {...each, answer}
      }
      else {
        return each
      }
    })
    setQuestions(answerAdded)

    if (itemNum<=8) {
      setItemNum(itemNum+1)
    }
    else {
      navigate('/results')
    }
  }
    
  return (
    <Wrapper>
      <UpperSectionWrapper>
        <Logo src='./zeniark-logo.png'/>
        <Category>Category: {questions[itemNum]?.category}</Category>
        <PageNum>{itemNum+1} of 10</PageNum>
      </UpperSectionWrapper>
      <QuestionWrapper>
        <Question>
        {questions[itemNum]?.question}
        </Question>
      </QuestionWrapper>
      <ButtonWrapper>
        <TrueButton onClick={()=>handleClick(true)}>
          <VectorIcon src='./Check.png' />
          <ButtonText>True</ButtonText>
          </TrueButton>
        <FalseButton onClick={()=>handleClick(false)}>
          <VectorIcon src='./Cross.png' />
          <ButtonText>False</ButtonText>
        </FalseButton>
      </ButtonWrapper>
    </Wrapper>
  )
}

export default QuestionPage