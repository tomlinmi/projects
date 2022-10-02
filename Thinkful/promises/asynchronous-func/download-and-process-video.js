//-function download (url) {
    function download (url, callback) {
       console.log(`Start downloading video from ${url} ...`);
    
       setTimeout(() => {
         const fileName = url.split('/').pop()
         console.log(`Video downloaded from ${url} to ${fileName}.`);
        callback(fileName)
       }, 3000);
     }
    
    function process (videoFile) {
      console.log(`Start processing ${videoFile} ...`);
    
      setTimeout(() => {
        console.log(`Video processing complete: ${videoFile}.`);
      }, 4000);
    }
    
    const url = 'https://www.thinkful.com/sync-and-async.mov';
    
   // -const fileName = download(url);
    download(url, process);
    
    //-process(fileName);

    //code to see that other commands are still processed while waiting for the download
    setInterval(() => console.log("some other work is happening here"), 500);