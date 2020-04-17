const { Worker } = require('bullmq')

const worker = new Worker('default', handle, {
  connection: {
    host: 'localhost',
    port: 6379,
    keyPrefix: 'queue_',
  },
})

function handle(job) {
  if (job.name === 'cars') {
    console.log('Ran job')
  }
}
