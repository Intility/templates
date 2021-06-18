import React from 'react';
import MsLogo from './MsLogo';

export default function MSDocsCard({ children, url, title, subtitle, width }) {
  return (
    <a
      style={{
        width: width || '100%',
        color: 'var(--ifm-font-color-base)',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        border: 'solid 1px var(--ifm-color-secondary-dark)',
        padding: '5px',
        boxShadow: '0px 0px 8px rgba(0,0,0,.1)',
        borderRadius: '2px',
      }}
      href={url}
    >
      <MsLogo width="50" height="50" />
      <span
        style={{
          display: 'flex',
          flexDirection: 'column',
          margin: '0 0 0 15px',
        }}
      >
        <span style={{ lineHeight: '1.1em' }}>{title}</span>
        <span style={{ fontSize: '.8em' }}>{subtitle}</span>
      </span>
      {children}
    </a>
  );
}
