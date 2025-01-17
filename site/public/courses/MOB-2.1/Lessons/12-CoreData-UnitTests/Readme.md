# Core Data & Unit Tests

## Minute-by-Minute

| **Elapsed** | **Time**  | **Activity**              |
| ----------- | --------- | ------------------------- |
| 0:00        | 0:05      | Objectives                |
| 0:05        | 0:30      | In Class Activity I       |
| 0:35        | 0:15      | Overview                  |
| 0:50        | 0:25      | In Class Activity II      |
| 1:15        | 0:10      | BREAK                     |
| 1:25        | 0:25      | In Class Activity II      |
| TOTAL       | 1:50      |                           |

## Why you should know this

Moving forward with learning about unit testing, it's important to understand the purpose of it and why it's helpful to catch errors early.
There are many modules in an app that can be covered with unit testing, one of them is Core Data. Since we've been learning how to set up the Core Data Stack, this is a good moment to see how we can write unit tests to make sure our Core Data integration works as intended.

## Learning Objectives (5 min)

1. Describe the process to create unit tests.
1. Define the Given, When, Assert approach.
1. Design unit tests for a Core Data integration.
1. Implement mock data and stubs.

## In Class Activity I (30 min)
Before we start writing tests for Core Data. Let's review the basics by testing a simpler component. Refer back to the In-Class Activity I from Lesson 4 - Keychain. And we will write tests to make sure storing and retrieving data works.

This is what your test class for the project should look like:

```swift
import XCTest
@testable import KeychainTesting
//Don't forget to import the library KeychainSwift

class KeychainTestingTests: XCTestCase {

  // For all of the tests we will need an instance of KeychainSwift


    override func setUp() {
        // Put setup code here. This method is called before the invocation of each test method in the class.
    }

    override func tearDown() {
        // Put teardown code here. This method is called after the invocation of each test method in the class.
    }


    func testKeychainGet() {
        // Test if retrieving a value with Keychain works.

    }

    func testKeychainDelete() {
        // Test if deleting a value with Keychain works.

    }

    func testKeychainUpdate() {
       // Test if updating a value with Keychain works, you will need an initial value and compare the new value with the old one.

    }
}
```

As a class, go over the answers after most people are done.

## Unit Testing and Core Data (15 min)

- Using a fake: In memory database (NSInMemoryStoreType)
- Using stubs to create items
- Using a background context

## In Class-Activity II (50 min)

Download [this starter project](https://github.com/amelinagzz/coredata-tests-starter).
When you open it, you'll notice there's no UI for the user to interact with. This is because we'll only focus on testing the functionality of a To Do app. We don't care how it looks like for this exercise.

Take 5-10 min to go over the code you're given to start with. There are comments to help you understand what most method do.

According to the class `ToDoStorageManager` we can create, fetch, save and remove items from the To Do list. These are the things that we need to make sure work well.

#### What you'll need to complete

Write the following tests, try using the **GIVEN, WHEN, ASSERT** methodology.

1. **insertItem()**
 - should return an item<br>
 Example of expected comments in each test:<br>
 ```
 //Given the name & completion status
 //When adding an item
 //Assert the returned item is not nil
 ```
1. **fetchAllItems()**
  - should return correct number of ToDoItems
1. **removeItem()**
  - should remove an item from the database

Stretch Challenges:

1. Practice testing Core Data implementation with the WaterLog app (Lesson 7) of the Friends App (Lesson 6).
1. save()
  - should call `NSManagedContext.save()``
  - This last one needs more code, find the guide of how to go over it in the additional resources section.

## Additional Resources
- [Slides](https://docs.google.com/presentation/d/1rTHXKfNrhZyJu_oZpU1Sl9A0vZ5NI5iS7e9rwFNUnYg/edit?usp=sharing)
- Second activity from [this post](https://medium.com/flawless-app-stories/cracking-the-tests-for-core-data-15ef893a3fee)
- “Core Data by Tutorials.” By Pietro Rea.
