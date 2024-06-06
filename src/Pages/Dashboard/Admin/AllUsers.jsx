// import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FaTrashAlt } from "react-icons/fa";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
// import { useEffect } from "react";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const [allUsers, setAllUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");

  // const { data: users = [], refetch } = useQuery({
  //   queryKey: ["users"],
  //   queryFn: async () => {
  //     const res = await axiosSecure.get("/users");
  //     return res.data;
  //   },
  // });
  

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(searchText);
  };

  // // filter data from db
  // useEffect(() => {
  //   const getData = async () => {
  //     const { data } = await axios(
  //       `http://localhost:5000/dashboard/users?search=${search}`
  //     );
  //     setAllUsers(data);
  //   };

  //   getData();
  // }, [search]);

  // filter
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosSecure.get(`/users?search=${search}`);
        setAllUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [search]);

  // get all data from db
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosSecure.get("/users");
        setAllUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [axiosSecure]);

  const handleDelete = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            // refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });

            const remaining = allUsers.filter((item) => item._id !== user._id);
            setAllUsers(remaining);
          }
        });
      }
    });
  };

  return (
    <div>
      <div>
        <div className="flex justify-evenly py-4">
          <h2 className="text-3xl">All Users</h2>
          <h2 className="text-3xl">Total Users: </h2>
        </div>
        <div className="overflow-x-auto">
          <div className="w-1/3">
            <form onSubmit={handleSearch}>
              <label className="input input-bordered flex items-center gap-2">
                <input
                  type="text"
                  name="searchValue"
                  onChange={(e) => setSearchText(e.target.value)}
                  value={searchText}
                  className="grow"
                  placeholder="Search"
                />
                <button type="submit" className="btn text-white bg-[#000000e7]">
                  Search
                </button>
              </label>

              {/* <input
                type="text"
                name="searchValue"
                className="grow input"
                onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
                placeholder="Search"
              />
              <input
                className="btn bg-[#000000ce] text-white"
                type="submit"
                value="Search"
              /> */}
            </form>
          </div>
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allUsers &&
                allUsers.map((user, index) => (
                  <tr key={user._id}>
                    <th>{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>

                    <td>
                      {user.role}
                      <Link to={`/dashboard/updateRole/${user._id}`}>
                        <button className="btn ">edit</button>
                      </Link>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(user)}
                        className="btn btn-ghost btn-lg"
                      >
                        <FaTrashAlt />
                      </button>
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

export default AllUsers;
