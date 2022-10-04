export default function FormSection({ children, className = '' }) {
  return (
    <div className={`event-form-section flex flex-col ${className}`}>
      {children}
    </div>
  );
}
