function Input({ label, id, type = "text" }) {
  return (
    <div style={{ marginBottom: "10px" }}>
      <label htmlFor={id} style={{ marginRight: "10px" }}>{label}</label>
      <input id={id} type={type} />
    </div>
  )
}

export default Input