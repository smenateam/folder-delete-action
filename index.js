const core = require('@actions/core')
const github = require('@actions/github')

async function run() {
  try {
    const title = github.context.payload.pull_request.title
    if (title) {
      const regex = new RegExp(/^([A-Z]+-\d+)/)
      const taskName = title.match(regex)[1]
      core.setOutput('taskname', taskName)
    }
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()