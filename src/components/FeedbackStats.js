import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackStats() {
  const { feedbackData } = useContext(FeedbackContext);
  const average = (
    feedbackData.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedbackData.length
  )
    .toFixed(1)
    .replace(/[.,]0$/, "");

  return (
    <div className="feedback-stats">
      <h4>{feedbackData.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

export default FeedbackStats;
