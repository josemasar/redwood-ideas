import { ideas, idea, createIdea, updateIdea, deleteIdea } from './ideas'

describe('ideas', () => {
  scenario('returns all ideas', async (scenario) => {
    const result = await ideas()

    expect(result.length).toEqual(Object.keys(scenario.idea).length)
  })

  scenario('returns a single idea', async (scenario) => {
    const result = await idea({ id: scenario.idea.one.id })

    expect(result).toEqual(scenario.idea.one)
  })

  scenario('creates a idea', async (scenario) => {
    const result = await createIdea({
      input: {
        name: 'String',
        body: 'String',
        postId: scenario.idea.one.post.id,
      },
    })

    expect(result.name).toEqual('String')
    expect(result.body).toEqual('String')
  })

  scenario('updates a idea', async (scenario) => {
    const original = await idea({ id: scenario.idea.one.id })
    const result = await updateIdea({
      id: original.id,
      input: { name: 'String271691' },
    })

    expect(result.name).toEqual('String271691')
  })

  scenario('deletes a idea', async (scenario) => {
    const original = await deleteIdea({ id: scenario.idea.one.id })
    const result = await idea({ id: original.id })

    expect(result).toEqual(null)
  })
})
