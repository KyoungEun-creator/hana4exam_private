function getInitialSound(char) {
  const initialConsonants = [
    "ㄱ",
    "ㄲ",
    "ㄴ",
    "ㄷ",
    "ㄸ",
    "ㄹ",
    "ㅁ",
    "ㅂ",
    "ㅃ",
    "ㅅ",
    "ㅆ",
    "ㅇ",
    "ㅈ",
    "ㅉ",
    "ㅊ",
    "ㅋ",
    "ㅌ",
    "ㅍ",
    "ㅎ",
  ];
  const firstHangul = "가".charCodeAt(0);
  const lastHangul = "힣".charCodeAt(0);

  const charCode = char.charCodeAt(0);

  if (charCode >= firstHangul && charCode <= lastHangul) {
    const index = Math.floor((charCode - firstHangul) / (21 * 28));
    return initialConsonants[index];
  } else if (initialConsonants.includes(char)) {
    return char;
  } else {
    return char;
  }
}

function convertToInitialPattern(str) {
  return str.split("").map(getInitialSound).join("");
}

module.exports = {
  searchByKoreanInitialSound: (data, firstSounds) => {
    const pattern = firstSounds.split("").join(".*?");
    const regex = new RegExp(pattern);

    return data.filter((item) => regex.test(convertToInitialPattern(item)));
  },
};
