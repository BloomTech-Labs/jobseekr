#Jobseekr API

### Request > Route > Data > Response

API expects data of type `JSON`.

| Method > endpoint       | SEND           | RECEIVE  |
| ------------- |:-------------:| -----:|
| 'POST' > '/signup'         | body: { username, password }              | { newUser }
| 'POST' > '/login'          | body: { username, password }              | { token }
| 'GET'  > '/jobs'           | body: { username }                        | { jobs }
| 'PUT'  > '/changeemail'    | body: { token, oldEmail, newEmail }       | { user }
| 'PUT'  > '/changepassword' | body: { token, oldPassword, newPassword } | { user } 
```

### Models

### Routes
