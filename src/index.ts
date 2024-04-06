import { app } from "./server/Server"

const port = process.env.SERVER_PORT || 3333

app.listen( port, () => {
       console.log(`App listening on port ${port}`)
  })