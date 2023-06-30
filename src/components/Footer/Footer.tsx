import { FooterContainer } from './styles'

export function Footer() {
  return (
    <FooterContainer>
      <div>
        <p>
          Challenge by{' '}
          <a
            href="https://www.frontendmentor.io/home"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
        </p>
      </div>
      <div className="separator"> | </div>
      <div>
        <p>
          Coded by{' '}
          <a
            href="https://github.com/maricastroc"
            target="_blank"
            rel="noreferrer"
          >
            Mariana Castro.
          </a>
        </p>
      </div>
    </FooterContainer>
  )
}
