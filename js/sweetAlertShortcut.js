function alertMeme(imgsrc, tittleText, text){
    Swal.fire({
        title: tittleText,
        text: text,
        imageUrl: imgsrc,
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
    });
  }