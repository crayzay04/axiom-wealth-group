// Renders copy that may contain [[CONFIRM: ...]] markers, highlighting each
// marker so unconfirmed facts stay visible during review.
export default function ConfirmText({ text }: { text: string }) {
  const parts = text.split(/(\[\[CONFIRM[^\]]*\]\])/g);

  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("[[CONFIRM") ? (
          <mark
            key={i}
            className="rounded border border-dashed border-silver/60 bg-transparent px-1 font-mono text-[13px] text-silver"
          >
            {part}
          </mark>
        ) : (
          part
        )
      )}
    </>
  );
}
