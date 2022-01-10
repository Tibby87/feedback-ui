import FeedbackItem from "./FeedbackItem";
import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackList() {
  const { feedbackData } = useContext(FeedbackContext);

  if (!feedbackData || feedbackData.length === 0) {
    return <p>No Feedback Yet</p>;
  }

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedbackData.map((feedback) => (
          <motion.div
            key={feedback.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem key={feedback.id} feedback={feedback} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
  // return (
  //   <div className="feedback-list">
  //     {feedbackData.map((feedback) => (
  //       <FeedbackItem
  //         key={feedback.id}
  //         feedback={feedback}
  //         handleDelete={handleDelete}
  //       />
  //     ))}
  //   </div>
  // );
}

export default FeedbackList;
