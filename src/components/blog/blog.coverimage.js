import Link from "next/link"

const CoverImage = ({ title, src, slug }) => {
  // prettier-ignore
  const image = <img src={src} alt={`Cover Image for ${title}`} />
  return (
    <>
      {slug ? (
        <Link as={`/blog/${slug}`} href="/blog/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </>
  )
}

export default CoverImage
