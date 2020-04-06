import { useState, useLayoutEffect } from 'react';

export function useLockBodyScroll() {
  useLayoutEffect(() => {
   // Get original body overflow
   const originalStyle = document.body.style.overflow = "scroll";  
   // Prevent scrolling on mount
   document.body.style.overflow = 'hidden';
   // Re-enable scrolling when component unmounts
   return () => document.body.style.overflow = originalStyle;
   }, []); // Empty array ensures effect is only run on mount and unmount
}