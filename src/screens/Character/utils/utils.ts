export function teamTransform(value: number) {
  if (value === 0) {
    return 'circle';
  }
  if (value === 1) {
    return 'square';
  }
  if (value === 2) {
    return 'triangle';
  }
}
