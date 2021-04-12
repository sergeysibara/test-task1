// breakpoints sizes from
// https://getbootstrap.com/docs/4.6/layout/overview/#responsive-breakpoints

export const breakpoints = {
  sm: 576,
  md: 768,
};

function breakpointDown(breakpoint: number) {
  return `max-width: ${breakpoint - 0.2}px`;
}

/**
 *  max-width which is less than maximum breakpoint width.
 */
export const breakpointsDown = {
  sm: breakpointDown(breakpoints.sm),
  md: breakpointDown(breakpoints.md)
};
