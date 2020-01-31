const core = require('@actions/core')
const github = require('@actions/github')

async function run() {
  try {
    const title = github.context.payload.pull_request.title
    core.debug("ochko ilyi na barabane")
    if (title) {
      const regex = new RegExp(/^([A-Z]+-\d+)/)
      const taskName = title.match(regex)[1]
      core.debug('vashe ochko na barabane', taskName)
      core.setOutput('taskname', taskName)
    }
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()