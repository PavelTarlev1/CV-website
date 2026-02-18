import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const exportToPDF = async (
  element: HTMLElement,
  theme: any,
  setOpenSections: (sections: any) => void,
  setOpenProjects: (projects: any) => void,
  setIsExporting: (value: boolean) => void
) => {
  if (!element) return;
  
  setIsExporting(true);
  
  try {
    // Temporarily expand all sections for PDF
    setOpenSections({
      about: true,
      languages: true,
      hobbies: true
    });
    
    setOpenProjects({
      altice: true,
      dbs: true,
      wpx: true
    });
    
    // Small delay to ensure sections are expanded
    await new Promise(resolve => setTimeout(resolve, 100));
    
    const canvas = await html2canvas(element, {
      scale: 2,
      backgroundColor: theme.bg,
      logging: false,
      windowWidth: 1200,
      allowTaint: false,
      useCORS: true
    });
    
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'px',
      format: [canvas.width * 0.75, canvas.height * 0.75]
    });
    
    pdf.addImage(imgData, 'PNG', 0, 0, canvas.width * 0.75, canvas.height * 0.75);
    pdf.save('Pavel_Tarlev_CV.pdf');
  } catch (error) {
    console.error('Error generating PDF:', error);
    alert('There was an error generating the PDF. Please try again.');
  } finally {
    setIsExporting(false);
  }
};