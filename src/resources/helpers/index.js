const downloadAsFile = (data, filename="report.csv") => {
    let blob = new Blob([data], { type: 'application/octet-stream' });
    let blobURL = window.URL.createObjectURL(blob);
    let tempLink = document.createElement('a');
    tempLink.href = blobURL;
    tempLink.setAttribute('download', filename);
    tempLink.setAttribute('target', '_blank');
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
}

export {
    downloadAsFile
}