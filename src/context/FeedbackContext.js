import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import FeedbackData from "../data/FeedbackData";
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedbackData, setFeedbackData] = useState([
    {
      id: 1,
      text: "This is awesome 1",
      rating: 10,
    },
    {
      id: 2,
      text: "This is awesome 2",
      rating: 7,
    },
    {
      id: 3,
      text: "This is awesome 3",
      rating: 9,
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    feedback: {},
    edit: false,
  });
  // Adding New Feedback Item
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedbackData([newFeedback, ...feedbackData]);
  };
  // Deleting Feedback Item
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete this?")) {
      setFeedbackData(feedbackData.filter((feedback) => feedback.id !== id));
    }
  };
  // Setting Item To Be Updated
  const editFeedback = (feedback) => {
    setFeedbackEdit({
      feedback,
      edit: true,
    });
  };

  // Updating Feedback Item
  const updateFeedback = (id, updFeedback) => {
    setFeedbackData(
      FeedbackData.map((feedback) =>
        feedback.id === id ? { ...feedback, ...updFeedback } : feedback
      )
    );
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedbackData,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
