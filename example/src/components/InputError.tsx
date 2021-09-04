interface IProps {
  error: string;
}

const InputError = ({ error }: IProps) => (
  <>{error && <div className="text-danger my-1 h6">{error}</div>}</>
);

export default InputError;
