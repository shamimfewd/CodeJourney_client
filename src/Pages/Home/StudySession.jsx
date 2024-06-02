import { useEffect, useState } from "react";
import SessionCard from "../../Components/SessionCard";

const StudySession = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("studySession.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {cards.map((card) => (
        <SessionCard key={card.id} card={card} />
      ))}
    </div>
  );
};

export default StudySession;
