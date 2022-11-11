import React from "react";

const ReviewTable = ({ rev }) => {
  return (
    <>
      <tr className="text-right border-b border-opacity-20 border-gray-300 bg-gray-100">
        <td className="px-3 py-2 text-left">
          <span>{rev.reviewName}</span>
        </td>
        <td className="px-3 py-2 text-left">
          <span>{rev.email}</span>
        </td>
        <td className="px-3 py-2 text-left">
          <span>{rev.review}</span>
        </td>
      </tr>
    </>
  );
};

export default ReviewTable;
