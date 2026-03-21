export const handleDownloadPDF = (pdfUrl, name) => {
    if (pdfUrl) {
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = `${name}-brochure.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
};
