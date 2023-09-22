window.extAsyncInit = function() {
  // the Messenger Extensions JS SDK is done loading 
  MessengerExtensions.getContext('269582959293477', 
  function success(thread_context){
    // success
    $("#psid").val(thread_context.psid);
    console.log(thread_context.psid);
  },
  function error(err){
    // error
    $("#psid").val(senderID);
    console.log(senderID);
    
  }
);
};



function handleSaveBtn() { // Pass psid as a parameter
  // Assuming you have a server endpoint to send the 'foods' data to.
  const serverEndpoint = '/setup-webview';
  // Prepare the data to send to the server
  const requestData = {
    psid: $("#psid").val(),
    foods: foods, // Assuming 'foods' is an object with item data as you've defined
  };

  // Make an HTTP POST request to the server
  fetch(serverEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestData),
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle the response from the server as needed
      console.log(data);
    })
    .catch((error) => {
      // Handle errors
      console.error(error);
    });

  // Close the webview when the request is initiated
  MessengerExtensions.requestCloseBrowser(
    function success() {
      // Webview closed
    },
    function error(err) {
      // An error occurred while closing the webview
      console.log(err);
    }
  );
}
