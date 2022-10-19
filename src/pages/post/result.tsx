import React from "react";

const Result = () => {
  const countWords = (text: string) => {
    let words = 0;
    let arr = text.trim().split(/\s+/);

    const isWord = (str: string) => {
      // 알파벳 이나 숫자가 발견되었음을 나타내는 변수를 둔다
      let alphaNumericFound = false;

      // 단어중에서 알파벳, 숫자가 하나라도 발견되면 단어로 인식할 것이다.
      // 즉, 입니다. 그녀, 코딩! <- 이들은 특수문자가 섞여있지만, 단어이다.

      for (let i = 0; i < str.length; i++) {
        // 정규식 표현이다
        // 숫자표현 정규식 0-9
        // 알파벳표현 정규식 a-zA-z
        // 한글표현 정규식 ㄱ-ㅎㅏ-ㅣ가-힣
        // 이들을 연속하여 써주면 or 로 인식하여 "숫자이거나, 알파벳이거나, 한글이거나" 라는 의미로 해석된다.
        // .test() 는 괄호속 인자가 정규식을 만족하는지 검사하여 true or false 값을 반환한다.
        if (/[0-9a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣]/.test(str[i])) {
          // true 라면, 변수를 true로 만들어준다.
          // 하나라도 알파벳이나 숫자가 있다면, 더 이상 검사할 필요가 없기에 return 하는게 효율적이다.
          alphaNumericFound = true;
          return alphaNumericFound;
        }
      }
      // 알파벳 or 숫자가 없었다면 false 값 그대로 return 될 것이다.
      return alphaNumericFound;
    };

    for (let i = 0; i < arr.length; i++) {
      if (isWord(arr[i])) {
        words++;
      }
      return words;
    }
  };

  return (
    <div>
      <div>
        <h1>단어</h1>
      </div>
      <div>
        <h1>글자 수</h1>
      </div>
    </div>
  );
};

export default Result;
