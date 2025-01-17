# FEW 2.4 class 4 - Native Components Part 1

Mobile is the land of small screens in portrait orientation, tall and narrow. This is a different environment from the desktop where screens are large and wide. Building mobile apps require developers to think differently to make applications that work in small spaces.

Touch interaction is also a different experience with it's own set of concerns and solutions. 

## Lesson Video

Follow this lesson lecture in video form: 

https://youtube.com/playlist?list=PLoN_ejT35AEhE6SyoGzrLHPISssRaM-a4

Watch Lesson 06 1 - 3

## Learning Objectives

- Use ListView to display data on mobile (lots of data on a small screen)
- Differentiate ListView and scrollView and their use cases
- Use a FlatList

## A look at the mobile environment

- Mobile traffic up 222% in the last 7 years
- 3.5 Billion smart phone users workd wide
- 70% of YouTube traffic comes from mobile
- 99.3% of all internet users in China go online using their phones
- 70% of all media time is spent on smartphones
- The average internet user checks their phone 58 times per day
- 56% of all internet traffic in 2019 was generated by mobile phones
- 66% of smartphone users are addicted to their phones
- We spend 90% of media time on mobile devices in apps and 10% on the mobile web
- There were 204 billion apps downloads in 2019 worldwide

### Approaching Mobile Design

- Screens are smaller 
	- text needs to be larger ands and easier to read
	- Smaller space limits what you can show
- Interaction
	- Your finger is a large and awkward pointing device
	- Your finger easily covers the thing you are interacting with

### Human Interface Design Guide (HIG)

https://developer.apple.com/design/human-interface-guidelines/

Mobile interfaces have their own UI elements and design systems. 

## ScrollView vs ListView 

Mobile screens are small you'll always be scrolling. There are two ways to handle scrolling.

- Scrolling a **small** amount of content
- Scrolling a **large** amount of content

**tl;dr** For a small amount of content use a ScrollView. For a large amount of content use a ListView or FlatList.

ScrollView scrolls things when the things take up more space than the ScrollView displays.

Why is there a ListView and why would you use one?

The ListView manages a large amount of data. Remember when Steve Jobs said you could have 10,000 songs in your pocket? People thought it was great. There was a developer somewhere that needed to solve the problem of how to scroll through a list of 10,000 items! 

Seriously, imagine creating 10,000 views and loading them in RAM. Sounds like a memory problem. Heck! imagine rendering the pixels that made up a list of table cells where each cell is 40 pixels tall...

That's a 40,000 pixel tall images! If each cell were 320 pixels wide: 

`40 * 320 * 10,000 = 128,000,000`

By comparison the iPhone SE screen is 320 x 568, thats:

`320 * 568 = 181,760`

So with 10,000 table cells listing all of your favorite songs on your iPhone SE you'd need more than 704 screens!

`128,000,000 / 181,760 = 704.2253521127`

What does the ListView do differently? 

The ListView generates enough views to fill the screen. It displays only a subset of data at any moment. As each row view scrolls off the screen it is recycled and populated with new data.

The ListView uses a limited set of views to scroll through an unlimited amount of data. 

## Getting Started 

For these projects you will be using Expo. It is a tool used with React Native. Follow the Guide here: https://docs.expo.io

**tl;dr**

```
npm install --global expo-cli
```

For these examples, you'll be using a data set that has information about cat and dog breeds. 

Initialize a new React Native Project with expo. 

```
expo init by-breed
```

Choose: Blank project.

Then run the project to test it. 

```
cd by-breed
```

Choose **blank** project at the prompt. 

Navigate to the project directory in the terminal with: 

```
cd by-breed
```

Notice the command shown in the terminal. To run your project you can choose any one of these. The project will run in different environments depending on your choice. 

- `yarn start` # you can open iOS, Android, or web from here, or run them directly with the commands below.
- `yarn android`
- `yarn ios`
- `yarn web`

Run your project with: 

```
yarn start
```

This should open a web window showing a QR. You will scan this QR code with Expo to test your app. 

**Note!** I had trouble again with the NodeJS version and had to switch to Node 15. It might also ask to install expo. Follow the instructions in the terminal. 

**What is Expo?**

