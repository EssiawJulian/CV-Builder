import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const ResumeDownload = ({ setResumeInfo }) => {
  const downloadPDF = () => {
    const element = document.querySelector(".resume-cnt");
    if (!element) {
      alert("Resume content not found!");
      return;
    }

    html2canvas(element, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("resume.pdf");
    });
  };

  return (
    <>
      <button className="downloadButton" onClick={downloadPDF}>
        Download as PDF
      </button>
    </>
  );
};



export { ResumeDownload };
