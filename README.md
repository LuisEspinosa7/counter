# Counter

Counter is a app for decrement or increment a number depending on two buttons, it was developed using HTML, CSS3+, Yarn, ReactJS, StyledComponents, FontAwesome icons and for the tests Jest and React testing library. It was written using the best practices for instance, a component oriented approach, UX Design rule (60% 30% 10%), variables, REMs, Responsiveness, mobile first approach, and more... 

## Enzyme related Tests
There is another branch in this repo with Enzyme tests (branch: enzymeTests), it shows how to test the components and their details out. But tke into account that you should not do that, React recommends to test your components with React testing library trying to immitate the user behaviours.

## Videos
A videos exposing the functionality of the proyect in local environment on a Desktop screen.

https://user-images.githubusercontent.com/56041525/160945096-9877114f-c9d9-41bb-9f4c-81517bd3baf9.mov


## Pictures
Some pictures of the project on iPHONE-SE, iPHONE-XR, iPAD-AIR,  iPAD-Mini respectively:

<table style="width:100%">
  <tr>
    <td>
  		<img src="https://github.com/LuisEspinosa7/simple-cards/blob/main/evidence/Evidence1.png">
	  </td>
    <td>
  		<img src="https://github.com/LuisEspinosa7/simple-cards/blob/main/evidence/evidence2.png">
	  </td>
    <td>
  		<img src="https://github.com/LuisEspinosa7/simple-cards/blob/main/evidence/evidence3.png">
	  </td>
  </tr>
</table>


## Online demo
Do you want to give it a try? Go on! 
https://luisespinosa7.github.io/simple-cards/

## Installation

This proyect should be installed using the following command:
```bash
yarn install
```

## Usage
Please use the following command:

```bash
yarn start
```

## Tests and coverage
Please use the following command:

```bash
yarn test --coverage --watchAll
```

And you should get the following results:


Take into account that it was not possible to test the Styled Components since right now the library 'react-test-renderer' has an issue with the create method (method to render and create a virtual dom for the styled component an its variants). So It was not possible to test them out using the library 'jest-styled-components', but maybe in the future.


## Contributing
This proyect is quite simple, and is part of my personal portfolio, so it is not intended to receive contributions.


## License
It is free.