Expo is an app that runs on your phone that loads your React Native project. You'll use this for development. When you are ready to publish your app you'll do a build. 

To work with Expo you need to install on an iOS or Android device. 

After installing Expo on your mobile device open your phone and scan the QR code that opened in your browser. 

After a moment you should see the app load on your phone. If you have problems connecting to your phone with Expo in the web page, just above the QR code, try switching from LAN to Tunnel. 

Another way to run the project on your desktop is with the iOS or Android simulator. You need to have these installed. The iOS simulator comes with Xcode.

Take a look at the terminal you'll see: 

```
 › Press a │ open Android
 › Press i │ open iOS simulator
 › Press w │ open web
 ```

Pressing `i` should open the iOS simulator (provided you have it installed)

From here editing the code on your desktop should update on your phone! 

## Starting the Project

Once you have created a project and can run it in Expo you're ready to start on the current class project. The goal of this project is to create an for people interested in owning a dog or cat. The app will list cats and dogs and provide information that rates each animal in different categories by breed.

Get the sample files here: https://github.com/Make-School-Labs/few-2-4-by-breed-starter 

**Copy these two files into your project folder.**

- `breeds.js`
- `cat-and-dog-breeds.json`

The `cat-and-dog-breeds.json` file contains all of the data as one larger object. The `breeds.js` has some helper code to turn this object into arrays of cats and dogs.

## Implement ScrollView

- Create a scrollView 
- Add some content 
- Scroll!

**Make a new component `Item.js`.**

Keep things simple at first. Use the View and Text component to display each breed. 

```JS 
import React from 'react'
import { View, Text } from 'react-native'

function Item({ title }) {
	return (
		<View>
			<Text>{title}</Text>
		</View>
	);
}

export default Item
```

**In `App.js` import ScrollView component.**

```JS
import { ScrollView, View, Text } from 'react-native'
```

Then **import the list of cats**, or dogs if you prefer!

```JS
import { cats } from './breeds'
```

The `cats` array contains a list of objects with information about a cat breed. 

One record might look like: 

```JSON
{
	"breed": "Abyssinian",
	"Affectionate with Family": 3,
	"Amount of Shedding": 3,
	"Easy to Groom": 3,
	"General Health": 2,
	"Intelligence": 5,
	"Kid Friendly": 5,
	"Pet Friendly": 5,
	"Potential for Playfulness": 5
}
```

Import the Item component you created. 

```JS
import Item from './Item'
```

**In your `App.js` component** use the `ScrollView` and `map` the list of cats into `Item` components. 

```JSX
<ScrollView>
	{cats.map((item, index) => {
		return <Item title={`${index} ${item.breed}`} />
	})}
</ScrollView>
```

When you get this working you may see that it overlaps the status bar at the top or the 'notch' on newer iPhones. 

You can take this into account by adjusting padding and margin on the ScrollView. This might prove problematic for the range of phones available. Luckily React Native Provides a `SafeAreaView` component that takes care of this for us! 

import `SafeAreaView`

```JS
import { ..., SafeAreaView } from 'react-native'
```

Wrap your `ScrollView` in the `SafeAreaView`. 

```JS
<SafeAreaView>
	<ScrollView>
		...
	</ScrollView>
</SafeAreaView>
```

- https://reactnative.dev/docs/scrollview
- https://reactnative.dev/docs/safeareaview

## Implement FlatList

- Define data 
- Create a FlatList 
- Define props 
	- renderItem
	- keyExtractor

The `FlatFlist` is a component that is used to display large amounts of data in a scrolling list. 

The `FlatList` takes `data` as a prop. Rather than assigning it child components to render you'll give it the `data` instead. 

Why `data`? 

FlatList needs to know how many rows you have to work with. Only a subset of the data will be displayed in the list. FlatList keeps track of the starting and ending indexes that are currently displayed. 

FlatList also takes a prop called `renderItem`. This is a function that returns an item to render.
 
Why `renderItem`?

This function returns an object with the data and returns a React Native Component which displays as the list cell. FlatList will ask us for the cells it needs, we supply the cell from the data and index. 

The Object passed to renderItem includes three keys: 

- `item`: The `data` item for this row
- `index`: the `index` of this row in `data`
- `separators`: An object with properties that can be used to render separators between rows

What's `keyExtractor`? 

