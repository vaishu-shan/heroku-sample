import React, { useEffect } from "react";

const Modal = (props) => {
  const {
    children,
    closeModal,
    connectWallet,
    modalId,
    modalClass,
    isOpen,
    // isDisable,
    modalContentClass,
    modalBodyContent,
  } = props;

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = isOpen ? "hidden" : "auto";
    body.style.maxHeight = "100vh";
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <>
          <div
            className="modal fade show"
            id={modalId || ""}
            tabIndex="-1"
            role="dialog"
            aria-labelledby=""
            aria-hidden="true"
            style={{
              display: "block",
              zIndex: 1041,
            }}
          >
            <div
              className="modal-backdrop fade show"
              style={{ cursor: connectWallet ? "pointer" : "auto" }}
              onClick={(e) => {
                e.stopPropagation();
                connectWallet && closeModal && closeModal(false);
              }}
            />
            <div
              className={`modal-dialog ${
                modalClass || ""
              } modal-dialog-centered`}
              role="document"
              style={{ zIndex: 1045 }}
            >
              <div
                className={`modal-content animated modalheight ${
                  modalContentClass || ""
                } fadeInDownBig p-2`}
              >
                <div className={`modal-content-1 ${modalBodyContent || ""}`}>
                  <div className="p-1">
                    <button type="button" className="close" disabled={true}>
                      <span aria-hidden="true">&nbsp;</span>
                    </button>
                  </div>
                  {children}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Modal;
