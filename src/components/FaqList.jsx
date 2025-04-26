import { useState } from "react";
import FAQItem from "./FaqItem";
import logo from "../assets/images/icon-star.svg";

const faqs = [
  {
    question: "What is Frontend Mentor, and how will it help me?",
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend skills with projects in HTML, CSS, and JavaScript.",
  },
  {
    question: "Is Frontend Mentor free?",
    answer: "Yes, there are both free and premium challenges available.",
  },
  {
    question: "Can I use Frontend Mentor projects in my portfolio?",
    answer: "Absolutely! These projects are perfect for your portfolio.",
  },
  {
    question: "How can I get help if I'm stuck on a challenge?",
    answer:
      "You can ask questions in the Frontend Mentor community or explore the solutions others have submitted.",
  },
];

const FaqList = () => {
  const [openIndex, setOpenIndex] = useState(null);
  console.log("openIndex", openIndex);

  const handleClick = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="faq-container">
      <div className="header">
        <img src={logo} alt="logo" className="logo" />
        <h1 className="faq-title">FAQs</h1>
      </div>
      {faqs.map((faq, index) => (
        <FAQItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default FaqList;