Each cell needs a unique id, `keyExtractor` is used for this. `keyExtractor` is a prop that you assign a function to. This function receives the data item and index for the current row from which you will extract the key.

- `item` : The `data` item for this row
- `index` : The `index` of the row in `data`

Use this function to generate unique row ids. 

## ScrollView demo

- Create ScrollView 
- Fill with objects
- Set styles 
- Options 

## FlatList demo

- Look at the data source 
- Import FlatList
- Render a FlatList
- Set props
	- data
	- renderItem 
	- keyExtractor
- Define a Row Component

The data source includes a list of cats and a list of dogs. Each record is an object that inlcudes a breed property, and a list of other properties that rate the `breed` in different areas such as friendliness, Affection, Shedding, Health, etc. Each of these fields is rated with a value of 0 to 5. 

**NOTE!** Not all properties appear with every animal. Only `breed` is guaranteed to appear with each object. 

Create the FlatList component. Add set its props.

- `data` - Set the data source to an array. 
- `renderItem` - A function that returns a Component
	- The `renderItem` function takes an object with the following properties: 
	- `item` - An item from data
	- `index` - the index of the item in data
	- `separators` - An object with properties used for customizing custom separator Components (not used in this example)
 
Set data to an array:

```JSX
<FlatList 
 	data={cats}
/>
```

Here the array contains data items that rendered into rows in the FlatList. 

Set renderItem: 

```JSX
<FlatList 
	...
	renderItem={({ item, index }) => {
		return <Item title={`${index} ${item.breed}`} />
	}}
/>
```

The `renderItem` function returns a component to display for each row. The function receives an object with the `item` and the `index`. 

The `item` is an element from the data array and `index` is its position in the array. In this example, `item` would be one of the values from the data array.

When you get this working you may see a warning telling you that your list is missing keys. Fix this by defining a key extractor.

Define `keyExtractor`. React requires all children of a JSX list to have a unique key. `FlatList` handles this with `keyExtractor` a function that receives the item from data and returns a unique key.

All of the breeds are unique. You can use that as a key. 

```JSX
<FlatList 
	...
	keyExtractor={item => item.breed}
/>
```

The keyExtractor function generates a unique key for each cell. Here the cell was generated from the contents of the row plus the index. If your data had unique ids you could use those. 

https://reactnative.dev/docs/flatlist#docsNav

## After class

Your goal is to display a list of Cats or dogs. Your list should include all of the properties supplied for each animal breed. 

Remember animals share some properties but each animals list of properties us unique to each animal! 

Each property has a value associated with it. Display that next to the property name. 

- Use FlatList to display a list of animals
- Create a component for List item
- Display the breed name for each
- Display all of the properties and values supplied for each animal!
- Style your component
	- Style the text so the breed name is larger than the property names. 
	- Use some margin to add space around each Item
	- Add a border on the bottom of each item to act as a separator. 

**Stretch Goals!** 

Calculate an average rating for each animal. Add up all of the value from it's properties, other than 'breed' and divide by the number of properties. 

Round off the average rating to 1 or 2 decimals.

Display the rating as stars. Use the emoji star in a `Text` component. 

Style the names and values so the names are on the left and the values are on the right. You can do this with Flex. You may need to add more Text and View components to make this work!

Imagine this was one property and value row. 

```JS
<View style={styles.propertyRow}>
	<Text>Affectionate with Family</Text>
	<Text>3</Text>
</View>
```

You arrange these with flex like this: 

```JS
const styles = {
	propertyRow: {
		display: flex,
		justifyContent: 'space-between'
	}
}
```

Follow the tutorial videos and create the By Breed app. Your app should do the following: 

- Display all cats or dogs
- Display the name of each breed

## Resources 

- [ScrollView](https://facebook.github.io/react-native/docs/scrollview)
- [SafeAreaView](https://reactnative.dev/docs/safeareaview#docsNav)
- [FlatList](https://facebook.github.io/react-native/docs/flatlist)
	- [data](https://facebook.github.io/react-native/docs/flatlist#data)
	- [renderItem](https://facebook.github.io/react-native/docs/flatlist#renderitem)
	- [keyExtractor](https://facebook.github.io/react-native/docs/flatlist#keyextractor)

