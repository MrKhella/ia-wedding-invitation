export default function SealButton({ onClick }) {
  return (
    <div className="seal-btn" onClick={onClick}>
      <span className="seal-mark">I&A</span>
    </div>
  );
}
