import { useState } from 'react';

import styled from 'styled-components';
import {useMediaQuery} from 'react-responsive/src/index';
import { useHistory } from 'react-router-dom';

import { row } from '../../constains'
import Title from '../../components/Title';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';

const NewQuestions = () => {
  const isMobile = useMediaQuery({
    maxWidth: 1080
  });
  const history = useHistory();
  const [questions, setQuestions] = useState({
    title: '',
    subTitle: '',
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setQuestions({...questions, [name]: value})
  };


  const onSave = () => {
    const list =  JSON.parse(localStorage.getItem('list')) || row;
    const lastId = list[list.length - 1].id;

    const newQuestions = {
      id: lastId + 1,
      ...questions,
      answersCount:  0,
      isStar: false,
      theme: 'Pregunta juan.c23 en',
      subject: 'Matemáticas 6º',
    };

    localStorage.setItem('list', JSON.stringify([...list, newQuestions]));
    setQuestions({
      title: '',
      subTitle: '',
    });
  };


  return (
    <>
      <Title
        isMobile={isMobile}
        text={'Haz una pregunta'}
        btnText={isMobile ? 'X' : 'CANCELAR'}
        btnOnClick={() => history.push('/comunidad')}
        transparentBtn
      />
      <TextInput
        placeholder={'Escribe tu título aquí'}
        title={'Título de publicación'}
        isSmall={true}
        value={questions.title}
        name={'title'}
        handleChange={handleChange}
      />
      <TextInput
        placeholder={'Escribe tu título aquí'}
        title={'Publicación'}
        value={questions.subTitle}
        name={'subTitle'}
        handleChange={handleChange}
      />
      <StyledBtnContainer isMobile={isMobile}>
        <Button onClick={onSave} btnBlue>PUBLICAR</Button>
      </StyledBtnContainer>
    </>)
};

const StyledBtnContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    
    ${({isMobile}) => isMobile && `
       button {
       width: 100%;
       }
    `}
`;

export default NewQuestions;