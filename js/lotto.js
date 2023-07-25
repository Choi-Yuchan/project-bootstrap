//   <!-- 로또 번호 추첨 JavaScript 코드 -->

// 로또 번호 추첨 함수
function generateLottoNumbers() {
  const lottoNumbers = [];

  // 6개의 로또 번호를 추첨
  while (lottoNumbers.length < 6) {
    const randomNumber = Math.floor(Math.random() * 45) + 1;
    if (!lottoNumbers.includes(randomNumber)) {
      lottoNumbers.push(randomNumber);
    }
  }
  lottoNumbers.sort((a, b) => a - b);

  return lottoNumbers;
}

// 로또 번호 출력 함수
function displayLottoNumbers() {
  const lottoNumbers = generateLottoNumbers();
  const lottoNumbersContainer = document.getElementById("lotto-numbers");
  lottoNumbersContainer.innerHTML = ""; // 기존 번호 삭제

  lottoNumbers.forEach((number) => {
    const numberElement = document.createElement("span");
    numberElement.textContent = number;
    numberElement.classList.add("lotto-number");

    // 번호에 따라 다른 색상 클래스를 부여
    if (number <= 10) {
      numberElement.classList.add("num1"); // 빨간색 배경
    } else if (number <= 20) {
      numberElement.classList.add("num2"); // 초록색 배경
    } else if (number <= 30) {
      numberElement.classList.add("num3"); // 파란색 배경
    } else if (number <= 40) {
      numberElement.classList.add("num4"); // 주황색 배경
    } else {
      numberElement.classList.add("num5");
    }

    lottoNumbersContainer.appendChild(numberElement);
  });
}

// "로또 번호 추첨하기" 버튼 클릭 시 이벤트 처리
const generateButton = document.getElementById("generate-button");
generateButton.addEventListener("click", displayLottoNumbers);

// 페이지 로딩 시 초기 로또 번호 출력
displayLottoNumbers();
