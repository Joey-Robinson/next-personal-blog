import Link from "next/link"

const CoverImage = ({ title, src, slug }) => {
  // prettier-ignore
  const image = <img src={src} alt={`Cover Image for ${title}`} />
  return (
    <>
      {slug ? (
        <Link as={`/newsletter/${slug}`} href="/newsletter/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </>
  )
}

export default CoverImage
