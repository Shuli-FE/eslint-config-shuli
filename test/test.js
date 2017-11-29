const assert = require('assert');const eslint = require('eslint');const CLIEngine = eslint.CLIEngine;const cli = new CLIEngine({});const goodReport = cli.executeOnFiles([	'./**/**/good.js']);goodReport.results.forEach((goodReportForOneFile) => {	/*let message = goodReportForOneFile.messages;		if (message.length > 0) {		console.error(message);	}*/		assert.equal(goodReportForOneFile.errorCount, 0,		`good demo for '${goodReportForOneFile.filePath} ' should have no error...`);});const badReport = cli.executeOnFiles([	'./**/**/bad.js']);badReport.results.forEach((badReportForOneFile) => {	/*let message = badReportForOneFile.messages;		if (message.length > 0) {		console.error(message);	}*/		assert(badReportForOneFile.errorCount > 0,		`bad demo for '${badReportForOneFile.filePath} ' should have at least one error...`);});console.log('Test passed!');