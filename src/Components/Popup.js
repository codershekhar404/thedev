import React from "react";

const Popup = (props) => {
  const handleClose = () => {
    props.closeModal(false);
    props.setData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };
  const styles = {
    modal_background: {
      width: "100vw",
      height: "100vh",
      backgroundColor: "#F5F5F5",
      position: "fixed",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: "1",
    },
    modal_container: {
      width: "340px",
      height: "auto",
      borderRadius: "25px",
      backgroundColor: "#3B3BF5",
      boxShadow: "rgba(0,0,0.0.35) 0px 5px 15px",
      display: "flex",
      flexDirection: "column",
      padding: "25px",
      paddingBottom: "50px",
      marginBottom: "50px",
    },
    title: {
      display: "inline-block",
      color: "#fff",
      fontSize: "60px",
    },
    title_line: {
      margin: "10px 0 20px 0",
      width: "100%",
    },
    modal_btn_container: {
      display: "flex",
      justifyContent: "flex-end",
    },
    modal_btn: {
      backgroundColor: "transparent",
      border: "none",
      fontSize: "30px",
      cursor: "pointer",
      color: "#fff",
    },
    text: {
      fontSize: "25px",
      color: "#eee",
      marginTop: "10px",
    },
  };
  return (
    <>
      <div style={styles.modal_background} className="modal_background">
        <div style={styles.modal_container}>
          <div style={styles.modal_btn_container} className="modal_btn">
            <button style={styles.modal_btn} onClick={handleClose}>
              &times;
            </button>
          </div>
          <h1 style={styles.title}>
            Thank <br />
            You! <br /> <span>{props.name}</span>
          </h1>
          <hr style={styles.title_line} />
          <p style={styles.text}>We'll be in touch. Shortly!</p>
        </div>
      </div>
    </>
  );
};

export default Popup;
