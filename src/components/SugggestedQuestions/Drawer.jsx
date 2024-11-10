import React from "react";
import {
  DrawerContainer,
  DrawerContent,
  Heading,
  QuestionItem,
  QuestionList,
} from "./styles";
import { useSelector } from "react-redux";

const Drawer = () => {
  const { suggestedQuestions, suggestedQuestionsDrawer } = useSelector(
    (state) => state.conversation,
  );

  return (
    <DrawerContainer collapsed={!suggestedQuestionsDrawer}>
      {/* <DrawerContent> */}
      <Heading>Suggested Questions</Heading>
      <QuestionList suggestedQuestionsDrawer={suggestedQuestionsDrawer}>
        {suggestedQuestions.data.map((question) => (
          <QuestionItem key={question.id}>
            <span>{question.question}</span>
            <span className="category">{question?.category}</span>
          </QuestionItem>
        ))}
      </QuestionList>
      {/* </DrawerContent> */}
    </DrawerContainer>
  );
};

export default Drawer;
