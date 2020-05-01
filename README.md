# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project #3: Poké Shop!
# Overview
Final Project of Software Engineering Immersive Course SEI36.
 - Demo Link:https://hello-pokemon.netlify.app/#/

 ### Description
 It is like Online-Shopping site..(except you get to buy all variety of Pokemons !! )
 You can enjoy your pokemon shopping experience simply by logining with your name and start adding your favorite pokemon into your cart. Also during your shopping you can play your favorite old pokemon sound track by clicking headphones icon on top of nav bar.
 At the end of your shopping, you can checkout and make payment with your card.(Please do not enter your credit card number as this site is only educational purpose.You can enter 4242424242424242424242424242 to do mock payment)

 ![](test.gif)

### Technology 
React, bootstraps,Stripe


### The lesson I learned
In my opinion, React is all about props and state.
In this project, instead of my old way of passing props(data) between parent and child components, I used Context API and this was Game changer for me. You can only refer to one place to pull data and update such as pokemon image, your login name and so on. It gave me a lot of flexsibilities. However it was not easy to update state in context at first and I had tons of troubles as I was not used to use this context API. With time and lots of help, it all made a lot sense to me and I learned so much how to pass props with it. I used Stripe for users to be able to make payment at the end of shopping, this needs a bit of tricks as the tutorial I was referring to was meant for certain version of stripe and thanksfully Aleks and Joel were with me throughout the entire journey for this payament feature to happen!(Thank you!)

### Wanted feature
I would like to implement a way that users can stay on the same page where they are looking at each item since they are redirected to top of the page when they go see each pokemon description.

Also, this project was all based on Front end, it would be nice to have Back end and where purchase history can be saved in database so that users can go look at what they have bought in the pase.








