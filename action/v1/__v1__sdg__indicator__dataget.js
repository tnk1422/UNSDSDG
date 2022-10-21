module.exports = {

    name: "__v1__sdg__indicator__dataget",

    title: "Returns a list of paginated observations",

    version: "v1",

    description: "sample description",
    //Added after creating the Action from swagger
    mock_input: {

    },
    input: {
        title: "__v1__sdg__indicator__dataget",
        type: "object",
        properties: {
            "indicator": {
                "title": "indicator",
                "displayTitle": "Indicator",
                "type": "array",
                "description": "List of codes for the indicators we are queying",
                "items": {
                    "type": "string",
                    "title": "indicator",
                    "description": ""
                }
            },
            "areaCode": {
                "title": "areaCode",
                "displayTitle": "AreaCode",
                "type": "array",
                "description": "List of M49 values",
                "items": {
                    "type": "string",
                    "title": "areaCode",
                    "description": ""
                }
            },
            "timePeriod": {
                "title": "timePeriod",
                "displayTitle": "TimePeriod",
                "type": "array",
                "description": "List of years from which we want data eg: [\"2000\",\"2010\"]",
                "items": {
                    "type": "number",
                    "title": "timePeriod",
                    "description": ""
                }
            },
            "dimensions": {
                "title": "dimensions",
                "displayTitle": "Dimensions",
                "type": "string",
                "description": "Array of name - values eg: [{name:\"Age\",values:[\"15+\",\"15-24\"]}]"
            },
            "timePeriodStart": {
                "title": "timePeriodStart",
                "displayTitle": "TimePeriodStart",
                "type": "number",
                "description": "Time series start point"
            },
            "timePeriodEnd": {
                "title": "timePeriodEnd",
                "displayTitle": "TimePeriodEnd",
                "type": "number",
                "description": "Tine sertues end point"
            },
            "page": {
                "title": "page",
                "displayTitle": "Page",
                "type": "string",
                "description": "Page number"
            },
            "pageSize": {
                "title": "pageSize",
                "displayTitle": "PageSize",
                "type": "string",
                "description": "Number of records per page"
            }
        }
    },

    output: {
        title: "output",
        type: "object",
        properties: {
            "size": {
                "title": "size",
                "displayTitle": "Size",
                "type": "string",
                "description": "Gets or Sets Size\r\nThe number of elements in the page"
            },
            "totalElements": {
                "title": "totalElements",
                "displayTitle": "TotalElements",
                "type": "string",
                "description": "Gets or Sets TotalElements\r\nThe total number of elements"
            },
            "totalPages": {
                "title": "totalPages",
                "displayTitle": "TotalPages",
                "type": "string",
                "description": "Gets or Sets totalPages\r\nThe total number of pages"
            },
            "pageNumber": {
                "title": "pageNumber",
                "displayTitle": "PageNumber",
                "type": "string",
                "description": "Gets or Sets pageNumber\r\nThe current page number"
            },
            "attributes": {
                "title": "attributes",
                "displayTitle": "Attributes",
                "type": "array",
                "description": "Gets or Sets attributes",
                "items": {
                    "title": "Item",
                    "type": "object",
                    "properties": {
                        "id": {
                            "title": "id",
                            "displayTitle": "Id",
                            "type": "string",
                            "description": "Gets or Sets id"
                        },
                        "codes": {
                            "title": "codes",
                            "displayTitle": "Codes",
                            "type": "array",
                            "description": "Gets or Sets codeList",
                            "items": {
                                "title": "Item",
                                "type": "object",
                                "properties": {
                                    "code": {
                                        "title": "code",
                                        "displayTitle": "Code",
                                        "type": "string",
                                        "description": "Gets or Sets code"
                                    },
                                    "description": {
                                        "title": "description",
                                        "displayTitle": "Description",
                                        "type": "string",
                                        "description": "Gets or Sets code"
                                    },
                                    "sdmx": {
                                        "title": "sdmx",
                                        "displayTitle": "Sdmx",
                                        "type": "string",
                                        "description": "Gets or Sets code"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "dimensions": {
                "title": "dimensions",
                "displayTitle": "Dimensions",
                "type": "array",
                "description": "Gets or Sets dimensions",
                "items": {
                    "title": "Item",
                    "type": "object",
                    "properties": {
                        "id": {
                            "title": "id",
                            "displayTitle": "Id",
                            "type": "string",
                            "description": "Gets or Sets id"
                        },
                        "codes": {
                            "title": "codes",
                            "displayTitle": "Codes",
                            "type": "array",
                            "description": "Gets or Sets codeList",
                            "items": {
                                "title": "Item",
                                "type": "object",
                                "properties": {
                                    "code": {
                                        "title": "code",
                                        "displayTitle": "Code",
                                        "type": "string",
                                        "description": "Gets or Sets code"
                                    },
                                    "description": {
                                        "title": "description",
                                        "displayTitle": "Description",
                                        "type": "string",
                                        "description": "Gets or Sets code"
                                    },
                                    "sdmx": {
                                        "title": "sdmx",
                                        "displayTitle": "Sdmx",
                                        "type": "string",
                                        "description": "Gets or Sets code"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "data": {
                "title": "data",
                "displayTitle": "Data",
                "type": "array",
                "description": "Gets or Sets data",
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
        if (input["indicator"]) option.qs["indicator"] = input["indicator"];
        if (input["areaCode"]) option.qs["areaCode"] = input["areaCode"];
        if (input["timePeriod"]) option.qs["timePeriod"] = input["timePeriod"];
        if (input["dimensions"]) option.qs["dimensions"] = input["dimensions"];
        if (input["timePeriodStart"]) option.qs["timePeriodStart"] = input["timePeriodStart"];
        if (input["timePeriodEnd"]) option.qs["timePeriodEnd"] = input["timePeriodEnd"];
        if (input["page"]) option.qs["page"] = input["page"];
        if (input["pageSize"]) option.qs["pageSize"] = input["pageSize"];


        option.url = config.url + `/v1/sdg/Indicator/Data`;

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