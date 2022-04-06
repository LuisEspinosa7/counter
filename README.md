# Counter

Counter is a app for decrement or increment a number depending on two buttons, it was developed using HTML, CSS3+, Yarn, ReactJS, StyledComponents, FontAwesome icons and for the tests Jest and React testing library. It was written using the best practices for instance, a component oriented approach, UX Design rule (60% 30% 10%), variables, REMs, Responsiveness, mobile first approach, and more... 

## Enzyme related Tests
There is another branch in this repo with Enzyme tests (branch: enzymeTests), it shows how to test the components and their details out. But tke into account that you should not do that, React recommends to test your components with React testing library trying to immitate the user behaviours.

## Videos
A videos exposing the functionality of the proyect in local environment on a Desktop screen.

https://user-images.githubusercontent.com/56041525/161471233-4cb42894-0b71-41b5-b7e7-884872f6560e.mov


## Pictures
Some pictures of the project on iPHONE-SE, iPHONE-XR, iPAD-AIR,  iPAD-Mini respectively:

<table style="width:100%">
  <tr>
    <td>
  		<img width="450" alt="iPHONE-SE" src="https://user-images.githubusercontent.com/56041525/161471265-ce927a36-a8e0-4b93-a034-f77631e96d43.png">
	  </td>
    <td>
  	<img width="450" alt="iPHONE-XR" src="https://user-images.githubusercontent.com/56041525/161471636-c4b5aade-772f-4bc7-aa0d-94122a0c64f7.png">
    </td>
  </tr>
</table>


<table style="width:100%">
  <tr>
    <td>
  		<img width="450" alt="iPAD-AIR" src="https://user-images.githubusercontent.com/56041525/161471672-5c5f3312-ca4d-4c2f-a1c7-d349c3c18fb3.png">
	  </td>
    <td>
  	<img width="450" alt="iPAD-MINI" src="https://user-images.githubusercontent.com/56041525/161471692-4fadca29-b200-46cb-9bc7-c13ceb8c2c14.png">
    </td>
  </tr>
</table>

## Online demo
Do you want to give it a try? Go on! 
https://luisespinosa7.github.io/counter/

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



<table style="width:100%">
  <tr>
    <td>
  		<img width="705" alt="command" src="https://user-images.githubusercontent.com/56041525/161893026-d87f1301-12ca-4ed0-adb2-77618081b235.png">
	  </td>
    <td>
  	<img width="1432" alt="report" src="https://user-images.githubusercontent.com/56041525/161893047-a7e578ca-9a39-424e-bdcc-15edecc63253.png">
    </td>
  </tr>
</table>

Take into account that it was not possible to test the Styled Components since right now the library 'react-test-renderer' has an issue with the create method (method to render and create a virtual dom for the styled component an its variants). So It was not possible to test them out using the library 'jest-styled-components', but maybe in the future.


## Contributing
This proyect is quite simple, and is part of my personal portfolio, so it is not intended to receive contributions.


## License
It is free.
