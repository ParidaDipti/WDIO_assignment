# To execute all tests
$npm run test

# To execute smoke test
$npm run smoke

# To execute regression test
$npm run regression

# To execute test for citi
$npm run citiTests

# To run the test passing the parameter from command line not from package.json scripts section
$npm run wdio --grep="@smoke"
or
$npm run wdio --grep="@regression"
or
$npm run wdio --grep="@citi"

# To view the allure report generated on test complete
$allure open
