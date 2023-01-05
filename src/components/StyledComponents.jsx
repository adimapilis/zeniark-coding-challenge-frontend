import styled from 'styled-components'

// StartPage Components

const Wrapper = styled.div`
    width: 900px;
    min-height: 700px;
    height: fit-content;
    background: #FFFFFF;
    box-shadow: 0px 0px 20px rgba(11, 113, 145, 0.15);
    border-radius: 10px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
  `

const LogoName = styled.img`
width: 344px;
height: 91px;
`

const Header1 = styled.span`
font-weight: 600;
font-size: 35px;
line-height: 52px;
text-align: center;
letter-spacing: 0.005em;
`


const Header2 = styled.span`
  font-weight: 500;
  font-size: 22px;
  line-height: 33px;
  text-align: center;
  letter-spacing: 0.005em;
`
const FilledTextContainer = styled.div`
  width: 523px;
  height: 83px;
  background-color: #085696;
  border-radius: 15px;
  display:flex;
  align-items:center;
  justify-content:center;
  margin-bottom:50px;
  margin-top:40px;
`
const FilledText = styled.p`
  font-weight: 500;
  font-size: 35px;
  line-height: 52px;
  letter-spacing: -0.04em;
  color:white;
`

const TextButton = styled.span`
  font-weight: 600;
  font-size: 35px;
  line-height: 52px;
  text-align: center;
  letter-spacing: -0.04em;
  color:#085696;
  position:relative;
  background-color:white;
  margin-bottom:20px;

  &:hover{
    cursor:pointer;
  }

  &::before {
    content:"";
    width:100%;
    height: 4px;
    position: absolute;
    background-color: #085696;
    bottom:0px;
    left: 0px;
    right: 0px;
  }
`

// QuestionPage Components

const UpperSectionWrapper = styled.div`
display:flex;
align-items:center;
width:90%;
margin-top:30px;
`

const PageNum = styled.span`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.005em;
`

const Logo = styled.img`
  width: 60px;
  height: 65px;
`

const Category = styled.span`
  font-weight: 600;
  font-size: 25px;
  line-height: 38px;
  letter-spacing: 0.005em;
  margin-right: auto;
  margin-left: 20px;
`

const Question = styled.span`
  height:auto;
  font-weight: 400;
  font-size: 50px;
  line-height: 67px;
  text-align: center;
  letter-spacing: 0.005em;
  width:750px;
`
const QuestionWrapper = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  flex-grow:1
`
const ButtonWrapper = styled.div`
  width:100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:center;
  gap: 60px;
  height: 150px;
  `

const TrueButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 160px;
  height: 65px;
  gap: 22px;
  background: #4FBD1B;
  border-radius: 8px;
`

const FalseButton=styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 155px;
  height: 65px;
  gap: 22px;
  background: #E04E10;
  border-radius: 8px;
  
`

const VectorIcon = styled.img`
  width: 28px;
  height: 20px;
  border-radius: 3px;
`
const ButtonText = styled.span`
  font-weight: 500;
  font-size: 30px;
  line-height: 45px;
  text-align: center;
  letter-spacing: -0.04em;
  color: #FFFFFF;
`
// Styling for Results Page

const Wrapper2= styled.div`
width: 900px;
background: #FFFFFF;
box-shadow: 0px 0px 20px rgba(11, 113, 145, 0.15);
border-radius: 10px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
padding:20px;
min-height:700px;
max-height: 1500px;
`
const QuestionContainer= styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
gap: 20px;
padding:20px;
`

const Header3 = styled.span`
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 30px;
line-height: 36px;
text-align: center;
letter-spacing: 0.005em;
margin-left: auto;
margin-right:auto;
`

const ScoreContainer = styled.div`
height:170px;
width:80%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
border-top: 1px solid rgb(0 0 0 /.15);
border-bottom: 1px solid rgb(0 0 0 /.15);
`

const Score = styled.span`
font-family: 'Poppins';
font-weight: 600;
font-size: 50px;
line-height: 75px;
text-align: center;
letter-spacing: 0.005em;
`

const ScoreSub = styled.span`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 22px;
line-height: 33px;
text-align: center;
letter-spacing: 0.005em;
`
// Styling for Result Item
const ResultItemWrapper = styled.div`
  display:flex;
  width:90%;
  border-bottom: 1px dashed rgb(0 0 0/ .1)
  
`

const ItemNumber = styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.005em;
  color: #9D9D9D;
`
const ItemBody = styled.div` 
  display:flex;
  flex-direction:column;
  margin-right:auto;
  margin-left:20px;
`
const ItemQuestion = styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.005em;
`

const ItemAnswer = styled.span`
  font-family: 'Inter';
  font-style: italic;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.005em;
  color: #A5A5A5;
`

const TrueStrong = styled.span`
  color: #69BC00;
  font-family:"Inter"
  font-weight:700;
  letter-spacing: 0.005em;
  font-size: 14px;
  line-height: 17px;
`
const FalseStrong = styled.span`
  font-family: 'Inter';
  color: #E23232;
  font-weight:700;
  letter-spacing: 0.005em;
  font-size: 14px;
  line-height: 17px;
`

export { 
  Wrapper, 
  Header1, 
  Header2, 
  LogoName, 
  FilledText, 
  FilledTextContainer, 
  TextButton,
  UpperSectionWrapper,  
  PageNum,  
  Logo,  
  Category,  
  Question,  
  QuestionWrapper,  
  ButtonWrapper,  
  TrueButton,  
  FalseButton,  
  VectorIcon,  
  ButtonText,
  Wrapper2,
  QuestionContainer,
  Header3,
  ScoreContainer,
  Score,
  ScoreSub,
  ResultItemWrapper,
  ItemNumber,
  ItemBody,
  ItemQuestion,
  ItemAnswer,
  TrueStrong,
  FalseStrong,
}