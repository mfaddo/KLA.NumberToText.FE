# Number to Text Converter App

This is a simple Angular application that converts a numeric input into its corresponding textual representation. It includes validation for the input number format and utilizes an external service to perform the conversion.

## Features

- Convert a numeric input into its textual representation.
- Validate input number format to ensure it meets specific criteria.
- Display error message for invalid input format.
- Utilize debounce time to limit API requests.
- Display the result in a visually appealing manner.

## Technologies Used

- Angular
- Angular Forms
- RxJS
- Bootstrap (for styling)
- External API (for number to text conversion)

## Getting Started

1. Clone the repository:

```
https://github.com/mfaddo/KLA.NumberToText.FE.git
```

2. Install dependencies:

```
npm install
```


3. Serve the application:

```
ng serve
```

4. Open your browser and navigate to `http://localhost:4200/` to view the application.

**Note**: Ensure that the API service is up and running on `http://localhost:5079/` for the conversion functionality to work.


## Usage

- Enter a numeric value in the input field.
- Wait for the textual representation to appear.
- If the input format is invalid, an error message will be displayed.
