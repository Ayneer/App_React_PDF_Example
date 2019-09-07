import React from 'react';
import './App.css';
import Pdf from './PDF/PDFService';
import ChartC from './chart/chart';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const bodyRef = React.createRef();

class App extends React.Component {

  generarPDF() {
    Pdf.createPdf(bodyRef.current);
  }

  printDocument() {
    const input = document.getElementById('pdf-body');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF("portrait", "mm", "a4");
        pdf.addImage(imgData, 'PNG', -2.5, 0);
        // pdf.output('dataurlnewwindow');
        pdf.save("download.pdf");
      })
      ;
  }

  pdfToHTML() {
    window.print();
  }

  render() {
    return (
      <div className="App">
        <h1>Hellow world!</h1>
        <button type="button" className="btn btn-primary" onClick={this.generarPDF}> Generar PDF</button>
        <button type="button" className="btn btn-primary" onClick={this.printDocument}> Generar PDF 2</button>
        <button type="button" className="btn btn-primary" onClick={this.pdfToHTML}> Generar PDF 3</button>

        <div className="pdf-body" id="pdf-body" ref={bodyRef}>

          <ChartC id={"singlePage"} />

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam reprehenderit harum assumenda earum ad magnam suscipit distinctio, deserunt eum voluptatem pariatur sapiente nam molestias dolorum repudiandae nulla ex ut sint?</p>
        </div>

      </div>
    );
  }
}


export default App;
