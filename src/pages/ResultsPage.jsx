import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import ResultItem from '../components/ResultItem'
import { Logo, TextButton, UpperSectionWrapper, Wrapper2, QuestionContainer, Header3, ScoreContainer, Score, ScoreSub } from '../components/StyledComponents'
import { MainContext } from '../contexts/MainContext'

const ResultsPage = () => {
  const { questions, setQuestions } = useContext(MainContext)

  const navigate = useNavigate()

  let correctAnswer=0
  questions.forEach(each=>{
    if (each.answer==each.correct_answer){
      correctAnswer+=1
    }
  })

  const handlePlayAgain = () => {
    setQuestions([])
    navigate("/")
  }

  return (
    <Wrapper2>
      <UpperSectionWrapper>
        <Logo src="./zeniark-logo.png"/>
        <Header3>Final Results</Header3>
      </UpperSectionWrapper>
      <ScoreContainer>
      <Score>{correctAnswer}/10</Score>
      <ScoreSub>Your Score</ScoreSub>
      </ScoreContainer>
      <QuestionContainer>
        {questions?.map((each,index)=><ResultItem key={index} data={each} index={index}></ResultItem>)}
      </QuestionContainer>
      <TextButton onClick={handlePlayAgain}>Play Again</TextButton>
    </Wrapper2>
  )
}

export default ResultsPage