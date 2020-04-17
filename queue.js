const { Queue } = require('bullmq')

const queue = new Queue('default', {
  connection: {
    host: 'localhost',
    port: 6379,
    keyPrefix: 'queue_',
  },
})

queue.add(
  'cars',
  { color: 'blue' }
  // This will trigger an infinite loop:
  // { attempts: 3 }
)
