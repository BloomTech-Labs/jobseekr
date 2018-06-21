#Jobseekr API

### Request > Route > Data > Response

API expects data of type `JSON`.


| Method > endpoint       | SEND           | RECEIVE  |
| ------------- |:-------------:| -----:|
| 'GET'  > '/jobs'           | `body: { username }`                        | `{jobs}`
| 'GET'  > '/meetups'           | `headers: { token }`                        | `{[...meetups]}`
| 'PUT'  > '/changeemail'    | `body: { token, oldEmail, newEmail }`       | `{user}`
| 'PUT'  > '/changepassword' | `body: { token, oldPassword, newPassword }` | `{user}` 
| 'DELETE' > '/meetups'      | `body: { id }`                              | `{success message}`
| 'POST' > '/signup'         | `body: { username, password }`             | `{newUser}`
| 'POST' > '/login'          | `body: { username, password }`              | `{token}`
| 'POST' > '/meetups'          | `body: { dateOfEvent, eventName, linkToEvent*, notes*, token }`| `{meetup}`
`* - optional`



### Models

### Routes
