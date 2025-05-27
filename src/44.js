function calculateArea(rectangles) {
  let totalArea = 0;

  rectangles.forEach(rect => {
    if (!rects[rect]) {
      throw new Error(`No area is provided for rectangle with id: ${rect}`);
    }

    const { width, height } = rect;
    const area = width * height;
    totalArea += area;
  });

  return totalArea / rectangles.length;
}

function findLongestWord(words) {
  if (!words || !Array.isArray(words)) {
    throw new Error("Words array is not provided or is not an array");
  }

  words.sort((a, b) => a.length - b.length);

  return words[0];
}
