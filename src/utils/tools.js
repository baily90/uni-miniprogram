export const pxToRpx = (px, screenWidth) => (750 * Number.parseInt(px)) / screenWidth

export const rpxToPx = (rpx, screenWidth) => (screenWidth * Number.parseInt(rpx)) / 750
