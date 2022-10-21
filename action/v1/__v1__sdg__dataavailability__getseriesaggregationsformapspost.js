module.exports = {

    name: "__v1__sdg__dataavailability__getseriesaggregationsformapspost",

    title: "Returns list of data for all series for specified goalId",

    version: "v1",

    description: "ReturnslistofdataforallseriesforspecifiedgoalId",
    //Added after creating the Action from swagger
    mock_input: {

    },
    input: {
        title: "__v1__sdg__dataavailability__getseriesaggregationsformapspost",
        type: "object",
        properties: {
            "dataPointType": {
                "title": "dataPointType",
                "displayTitle": "DataPointType",
                "type": "string",
                "description": "Data points for country (int) e.g 1 -Data for atleast 1 year since 2015,2-Data for atleast 2 years since 2015,3-Data for at least two years since 2015 and at least two years before 2015",
                "required": true,
                "minLength": 1
            },
            "natureOfData": {
                "title": "natureOfData",
                "displayTitle": "NatureOfData",
                "type": "string",
                "description": "Nature of data (string) e.g {'All':All,'C':Country Data,'CNA':Country data and adjusted country data}"
            },
            "goalId": {
                "title": "goalId",
                "displayTitle": "GoalId",
                "type": "string",
                "description": "Goal Id e.g. 1",
                "required": true,
                "minLength": 1
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
            'dataPointType': input['dataPointType'],
            'natureOfData': input['natureOfData'],
            'goalId': input['goalId'],
        };
        option.json = false;

        option.url = config.url + `/v1/sdg/DataAvailability/GetSeriesAggregationsForMaps`;

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