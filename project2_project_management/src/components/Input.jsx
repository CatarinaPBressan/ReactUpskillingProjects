export default function Input({ isTextArea = false, label, id, ...props }) {
  return (
    <div className="input-group">
      <label htmlFor={id}>{label}</label>
      {isTextArea ? (
        <textarea id={id} name={id} {...props} />
      ) : (
        <input id={id} name={id} {...props} />
      )}
    </div>
  );
}
