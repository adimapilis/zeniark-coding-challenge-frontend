import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import { fetchQuestions } from '../api/getQuestions'
import { Wrapper, Header1, Header2, LogoName, FilledText, FilledTextContainer, TextButton } from '../components/StyledComponents'
import { MainContext } from '../contexts/MainContext'

const StartPage = () => {
  const { questions, setQuestions } = useContext(MainContext)
  const navigate = useNavigate()
  const StartGame = async () => {
    try {
      const result = await fetchQuestions()
      setQuestions(result.data)
      navigate("/questions")
    }
    catch (error) {
      console.log(error)
    }
  }
  
  console.log(questions)
  return (
    <Wrapper>
      <LogoName src='./zeniark-logo-name.png'/>
      <Header1>Welcome to the Trivia Challenge!</Header1>
      <Header2>You will be presented with 10 True or False questions.</Header2>
      <FilledTextContainer>
        <FilledText>Can you score 10/10?</FilledText>
      </FilledTextContainer>
      <TextButton onClick={()=>StartGame()}>LET'S START!</TextButton>
    </Wrapper>
  )
}

export default StartPage