declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.svg';
declare module '*.css';
declare module '*.wav';
declare module '*.mp3';
declare module '*.m4a';
declare module '*.rdf';
declare module '*.ttl';
declare module '*.pdf';

// Load React's type definitions to extend below.
import 'react';

// Open React's module so we can add to its existing types.
declare module 'react' {
  // JSX is where React stores valid tag names and their prop types.
  namespace JSX {
    // IntrinsicElements lists built-in and custom HTML-like tags used in JSX.
    interface IntrinsicElements {
      // Register <custom-button> as a valid JSX tag.
      'custom-button': React.DetailedHTMLProps<
        // Allow standard element attributes plus an optional label string.
        React.HTMLAttributes<HTMLElement> & { label?: string },
        // The underlying DOM element type for this custom element.
        HTMLElement
      >;
    }
  }
}
