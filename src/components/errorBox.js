import './style.css';

const ErrorBox = (props) => {
  return (
    <div class="error">
      {props.error}
    </div>
  );
};

export default ErrorBox;
