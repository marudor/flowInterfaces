var jsonString = '';
process.stdin.on('data', function(d) {
  jsonString += d;
});
process.stdin.on('end', function() {
  var res = JSON.parse(jsonString);
  if (res.expressions.uncovered_count > 0) {
    console.log('uncovered lines:', res.expressions.uncovered_locs);
  }
  // should be 0 uncovered lines
  process.exit(res.expressions.uncovered_count);
});
