export function PlaceholderImage({ label, aspect = 'landscape', tone = 'base' }) {
  return (
    <div className={`placeholder placeholder--${aspect} placeholder--${tone}`} aria-hidden="true">
      <span>{label}</span>
    </div>
  );
}
