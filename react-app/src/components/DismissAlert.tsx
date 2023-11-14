interface Props {
  onClose: () => void;
}

const DismissAlert = ({ onClose }: Props) => {
  return (
    <div className="alert alert-warning alert-dismissible" role="alert">
      DismissAlert
      <button
        type="button"
        className="btn-close"
        // data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default DismissAlert;
