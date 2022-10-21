module.exports = {

    name: "__v1__sdg__series__dataexcelpost",

    title: "Returns an Excel file",

    version: "v1",

    description: "sample description",
    //Added after creating the Action from swagger
    mock_input: {

    },
    input: {
        title: "__v1__sdg__series__dataexcelpost",
        type: "object",
        properties: {
            "seriesCodes": {
                "title": "seriesCodes",
                "displayTitle": "SeriesCodes",
                "type": "array",
                "description": "Code for that series",
                "items": {
                    "type": "string",
                    "title": "seriesCodes",
                    "description": ""
                }
            },
            "areaCodes": {
                "title": "areaCodes",
                "displayTitle": "AreaCodes",
                "type": "array",
                "description": "List of M49 values",
                "items": {
                    "type": "string",
                    "title": "areaCodes",
                    "description": ""
                }
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
            }
        }
    },

    output: {
        title: "output",
        type: "object",
        properties: {
            "fileStream": {
                "title": "FileStream",
                "type": "object",
                "properties": {
                    "canRead": {
                        "title": "canRead",
                        "displayTitle": "CanRead",
                        "type": "boolean",
                        "description": ""
                    },
                    "canSeek": {
                        "title": "canSeek",
                        "displayTitle": "CanSeek",
                        "type": "boolean",
                        "description": ""
                    },
                    "canTimeout": {
                        "title": "canTimeout",
                        "displayTitle": "CanTimeout",
                        "type": "boolean",
                        "description": ""
                    },
                    "canWrite": {
                        "title": "canWrite",
                        "displayTitle": "CanWrite",
                        "type": "boolean",
                        "description": ""
                    },
                    "length": {
                        "title": "length",
                        "displayTitle": "Length",
                        "type": "string",
                        "description": ""
                    },
                    "position": {
                        "title": "position",
                        "displayTitle": "Position",
                        "type": "string",
                        "description": ""
                    },
                    "readTimeout": {
                        "title": "readTimeout",
                        "displayTitle": "ReadTimeout",
                        "type": "string",
                        "description": ""
                    },
                    "writeTimeout": {
                        "title": "writeTimeout",
                        "displayTitle": "WriteTimeout",
                        "type": "string",
                        "description": ""
                    }
                }
            },
            "contentType": {
                "title": "contentType",
                "displayTitle": "ContentType",
                "type": "string",
                "description": ""
            },
            "fileDownloadName": {
                "title": "fileDownloadName",
                "displayTitle": "FileDownloadName",
                "type": "string",
                "description": ""
            },
            "lastModified": {
                "title": "lastModified",
                "displayTitle": "LastModified",
                "type": "string",
                "description": ""
            },
            "entityTag": {
                "title": "EntityTag",
                "type": "object",
                "properties": {
                    "tag": {
                        "title": "Tag",
                        "type": "object",
                        "properties": {
                            "buffer": {
                                "title": "buffer",
                                "displayTitle": "Buffer",
                                "type": "string",
                                "description": ""
                            },
                            "offset": {
                                "title": "offset",
                                "displayTitle": "Offset",
                                "type": "string",
                                "description": ""
                            },
                            "length": {
                                "title": "length",
                                "displayTitle": "Length",
                                "type": "string",
                                "description": ""
                            },
                            "value": {
                                "title": "value",
                                "displayTitle": "Value",
                                "type": "string",
                                "description": ""
                            },
                            "hasValue": {
                                "title": "hasValue",
                                "displayTitle": "HasValue",
                                "type": "boolean",
                                "description": ""
                            }
                        }
                    },
                    "isWeak": {
                        "title": "isWeak",
                        "displayTitle": "IsWeak",
                        "type": "boolean",
                        "description": ""
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
            method: "post",
            headers: {}
        };
        option.headers['content-type'] = "application/json";
        option.json = true;
        option.form = {
            'seriesCodes': input['seriesCodes'],
            'areaCodes': input['areaCodes'],
            'timePeriodStart': input['timePeriodStart'],
            'timePeriodEnd': input['timePeriodEnd'],
        };
        option.json = false;

        option.url = config.url + `/v1/sdg/Series/DataExcel`;

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