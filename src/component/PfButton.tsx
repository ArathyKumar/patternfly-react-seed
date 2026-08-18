import * as React from 'react';
import { type EventName, createComponent } from '@lit/react';
// Lit custom element class; importing this module also registers <pf-v5-button>.
import { PfV5Button } from '@patternfly/elements/pf-v5-button/pf-v5-button.js';

/**
 * React wrapper around PatternFly Elements `pf-v5-button`.
 * `createComponent` maps React props to the custom element’s properties and
 * event listeners.
 */
export const PfButton = createComponent({
  elementClass: PfV5Button,
  events: {
    // Expose the native click event as an `onClick` prop, typed as MouseEvent.
    onClick: 'click' as EventName<MouseEvent>,
  },
  react: React,
  tagName: 'pf-v5-button',
});
