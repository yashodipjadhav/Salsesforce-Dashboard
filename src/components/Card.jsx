const Card = ({ title, children }) => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="header-left">
          <div className="icon-placeholder">
            {/* The small square icon in the top left of the image */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" />
            </svg>
          </div>
          <h3>{title}</h3>
        </div>
        <button className="view-report">View Report ↗</button>
      </div>
      <div className="card-content">{children}</div>
    </div>
  );
};

export default Card;