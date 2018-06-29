#Jobseekr API

### Request > Route > Data > Response

API expects data of type `JSON`.


| Method > endpoint       | SEND           | RECEIVE  |
| ------------- |:-------------:| -----:|
| 'GET'  > '/jobs'           | `body: { username }`                        | `{jobs}`
| 'GET'  > '/meetups'           | `headers: { token }`                        | `{[...meetups]}`
| 'GET'  > '/contributions'           | `headers: { token }`                        | `{[...contributions]}`
| 'GET'  > '/resume' .       | `headers: { token }`  | `{title, url}` |
| 'PUT'  > '/changeemail'    | `body: { token, oldEmail, newEmail }`       | `{user}`
| 'PUT'  > '/changepassword' | `body: { token, oldPassword, newPassword }` | `{user}` 
| 'DELETE' > '/meetups'      | `body: { id }`                             | `{success message}`
| 'DELETE' > '/contributions'      | `body: { id }`                              | `{success message}`
| 'POST' > '/signup'         | `body: { username, password }`             | `{newUser}`
| 'POST' > '/login'          | `body: { username, password }`              | `{token}`
| 'POST' > '/meetups'          | `body: { dateOfEvent, eventName, linkToEvent*, notes*, token }`| `{meetup}`
| 'POST' > '/contributions'          | `body: { dateOfContribution, contributionName, linkToContribution*, notes*, token }`| `{contribution}`
| 'POST' > '/resume'          | `data, headers: { token }`| `{title, url}`|
`* - optional`



### Models

### Routes
