module.exports = {

    name: "__v1__sdg__geoarea__geoareacode__listget",

    title: "Returns the list of Series avialable for that geoArea",

    version: "v1",

    description: "sample description",
    //Added after creating the Action from swagger
    mock_input: {

    },
    input: {
        title: "__v1__sdg__geoarea__geoareacode__listget",
        type: "object",
        properties: {
            "GeoAreaCode": {
                "title": "GeoAreaCode",
                "displayTitle": "GeoAreaCode",
                "type": "string",
                "description": "M49 Code of the area",
                "required": true,
                "minLength": 1
            }
        }
    },

    output: {
        title: "output",
        type: "object",
        properties: {
            "code": {
                "title": "code",
                "displayTitle": "Code",
                "type": "string",
                "description": "Gets or Sets Code"
            },
            "title": {
                "title": "title",
                "displayTitle": "Title",
                "type": "string",
                "description": "Gets or Sets Title"
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
            },
            "targets": {
                "title": "targets",
                "displayTitle": "Targets",
                "type": "array",
                "description": "Gets or Sets Targets",
                "items": {
                    "title": "Item",
                    "type": "object",
                    "properties": {
                        "code": {
                            "title": "code",
                            "displayTitle": "Code",
                            "type": "string",
                            "description": "Gets or Sets Code"
                        },
                        "title": {
                            "title": "title",
                            "displayTitle": "Title",
                            "type": "string",
                            "description": "Gets or Sets Title"
                        },
                        "description": {
                            "title": "description",
                            "displayTitle": "Description",
                            "type": "string",
                            "description": "Gets or Sets Description"
                        },
                        "URI": {
                            "title": "URI",
                            "displayTitle": "URI",
                            "type": "string",
                            "description": "Gets or Sets URI"
                        },
                        "indicators": {
                            "title": "indicators",
                            "displayTitle": "Indicators",
                            "type": "array",
                            "description": "Gets or Sets Indicators",
                            "items": {
                                "title": "Item",
                                "type": "object",
                                "properties": {
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
                                                "release": {
                                                    "title": "release",
                                                    "displayTitle": "Release",
                                                    "type": "string",
                                                    "description": "Gets or Sets Series"
                                                },
                                                "code": {
                                                    "title": "code",
                                                    "displayTitle": "Code",
                                                    "type": "string",
                                                    "description": ""
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
                                                },
                                                "observations": {
                                                    "title": "observations",
                                                    "displayTitle": "Observations",
                                                    "type": "array",
                                                    "description": "Gets or Sets attributes",
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
                                                            "series": {
                                                                "title": "series",
                                                                "displayTitle": "Series",
                                                                "type": "string",
                                                                "description": "Gets or Sets Series"
                                                            },
                                                            "seriesDescription": {
                                                                "title": "seriesDescription",
                                                                "displayTitle": "SeriesDescription",
                                                                "type": "string",
                                                                "description": "Gets or Sets Series Description"
                                                            },
                                                            "seriesCount": {
                                                                "title": "seriesCount",
                                                                "displayTitle": "SeriesCount",
                                                                "type": "string",
                                                                "description": "Gets or Sets Series Count"
                                                            },
                                                            "geoAreaCode": {
                                                                "title": "geoAreaCode",
                                                                "displayTitle": "GeoAreaCode",
                                                                "type": "string",
                                                                "description": "Gets or Sets geoAreaCode"
                                                            },
                                                            "geoAreaName": {
                                                                "title": "geoAreaName",
                                                                "displayTitle": "GeoAreaName",
                                                                "type": "string",
                                                                "description": "Gets or Sets geoAreaName"
                                                            },
                                                            "timePeriodStart": {
                                                                "title": "timePeriodStart",
                                                                "displayTitle": "TimePeriodStart",
                                                                "type": "number",
                                                                "description": "Gets or Sets timePeriod Start"
                                                            },
                                                            "value": {
                                                                "title": "value",
                                                                "displayTitle": "Value",
                                                                "type": "string",
                                                                "description": "Gets or Sets Value"
                                                            },
                                                            "valueType": {
                                                                "title": "valueType",
                                                                "displayTitle": "ValueType",
                                                                "type": "string",
                                                                "description": "Gets or Sets ValueType"
                                                            },
                                                            "time_detail": {
                                                                "title": "time_detail",
                                                                "displayTitle": "Time_detail",
                                                                "type": "string",
                                                                "description": "Gets or Sets TimeDetail"
                                                            },
                                                            "timeCoverage": {
                                                                "title": "timeCoverage",
                                                                "displayTitle": "TimeCoverage",
                                                                "type": "string",
                                                                "description": "Gets or Sets TimeCoverage"
                                                            },
                                                            "upperBound": {
                                                                "title": "upperBound",
                                                                "displayTitle": "UpperBound",
                                                                "type": "string",
                                                                "description": "Gets or Sets UpperBound"
                                                            },
                                                            "lowerBound": {
                                                                "title": "lowerBound",
                                                                "displayTitle": "LowerBound",
                                                                "type": "string",
                                                                "description": "Gets or Sets LowerBound"
                                                            },
                                                            "basePeriod": {
                                                                "title": "basePeriod",
                                                                "displayTitle": "BasePeriod",
                                                                "type": "string",
                                                                "description": "Gets or Sets BasePeriod"
                                                            },
                                                            "source": {
                                                                "title": "source",
                                                                "displayTitle": "Source",
                                                                "type": "string",
                                                                "description": "Gets or Sets Source"
                                                            },
                                                            "geoInfoUrl": {
                                                                "title": "geoInfoUrl",
                                                                "displayTitle": "GeoInfoUrl",
                                                                "type": "string",
                                                                "description": "Gets or Sets GeoInfoUrl"
                                                            },
                                                            "footnotes": {
                                                                "title": "footnotes",
                                                                "displayTitle": "Footnotes",
                                                                "type": "array",
                                                                "description": "Gets or Sets Footnotes",
                                                                "items": {
                                                                    "type": "string",
                                                                    "title": "footnotes",
                                                                    "description": ""
                                                                }
                                                            },
                                                            "attributes": {
                                                                "title": "Attributes",
                                                                "type": "string",
                                                                "format": "textarea",
                                                                "description": ""
                                                            },
                                                            "dimensions": {
                                                                "title": "Dimensions",
                                                                "type": "string",
                                                                "format": "textarea",
                                                                "description": ""
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
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


        option.url = config.url + "/v1/sdg/GeoArea/"+input.GeoAreaCode+"/List";

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