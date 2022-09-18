const path = require('path');

exports.getTrivia = (trwurdy, response, next) => {
    response.sendFile(path.join(_dirname, '..', 'views', 'paul', 'trivia.html'));
}