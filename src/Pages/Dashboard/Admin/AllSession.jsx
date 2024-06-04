import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

const AllSession = ({ id }) => {
  const axiosSecure = useAxiosSecure();
  const [statusData, setStatusData] = useState([]);

  // featch all session

  const getData = async () => {
    const { data } = await axiosSecure.get("/session");
    setStatusData(data);
  };

  // featch a specific session
  const spesicicData = async () => {
    const { data } = await axiosSecure.get(`/session/${id}`);
    setStatusData([data]);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (id) {
      spesicicData();
    }
  }, [id]);

  //   const { data: session = [] } = useQuery({
  //     queryKey: ["session"],
  //     queryFn: async () => {
  //       const res = await axiosSecure.get("/session");
  //       return res.data;
  //     },
  //   });

  const handleStatus = async (id, prevSta, status) => {
    if (prevSta === status) return alert("ok");
    await axiosSecure.patch(`/updateSta/${id}`, { status });

    getData();
  };
  return (
    <div>
      all session
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Session Title</th>
                <th>Tutor Name</th>
                <th>Tutor Email</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {statusData.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>{item.title}</td>
                  <td>{item.tutorName}</td>
                  <td>{item.tutorEmail}</td>
                  <td>{item.status}</td>
                  <td>
                    <details className="dropdown">
                      <summary className="m-1 btn">Action</summary>
                      <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                       
                        <li
                          onClick={() =>
                            handleStatus(item._id, item.status, "Approve")
                          }
                        >
                          <a>approve</a>
                        </li>
                        <li
                          onClick={() =>
                            handleStatus(item._id, item.status, "Reject")
                          }
                        >
                          <a>Reject</a>
                        </li>
                      </ul>
                    </details>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllSession;
