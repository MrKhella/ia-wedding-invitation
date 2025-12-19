import SealButton from "./SealButton";

export default function Cover({ openInvite }) {
  return (
    <div id="cover" className="page active">
      <h1>I & A</h1>
      <p>Con gioia vi invitiamo al nostro matrimonio</p>

      <SealButton onClick={openInvite} />

      <p>clicca per aprire l’invito</p>
    </div>
  );
}
