# Implementing Chain Of Responsibility

For this scenario, we'll have a command line app that processes messages and sends them to the recipient.

In a new playground, start by adding the `Message` struct. It holds info such as who is sending the message, who is it sent to and the subject line.

```swift
struct Message {
    let from: String
    let to: String
    let subject: String
}
```

Also add these two classes that process a Message object before transmitting it.

```swift
class LocalTransmitter  {
    func sendMessage(message: Message) {
        print("Message to \(message.to) sent locally")
    }
}

class RemoteTransmitter  {
    func sendMessage(message: Message) {
        print("Message to \(message.to) sent remotely")
    }
}
```

Include a few messages below everything you've added so far:

```swift
let messages = [
    Message(from: "adriana@ms.com", to: "mitchell@ms.com", subject: "MOB Courses"),
    Message(from: "adriana@ms.com", to: "jess@students.com", subject: "TA Updates"),
    Message(from: "ashu@ms.com", to: "all@ms.com", subject: "Priority: All-Hands Meeting")
]
```

Now process the messages based on this business rule:
- Messages are sent locally if it happens within a company. This means their email addresses end the same.
- Messages are sent remotely if they are sent to someone outside the company. This means their email addresses end different.

```swift
// Creating the transmitter
let localT = LocalTransmitter()
let remoteT = RemoteTransmitter()

// Processing each message
for msg in messages {
    // TODO: Use the business rules to code this logic
}
```

<!--
for msg in messages {
    let splitFrom = msg.from.components(separatedBy: "@")
    let splitTo = msg.to.components(separatedBy: "@")

    if splitTo[1] == splitFrom [1] {
        localT.sendMessage(message: msg)
    }else{
        remoteT.sendMessage(message: msg)
    }
}
-->

If you have the right logic inside the loop and run the playground, you should be looking at something like this:

```swift
Message to mitchell@ms.com sent locally
Message to jess@students.com sent remotely
Message to all@ms.com sent locally
```

So far everything looks ok. The problem comes when we start adding more transmitters. Let's add a new one. That comes with a new business rule:

- Messages are sent as priority if they have the word "Priority" as the first word in the subject line.

```swift
class PriorityTransmitter  {
    func sendMessage(message: Message) {
        print("Message to \(message.to) sent as priority")
    }
}
```

What needs to change in the current solution to include this?

- Add the new transmitter instance.
- Modify the logic inside the for loop.

Give it a try and add these changes.

It's time to add the CoR implementation. Think about how right now your client or calling component needs to make the logic and know about all these transmitter classes to know how to process messages. The goal of the pattern is to hide some implementation details and handle what class should process the message. We'll use OOP to help out this time.

Add a new class below your Message struct.

```swift
class Transmitter {
    var nextLink: Transmitter?
    required init() {}
    func sendMessage(message:Message) {
        if (nextLink != nil) {
            nextLink!.sendMessage(message: message)
        } else {
            print("End of chain reached. Message not sent")
        }
    }

    class func matchEmailSuffix(message:Message) -> Bool {
      // TODO: Refactor time. Put your logic used before in this new method
    }

    class func createChain() -> Transmitter? {
        let transmitterClasses:[Transmitter.Type] = [ PriorityTransmitter.self, LocalTransmitter.self, RemoteTransmitter.self
        ]
        var link:Transmitter?
        for tClass in transmitterClasses.reversed() {
            let existingLink = link
            link = tClass.init()
            link?.nextLink = existingLink
        }
        return link
    }
}
```

The `createChain` method is a helper method that will link the classes available. Inside it looks something like: Priority -> Local -> Remote. It starts with the last link and works back through the array, creating them and setting the relationships between them. This makes it easier to add new transmitters in the future,

Now refactor your three Transmitters to be a subclass of `Transmitter`. They still handle some logic, but it's considerably less now. Here's what they look like:

```swift
class LocalTransmitter: Transmitter  {
    override func sendMessage(message: Message) {
        if (Transmitter.matchEmailSuffix(message: message)) {
            print("Message to \(message.to) sent locally")
        } else {
            super.sendMessage(message: message);
        }
    }
}

class RemoteTransmitter: Transmitter {
    override func sendMessage(message: Message) {
        if (!Transmitter.matchEmailSuffix(message: message)) {
            print("Message to \(message.to) sent remotely")
        } else {
            super.sendMessage(message: message)
        }
    }
}


class PriorityTransmitter: Transmitter {
    override func sendMessage(message: Message) {
        if (message.subject.hasPrefix("Priority")) {
            print("Message to \(message.to) sent as priority")
        } else {
            super.sendMessage(message: message)
        }
    }
}
```

You are almost done. You should be able to refactor how you used to create transmitters and process messages into:

```swift
if let chain = Transmitter.createChain() {
    for msg in messages {
        chain.sendMessage(message: msg)
    }
}
```

and see this in your console:

```swift
Message to mitchell@ms.com sent locally
Message to jess@students.com sent remotely
Message to all@ms.com sent as priority
```

If you do, congrats! you just implemented CoR. 🎉

Let the instructor know if you need help finishing this activity.
