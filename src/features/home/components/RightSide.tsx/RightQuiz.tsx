import {
  Button,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

const questions = [
  {
    question: "What is React?",
    options: [
      "Library for building interaction interfaces",
      "Language",
      "Style framework",
      "None of the above",
    ],
    answer: 0,
  },
  {
    question: "Who maintains React?",
    options: ["Google", "Facebook", "Apple", "Microsoft"],
    answer: 1,
  },
  {
    question: "Who maintains JavaScript?",
    options: ["Google", "Facebook", "Apple", "Microsoft"],
    answer: 1,
  },
  {
    question: "Who maintains Bruh?",
    options: ["Google", "Facebook", "Apple", "Microsoft"],
    answer: 1,
  },
];

export default function RightQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleClickOption = (index: number) => {
    const correct = questions[currentQuestion].answer === index;
    setSelectedOption(index);
    setIsCorrect(correct);
  };

  const nextHandler = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setIsCorrect(null);
    }
  };

  const restartHandler = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setIsCorrect(null);
  };

  return (
    <div>
      <Typography sx={{ fontSize: "1.1em", mb: ".5em" }}>
        {questions[currentQuestion].question}
      </Typography>
      <List>
        {questions[currentQuestion].options.map((option, index) => (
          <ListItem disablePadding key={index}>
            <ListItemButton
              sx={{
                height: "50px",
                mb: "1em",
                borderRadius: "5px",
                border:
                  selectedOption === index
                    ? isCorrect
                      ? "2px solid green"
                      : "2px solid red"
                    : "1px solid rgba(255, 0, 0, .5)",
                borderColor:
                  isCorrect && index === questions[currentQuestion].answer
                    ? "rgba(0, 200, 0, 1) "
                    : undefined,
                color:
                  isCorrect && index === questions[currentQuestion].answer
                    ? "rgba(0, 200, 0, 1) "
                    : "",
                fontWeight:
                  isCorrect && index === questions[currentQuestion].answer
                    ? "bold"
                    : "",
              }}
              onClick={() => handleClickOption(index)}
            >
              {option}
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      {currentQuestion !== questions.length - 1 ? (
        <Button
          sx={{
            width: "100%",
            height: "40px",
            backgroundColor: isCorrect
              ? "rgba(255, 0, 0, .5)"
              : "rgba(255, 0, 0, .2)",
            cursor: isCorrect ? "pointer" : "default",
            "&:hover": { backgroundColor: "rgba(255, 0, 0, .7)" },
          }}
          onClick={nextHandler}
          disabled={isCorrect !== true}
        >
          <Typography
            sx={{
              color: isCorrect
                ? "rgba(255, 255, 255, 1)"
                : "rgba(255, 255, 255, .5)",
            }}
          >
            Next Question
          </Typography>
          <ArrowForwardIcon
            sx={{
              color: isCorrect
                ? "rgba(255, 255, 255, 1)"
                : "rgba(255, 255, 255, .5)",
              ml: ".5em",
            }}
          />
        </Button>
      ) : (
        <Button
          sx={{
            width: "100%",
            height: "40px",
            backgroundColor: "rgba(255, 0, 0, .5)",
            cursor: "pointer",
            "&:hover": { backgroundColor: "rgba(255, 0, 0, .7)" },
          }}
          onClick={restartHandler}
        >
          <Typography sx={{ color: "white" }}>Go Again</Typography>
          <RestartAltIcon sx={{ color: "white", ml: ".5em" }} />
        </Button>
      )}
    </div>
  );
}
