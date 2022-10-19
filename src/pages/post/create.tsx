import axios from "axios";
import React, { FormEvent, useState } from "react";
import { Post } from "../../types";

const CratePost = () => {
  const [body, setBody] = useState("");
  const [words, setWords] = useState<Post[]>([]);

  const submitPost = async (e: FormEvent) => {
    e.preventDefault();
    const data = await axios
      .post<Post[]>(
        "http://ec2-52-79-108-130.ap-northeast-2.compute.amazonaws.com:8080/analysis/wordCount",
        {
          content: body,
        }
      )
      .then((res) => res.data);
    console.log(data);
    setWords(data);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
        }}
      >
        <div style={{ width: "46%" }}>
          <h1>포스트 생성하기</h1>
          <form onSubmit={submitPost}>
            <textarea
              rows={20}
              placeholder="Your article will be here."
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
            <div>
              <button>제출하기</button>
            </div>
          </form>
        </div>

        <div style={{ width: "46%" }}>
          <h1>단어들</h1>
          {words.length > 0 ? (
            <table style={{ width: "80%" }}>
              <thead
                style={{
                  backgroundColor: "#ddd",
                }}
              >
                <th style={{ padding: "8px" }}>단어</th>
                <th style={{ padding: "8px" }}>횟수</th>
              </thead>
              <tbody style={{ textAlign: "center" }}>
                {words.map((data, index) => (
                  <tr key={index}>
                    <td style={{ padding: "4px" }}>{data.word}</td>
                    <td style={{ padding: "4px" }}>{data.count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div>없음</div>
          )}
        </div>
      </div>
    </>
  );
};

export default CratePost;
