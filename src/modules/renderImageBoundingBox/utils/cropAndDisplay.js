function cropAndDisplay(vertices  ,  selectedBoundingBox , selected , dataImage , canvas , ctx ) {
      // Set the canvas size to match the cropped region
let width = vertices.x2 -vertices.x1;
let height = vertices.y2 -vertices.y1
      canvas.width = vertices.x2 -vertices.x1;
      canvas.height = vertices.y2 -vertices.y1;
  
      // Draw the cropped region on the canvas
      ctx.drawImage(dataImage,
        vertices.x1, vertices.y1, width, height,
        0, 0, width, height);
      let imgtag = `<div class="cropped-image-wrapper" ><img class="${selected ? 'selected-cropped-image' : ''}" src="${canvas.toDataURL()}" boxid=${vertices.id}></div>`;
      return imgtag
    }
  
export default cropAndDisplay;  