# Documentation via Docsify

## Agenda

1. Learning Objectives
1. Activity: Custom API (25 minutes)
1. Documentation Driven Development (15 minutes)
1. BREAK (10 minutes)
1. In Class Activity: Docsify (30 Minutes)

## Learning Objectives

1. Define what Document Driven Development means with regard to software engineering.
2. Practice using Document Driven Development in conjunction with Docsify in order to kick off the Custom API project.
3. Deploy a live, autogenerated documentation website on Github Pages.

## Go over Homework (15 minutes)

Go over the [TDD/BDD homework](https://github.com/make-school-labs/tdd-bdd-challenge) and answer any questions.

## Activity: Custom API (25 minutes)

### Brainstorm APIs (10 minutes)

Go to the [Fun API List](https://apilist.fun/) and browse the available APIs. Choose your top 3 favorites, and explore their documentation pages.

Share your top 3 favorites with a partner.

### Fill out Worksheet (15 minutes)

Fill out the [Custom API Worksheet](https://docs.google.com/document/d/1WP4qD618oiUj_i64ihsw99XNueN4ZOqMw12HoE89QsU/edit) to get started on your project idea!

## Documentation Driven Development (15 minutes)

### Philosophy

1. From a user's perspective: if a **feature is not documented**, then it **doesn't exist**.
1. If a feature is **documented incorrectly**, then it's **broken**.

#### Strategy

* **Document the feature first**. Figure out how you're going to describe the feature to users.
  * **Remember**: if it's not documented, it doesn't exist.
  * Documentation is the **best way to define a feature**; without it, how will the user know a feature exists?
* Whenever possible, **review documentation with users _before_ ANY development** begins.
* Once documentation has been written, commence development. TDD is preferred.
* Unit tests should be written that test the features as described by the documentation.
  * If **functionality no longer aligns with the test, the test should fail**.
* When a feature is being modified, it should be **modified documentation-first**.
* When **docs are modified, tests are modified**. No exceptions.
* **Documentation and software** should both be **versioned**:
  * **Versions should match**: someone working with an old version of your software still needs to locate and use the proper documentation.

#### Order of Operations

1. Write docs
2. Get feedback
3. TDD (tests fully align with documentation)
4. Push features live
5. Test live functionality
6. Publish documentation
7. Increment versions
8. Deliver feature to users

## BREAK (10 minutes)

## In Class Activity: Docsify (30 Minutes)

### Everyone Do: Code With Me

Using the [docsify Quick Start guide](https://docsify.now.sh/quickstart), instructor will present a live demonstration of a fresh `docsify` integration, step-by-step, allowing students enough time between steps to create their own working documentation website for a sample project.

### Students Do: Custom API Project

Create a documentation site for the Custom Api you designed in the first half of class. This will be the basis for your [final project](Projects/02-Custom-API-Project.md).

## Wrap-Up

Write documentation for your [Custom API Project](Projects/02-Custom-API-Project.md) based on what we learned in class today. You'll turn in your worksheet, documentation site, and GitHub Pages site via Gradescope.

Fill out our [Vibe Check form](https://make.sc/bew1.3-vibe-check) with any feedback you have for the class.

## Additional Resources

* [docsify](https://docsify.js.org)