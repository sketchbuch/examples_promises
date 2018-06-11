let preloadImg = path => {
  return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve({ path , error: false });
      img.onerror = () => reject({ path , error: true });

      // Could also just resolve errors as all we are doing is preloading.
      // img.onerror = () => resolve({ path , error: true });

      img.src = path;
  });
}

preloadImg('https://ichef.bbci.co.uk/news/624/cpsprodpb/121F2/production/_101962247_mediaitem101962246.jpg')
  .then(response => {
    console.log('success', response);
  })
  .catch(response => {
    console.log('error', response);
  });