import "@/styles/go-top.scss";

function GoTop() {
  return (
    <>
      {
        <button
          className="scroll-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Yukarı Çık
        </button>
      }
    </>
  );
}

export default GoTop;
