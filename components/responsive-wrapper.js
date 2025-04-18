/**
 * A wrapper component that applies responsive design
 * to its children based on the current viewport size
 */
export function ResponsiveWrapper({ children, className = '', mobileFlex = true }) {
  return (
    <div className={`responsive-container ${mobileFlex ? 'responsive-flex' : ''} ${className}`}>
      {children}
    </div>
  );
}

/**
 * Component that displays differently on different screen sizes
 */
export function ResponsiveElement({ 
  children,
  mobileContent,
  tabletContent,
  desktopContent,
  showOn = 'all' // 'all', 'mobile', 'tablet', 'desktop'
}) {
  // Render different content based on the target device
  const renderContent = () => {
    if (showOn === 'mobile') {
      return <div className="mobile-only">{mobileContent || children}</div>;
    }
    if (showOn === 'tablet') {
      return (
        <>
          <div className="mobile-only">{mobileContent || children}</div>
          <div className="tablet-only">{tabletContent || children}</div>
        </>
      );
    }
    if (showOn === 'desktop') {
      return (
        <>
          <div className="mobile-only">{mobileContent || children}</div>
          <div className="tablet-only">{tabletContent || children}</div>
          <div className="desktop-only">{desktopContent || children}</div>
        </>
      );
    }
    return children;
  };
  
  return renderContent();
}
