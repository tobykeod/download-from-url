// Click button to download
function downoadPDF() {
  var file_url = 'http://www.africau.edu/images/default/sample.pdf';
  download(file_url);
}

// Downlaod from URL function
function download(url) {
  var filename = url.substring(file_url.lastIndexOf('/') + 1);

  fetch(url).then(function (t) {
    return t.blob().then((b) => {
      var a = document.createElement("a");
      a.href = URL.createObjectURL(b);
      a.setAttribute("download", filename);
      a.click();
    });
  });
}
