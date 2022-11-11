import React, { useState } from "react";
import Modal from "../Modal/Modal";
import useTitle from "../hooks/useTitle";

const Reviews = () => {
  useTitle("Reviews");
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      {/* Modal testing-------- */}

      <div>
        <button
          className="openModalBtn"
          onClick={() => {
            setModalOpen(true);
          }}
        >
          Open
        </button>

        {modalOpen && <Modal setOpenModal={setModalOpen} />}
      </div>

      {/* Modal testing-------- */}
    </div>
  );
};

export default Reviews;
