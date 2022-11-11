import React, { useContext, useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import useTitle from "../hooks/useTitle";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import ReviewTable from "./ReviewTable";

const Reviews = () => {
  const { user, logOut } = useContext(AuthContext);
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch(
      `https://video-editing-service-server.vercel.app/reviews?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("editnexus-token")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }
        return res.json();
      })
      .then((data) => {
        setReview(data);
      });
  }, [user?.email, logOut]);

  useTitle("Reviews");

  return (
    <div>
      {/* Modal testing-------- */}

      <table className="min-w-full text-xs">
        <thead className="rounded-t-lg bg-gray-300">
          <tr className="text-right">
            <th title="Ranking" className="p-3 text-left">
              Review For
            </th>
            <th title="Team name" className="p-3 text-left">
              Email
            </th>
            <th title="Team name" className="p-3 text-left">
              Review Massage
            </th>
          </tr>
        </thead>
        <tbody>
          {review.map((rev) => (
            <ReviewTable key={rev._id} rev={rev}></ReviewTable>
          ))}
        </tbody>
      </table>

      {/* Modal testing-------- */}
    </div>
  );
};

export default Reviews;
