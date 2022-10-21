module.exports = {

    name: "__v1__sdg__feedback__addfeedbackpost",

    title: "Returns int which is the count of feedback for the day",

    version: "v1",

    description: "Returnsintwhichisthecountoffeedbackfortheday",
    //Added after creating the Action from swagger
    mock_input: {

    },
    input: {
        title: "__v1__sdg__feedback__addfeedbackpost",
        type: "object",
        properties: {
            "feedbackType": {
                "title": "feedbackType",
                "displayTitle": "FeedbackType",
                "type": "string",
                "description": "Feedback type (int) e.g 1 - Comments,2 - Questions",
                "required": true,
                "minLength": 1
            },
            "feedbackDescription": {
                "title": "feedbackDescription",
                "displayTitle": "FeedbackDescription",
                "type": "string",
                "description": "Can be any text"
            },
            "firstName": {
                "title": "firstName",
                "displayTitle": "FirstName",
                "type": "string",
                "description": "Name of the person"
            },
            "lastName": {
                "title": "lastName",
                "displayTitle": "LastName",
                "type": "string",
                "description": "Name of the person"
            },
            "email": {
                "title": "email",
                "displayTitle": "Email",
                "type": "string",
                "description": "Email ID of the person"
            },
            "feedbackPage": {
                "title": "feedbackPage",
                "displayTitle": "FeedbackPage",
                "type": "string",
                "description": "This tells the feedback is for which Page e.g Home Or DataAvailability"
            }
        }
    },

    output: {
        title: "output",
        type: "object",
        properties: {}
    },

    execute: async function(input, output) {
        // to access auth info use input.auth , eg: input.auth.username
        // and to return output use output callback like this output(null, { "notice" : "successful"})
        // your code here

        var config = require("./config");
        var authHelper = require('../../authhelper.js');
        var helper = require('../../helper.js');
        var request = require("request");

        input = helper.processBody(input);


        var option = {
            method: "post",
            headers: {}
        };
        option.headers['content-type'] = "application/json";
        option.json = true;
        option.form = {
            'feedbackType': input['feedbackType'],
            'feedbackDescription': input['feedbackDescription'],
            'firstName': input['firstName'],
            'lastName': input['lastName'],
            'email': input['email'],
            'feedbackPage': input['feedbackPage'],
        };
        option.json = false;

        option.url = config.url + `/v1/sdg/Feedback/AddFeedback`;

        try {
            var result = await authHelper(input);
        } catch (err) {
            return output(err);
        }

        if (result.query) {
            option.qs = { ...option.qs,
                ...result.query
            }
        }

        if (result.headers) {
            option.headers = { ...option.headers,
                ...result.headers
            }
        }

        request(option, function(error, response, body) {
            if (error) {
                return output(error);
            }
            if (response.statusCode >= 400) {
                return output(body);
            }
            return output(null, body);
        });

    }
}