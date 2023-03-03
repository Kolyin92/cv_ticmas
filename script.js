function generatePDF() {
  const element = document.getElementById("cv");

  html2pdf().from(element).save();
}
