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


________________________

### 🌳 SVG Tree 🌳 ###

![Capture](https://user-images.githubusercontent.com/19316487/155416758-7c504778-b14d-4a56-bc1a-d191a42bd4d7.JPG)

The tree originated from Pixabay and got replanted into this app. 
I changed the colors in illustrator to match the beautiful branding of TreeCard. 

The challenge was being able to animate the leaves individually and not as a whole so it looked more natural if you were to shake a tree!

Using the [Animated](https://reactnative.dev/docs/animated) library -
- Each leaf is a `Path` element, so I placed each leaf attribute into an array of objects, the `d` attribute and `fill` attribute.
- I created an animation component that I could wrap around each leaf and pass in the SVG attributes. 
- I added a randomDelay so that each leaf could begin its animation slightly staggered.
- React Native didn't have an Animated View for `Path`, but thankfully I was able to make one for `Path` so I was able to rebuild the SVG leaves in the animation component
- When the tree is tapped, a random number is generated and that change in state is used in useEffect to call the animation. (Ps. the random generated number is used for our index in the facts array!) 

________________________

### 🤍 Favorited Facts 🤍 ###
After my interview with David and Rob, a question was asked about how I'd go about saving a favorited item locally. We discussed placing items in an object of arrays - so I did just that. 

![Capture](https://user-images.githubusercontent.com/19316487/155417166-f22eca13-4e8a-4af0-8a16-44b0cbf076d7.JPG)

- Each fact is placed in an array of objects that has `quote`, `favorited`, and `id` keys! 
- I placed the array of objects inside of state so we can keep track of the changes -- because I wanted the heart state to persist if it was viewed again. 
- I pass down the currentFact to the FavoriteIcon and pass down the opposite of what that `favorited` property is currently. So if the icon was not hearted (false) by looking into the value, we want it to now be opposite of that.  
- The value makes its way back up to the parent where state is updated for the heart and array (made a shallow copy before updating state!!).
- From there, I can take that array and filter a list of the favorited facts!

![Capture](https://user-images.githubusercontent.com/19316487/155417874-97e2a896-03db-45cc-87be-5c8a04dcc0d4.JPG)

________________________

# 🏕️ Overall Thoughts 🏕️

I had a lot of fun making this app and I am loving mobile app development! I learned quite a bit from building Shake a Tree! I will say, React Native animation is quite intense and no joke -- but I love a good challenge and this is why I am a developer -- to solve problems and come up with fun solutions. No one will understand the true joy it is to have a leaf move on tap, haha!! As I built this app and dug even more into TreeCard, I am inspired by TreeCard's mission; I can't think of a better way than to pour my talents into a company that invests itself into making the world a better place. Thank you SO much for your time! 

### 🍄 Additional Features that would be Cool 🍄
(I just ran out of time!)
- Use physical device shaking for tree animation
- After X amount of taps, have a leaf or 2 fall
- Vibrate phone on tree tap
- Change background gradient based on time
- Place favorites into local storage
- Favorites list view - slide/gesture or long press to remove favorited fact
