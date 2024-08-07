// import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import SectionTitle from "../../../Shired/SectionTitle";
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
  //       `https://assignment12-server-inky.vercel.app/dashboard/users?search=${search}`
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
        <div className="lg:mt-10 md:mt-6">

        <SectionTitle heading={"All Users"} />
        </div>
        <div className="overflow-x-auto lg:ml-10 lg:mr-10">
          <div className="w-1/3">
            <form onSubmit={handleSearch}>
              <label className="input input-bordered flex items-center gap-2">
                <input
                  type="text"
                  name="searchValue"
                  onChange={(e) => setSearchText(e.target.value)}
                  value={searchText}
                  className="grow border-[#1E90FF] "
                  placeholder="Search"
                />
                <button
                  type="submit"
                  className="btn text-white bg-[#1E90FF] hover:bg-[#1E90FF] -mr-4"
                >
                  Search
                </button>
              </label>
            </form>
            <br />
          </div>
          <h3 className="border p-2">Total Users: {allUsers.length}</h3>
          <table className="table w-full">
            {/* head */}
            <thead className="bg-[#1E90FF]  text-white">
              <tr className="text-lg">
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Change Role</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {allUsers &&
                allUsers.map((user, index) => (
                  <tr key={user._id}>
                    <th>{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>

                    <td>{user.role}</td>
                    <td>
                      <Link to={`/dashboard/updateRole/${user._id}`}>
                        <button className="btn bg-transparent border-none">
                          {" "}
                          <FaEdit className="text-2xl" />{" "}
                        </button>
                      </Link>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(user)}
                        className="btn btn-ghost btn-lg"
                      >
                        <FaTrashAlt className="text-orange-500" />
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
