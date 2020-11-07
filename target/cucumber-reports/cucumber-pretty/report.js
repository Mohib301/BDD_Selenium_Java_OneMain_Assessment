$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/SearchProduct.feature");
formatter.feature({
  "line": 1,
  "name": "Customer want to search for a product and open it\u0027s quick look overlay",
  "description": "",
  "id": "customer-want-to-search-for-a-product-and-open-it\u0027s-quick-look-overlay",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6008991000,
  "error_message": "io.github.bonigarcia.wdm.WebDriverManagerException: io.github.bonigarcia.wdm.WebDriverManagerException: Error HTTP 503 executing GET http://npm.taobao.org/mirrors/chromedriver HTTP/1.1\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:725)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:548)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:722)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:548)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.setup(WebDriverManager.java:260)\r\n\tat stepDefinitions.Initializer.beforeHooks(Initializer.java:19)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\nCaused by: io.github.bonigarcia.wdm.WebDriverManagerException: Error HTTP 503 executing GET http://npm.taobao.org/mirrors/chromedriver HTTP/1.1\r\n\tat io.github.bonigarcia.wdm.HttpClient.execute(HttpClient.java:165)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.getDriversFromMirror(WebDriverManager.java:993)\r\n\tat io.github.bonigarcia.wdm.ChromeDriverManager.getDrivers(ChromeDriverManager.java:83)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.filterCandidateUrls(WebDriverManager.java:741)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:534)\r\n\t... 41 more\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 5,
  "name": "Customer should be able to see the exact same clicked product on the quick look overlay",
  "description": "",
  "id": "customer-want-to-search-for-a-product-and-open-it\u0027s-quick-look-overlay;customer-should-be-able-to-see-the-exact-same-clicked-product-on-the-quick-look-overlay",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Regression_002"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Customer should Search field takes to the results page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Customer should see Below the product\u0027s image display the quick look link",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Customer should Click the quick look link show the product overlay",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Customer should have the same name and price as the product in the overlay",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchProductStepDefinitions.customer_should_Search_field_takes_to_the_results_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchProductStepDefinitions.customer_should_see_Below_the_product_s_image_display_the_quick_look_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchProductStepDefinitions.customer_should_Click_the_quick_look_link_show_the_product_overlay()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchProductStepDefinitions.customer_should_have_the_same_name_and_price_as_the_product_in_the_overlay()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 37400,
  "status": "passed"
});
});