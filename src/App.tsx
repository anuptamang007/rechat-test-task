import { Link } from 'react-router-dom';
import { css } from 'styled-components/macro';

import { Box, Button, Col, Container, FormInput, Row } from './components/UI';
import { AppTheme } from './styles/Theme';

function App() {
  return (
    <>
      <Container
        css={css`
          padding-top: 50px;
          padding-bottom: 50px;

          ${AppTheme.mediaQuery.md} {
            padding-top: 100px;
          }
        `}
      >
        <Box as="h1">Hello World!</Box>
        <Box as="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos totam
          perspiciatis iste tenetur laborum debitis, dicta libero esse quidem
          commodi natus odit? Provident maiores recusandae, deleniti architecto
          dolorem excepturi adipisci.
        </Box>
        <Button as={Link} to="/" primary="true">
          CTA
        </Button>
        <Box as="ul">
          <Box as="li">
            <Link to="/">Home</Link>
          </Box>
          <Box as="li">
            <Link to="/about">About</Link>
          </Box>
        </Box>
        <Box as="ol">
          <Box as="li">Item 1</Box>
          <Box>Item 2</Box>
        </Box>
        <Box as="form" action="#">
          <Row md={{ alignItems: 'flex-end', direction: 'row' }}>
            <Col md={6}>
              <Box
                css={css`
                  margin-bottom: 20px;
                `}
              >
                <FormInput type="text" placeholder="Text" />
              </Box>
            </Col>
            <Col md={6}>
              <Box
                css={css`
                  margin-bottom: 20px;
                `}
              >
                <FormInput type="email" placeholder="email" />
              </Box>
            </Col>
            <Col md={6}>
              <Box
                css={css`
                  margin-bottom: 20px;
                `}
              >
                <FormInput as="select">
                  {[
                    { value: '1', label: 'Option 1' },
                    { value: '2', label: 'Option 2' },
                  ].map((option: { value: string; label: string }) => (
                    <Box as="option" key={option.value} value={option.value}>
                      {option.label}
                    </Box>
                  ))}
                </FormInput>
              </Box>
            </Col>
            <Col xs={6}>
              <Box
                css={css`
                  margin-bottom: 20px;
                `}
              >
                <FormInput as="textarea" placeholder="textarea" />
              </Box>
            </Col>
            <Col xs={12}>
              <Button type="submit">Button</Button>
            </Col>
          </Row>
        </Box>
      </Container>
    </>
  );
}

export default App;
