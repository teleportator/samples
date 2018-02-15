function createReportReader () {
    return {
        blockedUri: (e) => e["csp-report"]["blocked-uri"],
        documentUri: (e) => e["csp-report"]["document-uri"],
        violatedDirective: (e) => e["csp-report"]["violated-directive"],
        sourceFile: (e) => e["csp-report"]["source-file"]
    };
}

function createReportFilter (reader) {
    return {
        directiveViolation: (e, predicate) => predicate(reader.violatedDirective(e)),
        documentUri: (e, predicate) => predicate(reader.documentUri(e)),
        blockedUri: (e, predicate) => predicate(reader.blockedUri(e)),
        sourceFile: (e, predicate) => predicate(reader.sourceFile(e))
    };
}

var r = createReportReader();
var rf = createReportFilter(r);