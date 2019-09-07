import { savePDF } from '@progress/kendo-react-pdf';

class PDFService {
  createPdf = (html) => {
    savePDF(html, { 
      paperSize: 'Letter',
      fileName: 'form.pdf',
      margin: 3
    })
  }
}

const Pdf = new PDFService();
export default Pdf;