interface Props {
  id: string;
  label: string;
  type?: string;
}

const Input = ({ id, label, type = "text" }: Props) => {
  return (
    <div className="mb-3">
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <input className="form-control" id={id} type={type} />
    </div>
  );
};

export default Input;
