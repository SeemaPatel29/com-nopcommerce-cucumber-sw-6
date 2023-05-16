@sanity @regression
Feature: TopMenu
  As user I want to navigate to selected menu page

  Scenario Outline: User should verify page navigation
    Given I am on homepage
    When I click on tab menu from "<Topmenu tab>"
    Then I navigate to computer page  "<Navigate Page>"
    Examples:
      | Topmenu tab       | Navigate Page     |
      | Computers         | Computers         |
      | Electronics       | Electronics       |
      | Apparel           | Apparel           |
      | Digital downloads | Digital downloads |
      | Books             | Books             |
      | Jewelry           | Jewelry           |
      | Gift Cards        | Gift Cards        |
