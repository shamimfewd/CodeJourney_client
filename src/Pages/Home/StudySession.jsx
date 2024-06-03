import SessionCard from "../../Components/SessionCard";
import useSessionCard from "../../Hooks/useSessionCard";

const StudySession = () => {
  const [session] = useSessionCard();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {session.map((card) => (
        <SessionCard key={card.id} card={card} />
      ))}
    </div>
  );
};

export default StudySession;
