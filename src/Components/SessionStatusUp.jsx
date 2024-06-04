import { useLoaderData } from "react-router-dom";

const SessionStatusUp = ({ handleStatus }) => {
  const loadedeData = useLoaderData();
  const { _id } = loadedeData;
  handleStatus(_id);
  return <div></div>;
};

export default SessionStatusUp;
