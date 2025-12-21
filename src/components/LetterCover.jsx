import SealButton from "./SealButton";
// import "./LetterCover.css";

export default function LetterCover({ openInvite }) {
  return (
    <div className="letter-cover">
      <div className="letter-inner">
        <SealButton onClick={openInvite} />
      </div>
    </div>
  );
}
