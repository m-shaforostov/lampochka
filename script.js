jQuery(function($) {
  setTimeout(function() {
    navigator.bluetooth.requestDevice({ acceptAllDevices: true })
    .then(function(device) {
      // Step 2: Connect to it
      console.log(device);
    })
    .catch(function(error) {
      console.error(error);
    })
  }, 2000)
});
