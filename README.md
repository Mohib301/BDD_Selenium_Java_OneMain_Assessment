# BDD.SeleniumWebDriver.Cucumber.Java

Complete Project Descripton and Environment:

 I have used Selenium WebDriver and Java for This project.
The Framework I have worked for this  project is hybrid Framework where I use Cucumber with POM. 
The main components of my current framework are Feature Files, where I write the scenarios, 
I have Step Definitions class where I write my test steps and for Object Repository am used POM( page object Model) design pattern. 
I followed POM because of easy maintenance of codes and if any changes coming to UI elements I can easily refactor in one class.
The way I implemented POM is I have separate java classes for each page of my application and I store elements using WebElement.
and then I write required actions with public methods. I have used @findBy annotations of pageFactory to implement the POM.
I have Test Runner where I run out scenarios using Cucumber Tags. And I have Screenshots Utility class.  
I have used Maven for Build management tool where I store my Required Dependencies and plugins  in POM.xml.
for Reporting parts I used Cucmumber JVM Extent Report.  I used GIT and GIT hub for version control where I pushed my codes here.



Project Descriptions:

This exercise should be done at the following website: www.williams-sonoma.com
1) Add a product to cart
Story Phase
As a customer
I want to go to a product page and add the product to the cart
I should be able to see this product added to cart on shopping cart page
Acceptance Criteria
● Product page shows "Add to cart” button
● When click on "Add to cart” button, add to cart overlay appears
● Checkout button is on the add to cart overlay
● When click on "Checkout" button then shopping cart page is shown
● The product you added to cart should be on shopping cart page
Technical Details
Path to product page and shopping cart page
● Using the flyout menu (menu that appears when you hover a category, e.g.:
(" COOKS’ TOOL "). For that, click on a subcategory(e.g.: " Salt & Pepper Mills" ) on
the menu and choose any product (e.g: “T rudeau Graviti Electric Salt & Pepper Mill
Set, Gunmetal ”)
● Add the product to cart from product page
● Go to shopping cart page by starting checkout
2) See a Product on Quick Look Overlay
Story Phase
As a customer
I want to search for a product and open it's quick look overlay
I should be able to see the exact same clicked product on the quick look overlay
Acceptance Criteria
● Search field takes to the results page
● Below the product's image display the quick look link
● Click the quick look link show the product overlay
● The product clicked should have the same name and price as the product i n the
overlay
Technical Details
Path to Quick Look:
● Using the Search i nput on the top area with text “What are you l ooking for?”,
search for a product (e.g:'fry pan')
● Below the product's image to see the quick look link and click on it





Thanks,
Mohibullah Hafizi
