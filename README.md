# 🌲 Shake A Tree 🌲
### Shake a tree! Get random facts from [TreeCard](https://www.treecard.org/) 🌲💳
React Native App made with 💚 & Expo. 

### How to View
- Install the expo app on your phone via the Google Play Store or Apple Store. 
- [Install expo on your machine](https://docs.expo.dev/get-started/installation/)
- Once you pull down the project locally, navigate into the project and run `npm install` to download dependencies and then `expo start` in your terminal to start your local server
- Open up the expo app on your phone, and take a picture of the QR code 

_Disclaimer: This project has only been tested in an Android setting_ 📱

## 🌄 Highlights 🌄
- Tap the tree and the individual leaves shake and generate a new fact
- Tapped facts are generated randomly
- TreeCard facts can be favorited and unfavorited. The heart state persists with each fact.
- Facts favorited generates a list on the "See Favorites" screen

# 🦌 The Process 🦌
I was inspired by TreeCard to create an app to further my knowledge in React Native as well as create a fun little app that compliments their branding and mission while educating the user about the company. 

Once I got my initial layout done in code, I used Figma to help me visualize my components, facts, and button placement.

![Capture](https://user-images.githubusercontent.com/19316487/155412245-b374d3d9-b6c5-469c-9655-fe28b9d4f868.JPG)

### 🌳 SVG Tree 🌳 ###

The tree originated from Pixabay and got replanted into this app. 
I changed the colors in illustrator to match the beautiful branding of TreeCard. 

The challenge was being able to animate the leaves individually and not as a whole so it looked more natural if you were to shake a tree!

Using the [Animated](https://reactnative.dev/docs/animated) library -
- Each leaf is a `Path` element, so I placed each leaf attribute into an array of objects, the `d` attribute and `fill` attribute.
- I created an animation component that I could wrap around each leaf and pass in the SVG attributes. 
- I added a randomDelay so that each leaf could begin its animation slightly staggered.
- React Native didn't have an Animated View for `Path`, but thankfully I was able to make one for `Path` so I was able to rebuild the SVG leaves in the animation component
- When the tree is tapped, a random number is generated and that change in state is used in useEffect to call the animation. (Ps. the random generated number is used for our index in the facts array!) 

### 🤍 Favorited Facts 🤍 ###
After my interview with David and Rob, a question was asked about how I'd go about saving a favorited item locally. We discussed placing items in an object of arrays - so I did just that. 
![Screenshot_20220223-150858](https://user-images.githubusercontent.com/19316487/155415202-9a8d77db-c873-4135-b3d9-0d93426b51b1.jpg)

Each fact is placed in an array of objects that has `quote`, `favorited`, and `id` keys! I placed the array of objects inside of state so we can keep track of the changes -- because I wanted the heart state to persist if it was viewed again. I pass down the currentFact that's display to the FavoriteIcon and set the state opposite of what that fact's `favorited` is currently. So if the icon was not hearted (false) by looking into the value, we want it to now be opposite of that.  I pass that into a handler where it goes back up to the parent where state is updated for the heart and array. I had to do it this way, originally I wanted to keep the isFavorited state in my FavoriteIcon, but state wasn't updating and I think it has to do with being in a stale closure!
