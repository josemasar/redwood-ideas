import { db } from 'src/lib/db'

export const ideas = () => {
  return db.idea.findMany()
}

export const idea = ({ id }) => {
  return db.idea.findUnique({
    where: { id },
  })
}

export const createIdea = ({ input }) => {
  return db.idea.create({
    data: input,
  })
}

export const updateIdea = ({ id, input }) => {
  return db.idea.update({
    data: input,
    where: { id },
  })
}

export const deleteIdea = ({ id }) => {
  return db.idea.delete({
    where: { id },
  })
}
