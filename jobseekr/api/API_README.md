#Jobseekr API

### Request > Route > Data > Response

API expects data of type `JSON`.

```
  'POST' > '/signup' | SEND > body: { username, password } | RECEIVE > { newUser }
  'POST' > '/login'  | SEND > body: { username, password } | RECIEVE > { token }
  'GET'  > '/jobs'   | SEND > body: { username } | RECIEVE { jobs }
```

### Models

### Routes
