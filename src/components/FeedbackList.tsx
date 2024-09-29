import FeedbackItem from "./FeedbackItem";

const feedbackItems = [
  {
    upvoteCount: 540,
    badgeLetter: "B",
    companyName: "Bytegrad",
    text: "lorem ipsum",
    daysAgo: 4,
  },
  {
    upvoteCount: 235,
    badgeLetter: "S",
    companyName: "Starbucks",
    text: "lorem ipsum",
    daysAgo: 7,
  },
];

export default function FeedbackList() {
  return (
    <ol className="feedback-list">
      {feedbackItems.map((feedbackItem) => (
        <FeedbackItem upvoteCount={5} />
      ))}
    </ol>
  );
}
