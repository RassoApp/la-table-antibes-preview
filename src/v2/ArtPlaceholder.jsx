export function ArtPlaceholder({ label, kind = 'terrace', ratio = 'card', caption }) {
  return (
    <figure className={`v2-art v2-art--${kind} v2-art--${ratio}`}>
      <div className="v2-art__texture" aria-hidden="true" />
      <div className="v2-art__sun" aria-hidden="true" />
      <figcaption className="v2-art__caption">
        <span>{label}</span>
        {caption ? <small>{caption}</small> : null}
      </figcaption>
    </figure>
  );
}
