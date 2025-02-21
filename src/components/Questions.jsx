import { useState } from "react";
import "./Questions.css";

function Questions() {
  const [data, setData] = useState([
    {
      soru: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper fringilla mauris at sodales.",
      cevap:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulumsemper fringilla mauris at sodales.Lorem ipsum dolor sit amet,consectetur adipiscing elit. Vestibulum semper fringilla mauris atsodales.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper fringilla mauris at sodales.",
      acik: false,
    },
    {
      soru: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper fringilla mauris at sodales.",
      cevap:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulumsemper fringilla mauris at sodales.Lorem ipsum dolor sit amet,consectetur adipiscing elit. Vestibulum semper fringilla mauris atsodales.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper fringilla mauris at sodales.",
      acik: false,
    },
    {
      soru: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper fringilla mauris at sodales.",
      cevap:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulumsemper fringilla mauris at sodales.Lorem ipsum dolor sit amet,consectetur adipiscing elit. Vestibulum semper fringilla mauris atsodales.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper fringilla mauris at sodales.",
      acik: false,
    },
    {
      soru: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper fringilla mauris at sodales.",
      cevap:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulumsemper fringilla mauris at sodales.Lorem ipsum dolor sit amet,consectetur adipiscing elit. Vestibulum semper fringilla mauris atsodales.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper fringilla mauris at sodales.",
      acik: false,
    },
  ]);

  const paragrafAc = (index) => {
    const newData = [...data];
    newData[index].acik = !newData[index].acik;
    setData(newData);
  };

  return (
    <article className="sss">
      <h2>Sıkça Sorulan Sorular</h2>
      {data.map((item, i) => (
        <button key={i} onClick={() => paragrafAc(i)}>
          <div>
            {item.soru}
            <span>{item.acik ? "-" : "+"}</span>
          </div>
          <p className={`cevap ${item.acik ? "acik" : ""}`}>
            <br />
            {item.cevap}
            <br />
            <br />
          </p>{" "}
        </button>
      ))}
    </article>
  );
}

export default Questions;
