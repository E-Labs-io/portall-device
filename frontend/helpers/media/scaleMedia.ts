/** @format */

function scaleImage(
  windowWidth: number,
  borderThickness: number,
  aspectRatio: number
): { width: number; height: number } {
  const availableWidth = windowWidth - borderThickness * 2;
  const availableHeight = window.innerHeight - borderThickness * 2;

  let width = availableWidth;
  let height = availableHeight;

  if (availableWidth / aspectRatio > availableHeight) {
    width = availableHeight * aspectRatio;
  } else {
    height = availableWidth / aspectRatio;
  }

  return { width, height };
}

export default scaleImage;
