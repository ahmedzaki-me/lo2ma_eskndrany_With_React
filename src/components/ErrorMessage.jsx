export default function ErrorMessage({ message, messageColor, on = false }) {
  const styles = {
    errorAlert: {
      position: "fixed",
      zIndex: 60,
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "#0000008f",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      whiteSpace: "pre-line",
    },
    errorAlertContent: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
      borderRadius: "5px",
      width: "90%",
      padding: "10px",
      fontWeight: "bold",
      fontSize: "13px",
      lineHeight: 1.7,
    },
  };
  return on ? (
    <div style={styles.errorAlert}>
      <div style={{ ...styles.errorAlertContent, color: messageColor }}>
        {message}
      </div>
    </div>
  ) : (
    ""
  );
}
