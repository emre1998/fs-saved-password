 # Wi-Fi Password Retriever

This Node.js application retrieves the Wi-Fi passwords stored on a Windows machine. It uses the `netsh` command-line tool to fetch the profile names and passwords of all saved Wi-Fi networks.

## Prerequisites

- Node.js and npm installed on your machine.
- Windows operating system.

## Installation

Clone the repository:

```bash
git clone https://github.com/username/wifi-password-retriever.git
```

Install the dependencies:

```bash
cd wifi-password-retriever
npm install
```

## Usage

Run the application:

```bash
npm start
```

The application will start a server on port 5000.

## API

The application exposes a single API endpoint:

- `/wifi-passwords`: This endpoint returns a JSON array of objects containing the profile names and passwords of all saved Wi-Fi networks.

## Code Explanation

The application uses the `express` framework to create a simple web server. The `/wifi-passwords` endpoint is defined using the `app.get()` method.

The endpoint uses the `execSync()` function from the `child_process` module to execute the `netsh` command-line tool. The `netsh wlan show profiles` command is used to fetch the profile names of all saved Wi-Fi networks. The output of this command is then parsed to extract the profile names.

For each profile name, the endpoint uses the `netsh wlan show profile` command to fetch the password. The output of this command is then parsed to extract the password.

The profile names and passwords are then stored in an array of objects and returned as a JSON response.

## Conclusion

This application provides a simple way to retrieve the Wi-Fi passwords stored on a Windows machine. It can be useful for troubleshooting network issues or for recovering forgotten passwords.
