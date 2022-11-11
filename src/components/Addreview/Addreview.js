import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import "./Addreview.css";

const Addreview = () => {
  const { _id, title } = useLoaderData();
  const { user } = useContext(AuthContext);
  const handelAddreview = (event) => {
    event.preventDefault();
    const form = event.target;
    const review = form.review.value;
    const email = user?.email || "unregister";
    console.log(review, email);

    const myreview = {
      order: _id,
      reviewName: title,
      review,
      email,
    };
    fetch("https://video-editing-service-server.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(myreview),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Review Added successfully ✅");
          form.reset();
        }
      })
      .chatch((error) => console.log(error));
  };

  return (
    <div className="my-40 md:my-36 ">
      <h2 className="text-center text-2xl mb-10 font-semibold text-blue-800">
        Add Your Review on - <span className="text-red-600">{title}</span>
      </h2>

      <form
        onSubmit={handelAddreview}
        className="w-5/6 md:w-3/4 mx-auto border px-4 py-10 md:px-20 md:py-20 bg-gray-50 shadow-xl rounded-xl md:max-w-4xl"
      >
        <div className="relative mb-4">
          <input
            required
            type="text"
            name="review"
            placeholder="Type your Review..."
            className="w-full py-4 pl-6 text-sm rounded-md sm:w-full focus:outline-none  border text-gray-800 focus:border-violet-600 shadow"
          />
        </div>
        <div className="relative mb-4">
          <input
            required
            type="email"
            name="email"
            defaultValue={user?.email}
            readOnly
            className="w-full py-4 pl-6 text-sm rounded-md sm:w-full focus:outline-none  border text-gray-800 focus:border-violet-600 shadow"
          />
        </div>

        <div className="flex justify-center">
          <input
            className="bg-green-600 hover:bg-green-700 text-white font-bold shadow-lg rounded-full cursor-pointer  py-3 w-1/2"
            type="submit"
            value="Add Review"
          />
        </div>
      </form>
    </div>
  );
};

export default Addreview;
