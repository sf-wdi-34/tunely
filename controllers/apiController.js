// controllers/apiController.js
// IT TAKES IN A REQUEST AND RESPONSE AND IS ALOT LIKE A REQUEST HANDLER.
// A CALLBACK FOR OUR FUNCITONS. THIS IS AN EXAMPLE OF TAKING A CALLBACK FUNCITON
// AND MOVE IT INTO ANOTHER FILE
function index(req, res) {
  res.json({
    message: 'Welcome to tunely!',
    documentation_url: 'https://github.com/sf-wdi-labs/tunely',
    base_url: 'localhost:3000',
    endpoints: [
      {
        method: 'GET', path: '/api', description: 'Describes available endpoints'
      }
    ]
  });
}

module.exports = {
  index: index
}
