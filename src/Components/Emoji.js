import React from 'react';

function Emoji ({ label, emoji, styles }) {
  return <span role='img' aria-label={label} className={styles} > {emoji} </span>
}

export default React.memo(Emoji);
