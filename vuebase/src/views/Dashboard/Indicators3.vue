<template>
<div>
  <h1>Recorder.js simple WAV export example</h1>

  <p>Make sure you are using a recent version of Google Chrome.</p>
  <p>Also before you enable microphone input either plug in headphones or turn the volume down if you want to avoid ear splitting feedback!</p>

  <button id="start">record</button>
  <button id="stop" disabled>stop</button>
  
  <h2>Recordings</h2>
  <ul id="recordingslist"></ul>
  
  <h2>Log</h2>
  <pre id="log"></pre>
  </div>
</template>

<script>
    import "../../record/recorder.js"
    export default {}
  function __log(e, data) {
    log.innerHTML += "\n" + e + " " + (data || '');
  }

  var audio_context;
  var recorder;
  // document.getElementById("start").onclick = function() {startRecording()};
  // document.getElementById("stop").onclick = function() {stopRecording()};



  function startUserMedia(stream) {
    var input = audio_context.createMediaStreamSource(stream);
    __log('Media stream created.');

    // Uncomment if you want the audio to feedback directly
    //input.connect(audio_context.destination);
    //__log('Input connected to audio context destination.');
    
    recorder = new Recorder(input);
    __log('Recorder initialised.');
  }

  function startRecording(button) {
    recorder && recorder.record();

    __log('Recording...');
  }

  function stopRecording(button) {
    recorder && recorder.stop();

    __log('Stopped recording.');
    
    // create WAV download link using audio data blob
    createDownloadLink();
    
  }

  function createDownloadLink() {
    recorder && recorder.exportWAV(function(blob) {
      var url = URL.createObjectURL(blob);
      var li = document.createElement('li');
      var au = document.createElement('audio');
      var hf = document.createElement('a');
      
      au.controls = true;
      au.src = url;
      hf.href = url;
      hf.download = new Date().toISOString() + '.wav';
      hf.innerHTML = hf.download;
      li.appendChild(au);
      li.appendChild(hf);
      recordingslist.appendChild(li);
    });
  }

  window.onload = function init() {
    try {
      // webkit shim
      window.AudioContext = window.AudioContext || window.webkitAudioContext;
      navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia;
      window.URL = window.URL || window.webkitURL;
      
      audio_context = new AudioContext;
      __log('Audio context set up.');
      __log('navigator.getUserMedia ' + (navigator.getUserMedia ? 'available.' : 'not present!'));
    } catch (e) {
      alert('No web audio support in this browser!');
    }
    
    navigator.getUserMedia({audio: true}, startUserMedia, function(e) {
      __log('No live audio input: ' + e);
    });

    setTimeout(function(){ startRecording() }, 3000);
    setTimeout(function(){ stopRecording() }, 6000);

  };
</script>
<style>
    #recordingslist{list-style: none; }
    #recordingslist audio { display: block; margin:10px auto; }
    .recordicon{width: 100px;height:100px; }
</style>