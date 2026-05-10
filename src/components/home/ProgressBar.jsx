// ProgressBar.jsx
const ProgressBar = ({ progress = 60 }) => {
  return (
    <div className="h-1 bg-gray-300 rounded mt-2">
      <div
        className="h-1 bg-green-500 rounded"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
