/** @format */

function calculateAspectRatio(
  media: HTMLImageElement | HTMLVideoElement
): number {
  const { naturalWidth, naturalHeight } = media as any;

  console.log("image size: H:", naturalHeight, " W: ", naturalWidth);
  return naturalWidth / naturalHeight;
}

export default calculateAspectRatio;
