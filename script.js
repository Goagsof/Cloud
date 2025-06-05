const serverIp = "http://192.168.1.5:5000"; // Cambialo por la IP de tu PC más adelante

$("#uploadForm").on("submit", function (e) {
  e.preventDefault();
  const files = $("#fileInput")[0].files;

  if (!files.length) {
    alert("Seleccioná al menos un archivo");
    return;
  }

  for (const file of files) {
    const reader = new FileReader();

    reader.onload = function (e) {
      const ext = file.type.startsWith("video") ? "video" : "image";
      const content = `
        <div class="col-6 col-md-4">
          <${ext} src="${e.target.result}" controls class="w-100"></${ext}>
        </div>
      `;
      $("#gallery").append(content);
    };

    reader.readAsDataURL(file);
  }

  // Acá más adelante vamos a hacer la subida real al servidor local
});
