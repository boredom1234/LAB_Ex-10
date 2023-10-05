import React from "react";
import CurrentDate from './CurrentDate';

const Modal = () => {
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        INQUIRE
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Contact Info: </h3>
          <p className="py-4">
            - Name: Sarah Johnson <br />- Contact Number: 555-123-4567 <br />-
            Owner Name: John Smith <br />- Advance Payment: $500 <br />- Email:
            sarah.j@example.com <br /><CurrentDate /> <br /> <br />
            <textarea
              placeholder="Type your details here..."
              className="textarea textarea-success textarea-sm w-full max-w-lg"
            ></textarea>
          </p>
          <div
            className="modal-action"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center", // Center buttons vertically
            }}
          >
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-outline btn-success" style={{ marginRight: "19rem" }}>
                Submit
              </button>
              <button className="btn btn-outline btn-error">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
