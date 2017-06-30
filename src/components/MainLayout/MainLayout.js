import React from 'react'
import Header from './Header'

export default function MainLayout({ children }) {
  return (
    <div>
      <Header/>
      <div>
        <div>
          {children}
        </div>
      </div>
    </div>
  );
}
