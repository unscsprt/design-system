import React from 'react'
import { Flex, Box, Button, OutlineButton } from 'pcln-design-system'
import Link from './Link'

const Pagination = ({ index, pages }) => {
  const previous = pages[index - 1]
  const next = pages[index + 1]

  return (
    <Flex>
      {previous && (
        <Link to={'/' + previous.name}>
          <OutlineButton>Previous: {previous.name}</OutlineButton>
        </Link>
      )}
      <Box ml="auto" />
      {next && (
        <Link to={'/' + next.name}>
          <Button bg="blue">Next: {next.name}</Button>
        </Link>
      )}
    </Flex>
  )
}

export default Pagination