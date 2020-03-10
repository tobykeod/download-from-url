var file_url = 'http://www.africau.edu/images/default/sample.pdf';
var file_name = file_url.substring(file_url.lastIndexOf('/') + 1);

download(file_url, file_name);

function download(url, filename) {
  fetch(url).then(function (t) {
    return t.blob().then((b) => {
      var a = document.createElement("a");
      a.href = URL.createObjectURL(b);
      a.setAttribute("download", filename);
      a.click();
    });
  });
}
