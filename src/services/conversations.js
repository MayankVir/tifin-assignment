import { questionsData } from "../data";

export const getSuggestedQuestionsService = async (query = "") => {
  return new Promise((resolve) => {
    const filteredQuestions = questionsData.filter((question) =>
      question.question.toLowerCase().includes(query.toLowerCase()),
    );
    resolve(filteredQuestions);
  });
};
