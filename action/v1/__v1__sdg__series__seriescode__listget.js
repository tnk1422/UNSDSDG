module.exports = {

    name: "__v1__sdg__series__seriescode__listget",

    title: "Returns the series information",

    version: "v1",

    description: "sample description",
    //Added after creating the Action from swagger
    mock_input: {

    },
    input: {
        title: "__v1__sdg__series__seriescode__listget",
        type: "object",
        properties: {
            "seriesCode": {
                "title": "seriesCode",
                "displayTitle": "SeriesCode",
                "type": "string",
                "description": "SDMX code for that series",
                "required": true,
                "minLength": 1
            },
            "allreleases": {
                "title": "allreleases",
                "displayTitle": "Allreleases",
                "type": "boolean",
                "description": "Include older releases",
                "required": true,
                "minLength": 1
            }
        }
    },

    output: {
        title: "output",
        type: "object",
        properties: {
            "goal": {
                "title": "goal",
                "displayTitle": "Goal",
                "type": "string",
                "description": "Gets or Sets Goal"
            },
            "target": {
                "title": "target",
                "displayTitle": "Target",
                "type": "string",
                "description": "Gets or Sets Code"
            },
            "code": {
                "title": "code",
                "displayTitle": "Code",
                "type": "string",
                "description": "Gets or Sets Code"
            },
            "description": {
                "title": "description",
                "displayTitle": "Description",
                "type": "string",
                "description": "Gets or Sets Description"
            },
            "tier": {
                "title": "tier",
                "displayTitle": "Tier",
                "type": "string",
                "description": "Gets or Sets Tier"
            },
            "uri": {
                "title": "uri",
                "displayTitle": "Uri",
                "type": "string",
                "description": "Gets or Sets URI"
            },
            "series": {
                "title": "series",
                "displayTitle": "Series",
                "type": "array",
                "description": "Gets or Sets Series",
                "items": {
                    "title": "Item",
                    "type": "object",
                    "properties": {
                        "goal": {
                            "title": "goal",
                            "displayTitle": "Goal",
                            "type": "array",
                            "description": "Gets or Sets Goal",
                            "items": {
                                "type": "string",
                                "title": "goal",
                                "description": ""
                            }
                        },
                        "target": {
                            "title": "target",
                            "displayTitle": "Target",
                            "type": "array",
                            "description": "Gets or Sets Target",
                            "items": {
                                "type": "string",
                                "title": "target",
                                "description": ""
                            }
                        },
                        "indicator": {
                            "title": "indicator",
                            "displayTitle": "Indicator",
                            "type": "array",
                            "description": "Gets or Sets Indicator",
                            "items": {
                                "type": "string",
                                "title": "indicator",
                                "description": ""
                            }
                        },
                        "release": {
                            "title": "release",
                            "displayTitle": "Release",
                            "type": "string",
                            "description": "Gets or Sets Release"
                        },
                        "code": {
                            "title": "code",
                            "displayTitle": "Code",
                            "type": "string",
                            "description": "Gets or Sets Code"
                        },
                        "description": {
                            "title": "description",
                            "displayTitle": "Description",
                            "type": "string",
                            "description": "Gets or Sets Description"
                        },
                        "uri": {
                            "title": "uri",
                            "displayTitle": "Uri",
                            "type": "string",
                            "description": "Gets or Sets URI"
                        }
                    }
                }
            }
        }
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
            method: "get",
            headers: {}
        };
        option.headers['content-type'] = "application/json";
        option.json = true;
        option.qs = {};
        if (input["allreleases"]) option.qs["allreleases"] = input["allreleases"];


        option.url = config.url + "/v1/sdg/Series/"+input.seriesCode+"/List";

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